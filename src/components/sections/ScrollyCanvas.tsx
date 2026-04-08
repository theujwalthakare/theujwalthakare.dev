import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import Overlay from './Overlay';

const frameModuleMap = import.meta.glob('../../sequence/ezgif-split/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const extractFrameNumber = (path: string) => {
  const match = path.match(/frame_(\d+)/i);
  return match ? Number.parseInt(match[1], 10) : 0;
};

const drawImageCover = (
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number,
) => {
  const horizontalRatio = canvasWidth / image.naturalWidth;
  const verticalRatio = canvasHeight / image.naturalHeight;
  const coverRatio = Math.max(horizontalRatio, verticalRatio);

  const drawWidth = image.naturalWidth * coverRatio;
  const drawHeight = image.naturalHeight * coverRatio;
  const offsetX = (canvasWidth - drawWidth) * 0.5;
  const offsetY = (canvasHeight - drawHeight) * 0.5;

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
};

const ScrollyCanvas = () => {
  // [CHANGE: progressive-loading] Render quickly after the first few frames are decoded.
  const INITIAL_FRAMES_TO_UNLOCK = 2;

  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedFrameIndexesRef = useRef<Set<number>>(new Set());
  const currentFrameRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [loadedFramesCount, setLoadedFramesCount] = useState(0);

  const frameUrls = useMemo(() => {
    return Object.entries(frameModuleMap)
      .sort(([pathA], [pathB]) => extractFrameNumber(pathA) - extractFrameNumber(pathB))
      .map(([, url]) => url);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const image = imagesRef.current[frameIndex];
    if (!image || !image.complete) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const pixelRatio = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const targetWidth = Math.max(1, Math.floor(width * pixelRatio));
    const targetHeight = Math.max(1, Math.floor(height * pixelRatio));

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    drawImageCover(context, image, width, height);
    currentFrameRef.current = frameIndex;
  };

  // [CHANGE: progressive-loading] Find the closest already-loaded frame if the exact target frame is not ready yet.
  const getBestAvailableFrame = useCallback((requestedFrameIndex: number) => {
    if (loadedFrameIndexesRef.current.has(requestedFrameIndex)) {
      return requestedFrameIndex;
    }

    for (let index = requestedFrameIndex - 1; index >= 0; index -= 1) {
      if (loadedFrameIndexesRef.current.has(index)) {
        return index;
      }
    }

    for (let index = requestedFrameIndex + 1; index < frameUrls.length; index += 1) {
      if (loadedFrameIndexesRef.current.has(index)) {
        return index;
      }
    }

    return 0;
  }, [frameUrls.length]);

  /*
   * [PREVIOUS LOGIC - COMMENTED FOR EASY UNDO]
   * This waited for all frames before setting ready=true.
   *
   * useEffect(() => {
   *   if (!frameUrls.length) return;
   *
   *   let loaded = 0;
   *   const imageList = frameUrls.map((url) => {
   *     const image = new Image();
   *     image.decoding = 'async';
   *
   *     const onAssetResolved = () => {
   *       loaded += 1;
   *       if (loaded === frameUrls.length) {
   *         imagesRef.current = imageList;
   *         setReady(true);
   *       }
   *     };
   *
   *     image.onload = onAssetResolved;
   *     image.onerror = onAssetResolved;
   *     image.src = url;
   *     return image;
   *   });
   * }, [frameUrls]);
   */

  // [CHANGE: progressive-loading] Unlock rendering after first N frames, then continue loading in background.
  useEffect(() => {
    if (!frameUrls.length) return;

    let loaded = 0;
    let unlocked = false;
    const imageList = frameUrls.map((url, index) => {
      const image = new Image();
      image.decoding = 'async';

      const onAssetResolved = () => {
        loaded += 1;

        loadedFrameIndexesRef.current.add(index);
        setLoadedFramesCount(loaded);

        if (!unlocked && loadedFrameIndexesRef.current.size >= Math.min(INITIAL_FRAMES_TO_UNLOCK, frameUrls.length)) {
          unlocked = true;
          setReady(true);
        }

        if (loaded === frameUrls.length) {
          setLoadedFramesCount(frameUrls.length);
        }
      };

      image.onload = onAssetResolved;
      image.onerror = onAssetResolved;
      image.src = url;
      return image;
    });

    imagesRef.current = imageList;
    const loadedFrameIndexes = loadedFrameIndexesRef.current;

    return () => {
      imagesRef.current = [];
      loadedFrameIndexes.clear();
      setLoadedFramesCount(0);
      setReady(false);
    };
  }, [frameUrls]);

  useEffect(() => {
    if (!ready) return;
    renderFrame(getBestAvailableFrame(currentFrameRef.current));

    const handleResize = () => {
      renderFrame(getBestAvailableFrame(currentFrameRef.current));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getBestAvailableFrame, ready]);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!ready || !imagesRef.current.length) return;

    const targetFrame = Math.min(
      imagesRef.current.length - 1,
      Math.max(0, Math.round(progress * (imagesRef.current.length - 1))),
    );

    const nextFrame = getBestAvailableFrame(targetFrame);

    if (nextFrame !== currentFrameRef.current) {
      renderFrame(nextFrame);
    }
  });

  return (
    <section ref={sectionRef} id="home" className="relative m-0 h-[500vh] w-full !p-0 bg-bg">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <canvas ref={canvasRef} className="block h-full w-full" aria-label="Scroll-controlled animation canvas" />

        <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(59,130,246,0.34)_0%,rgba(15,23,42,0.16)_48%,rgba(255,109,0,0.34)_100%)]" />
        <Overlay scrollYProgress={scrollYProgress} />

        {!ready && (
          <div className="absolute inset-0 grid place-items-center bg-bg text-sm uppercase tracking-[0.35em] text-muted">
            Loading Frames ({loadedFramesCount}/{frameUrls.length})
          </div>
        )}
      </div>
    </section>
  );
};

export default ScrollyCanvas;