import { useEffect, useMemo, useRef, useState } from 'react';
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [ready, setReady] = useState(false);

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

  useEffect(() => {
    if (!frameUrls.length) return;

    let loaded = 0;
    const imageList = frameUrls.map((url) => {
      const image = new Image();
      image.decoding = 'async';

      const onAssetResolved = () => {
        loaded += 1;
        if (loaded === frameUrls.length) {
          imagesRef.current = imageList;
          setReady(true);
        }
      };

      image.onload = onAssetResolved;
      image.onerror = onAssetResolved;
      image.src = url;
      return image;
    });
  }, [frameUrls]);

  useEffect(() => {
    if (!ready) return;
    renderFrame(currentFrameRef.current);

    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ready]);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!ready || !imagesRef.current.length) return;

    const nextFrame = Math.min(
      imagesRef.current.length - 1,
      Math.max(0, Math.round(progress * (imagesRef.current.length - 1))),
    );

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
            Loading Frames
          </div>
        )}
      </div>
    </section>
  );
};

export default ScrollyCanvas;