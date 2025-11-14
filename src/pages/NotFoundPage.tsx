import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4 text-center">
        <p className="font-mono text-cyber-pink uppercase tracking-[0.4em]">404</p>
        <h1 className="mt-6 text-4xl md:text-5xl font-dystopian text-white">Signal lost in the neon grid.</h1>
        <p className="mt-6 text-gray-300">
          The page you were looking for is either still in build mode or has been archived.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center border border-cyber-blue/60 px-6 py-3 text-sm font-mono uppercase tracking-[0.4em] text-cyber-blue transition hover:bg-cyber-blue/10"
        >
          Return to Portfolio
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
