// pages/404.tsx
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">🕷️ 404 🕷️</h1>
      <p className="text-xl mb-6">Oops! Something spooky happened!</p>
      <img src="/ghost.png" alt="Ghost" className="w-1/3 mb-4" />
      <Link href="/" passHref>
        <button className="px-6 py-3 mt-4 text-lg font-semibold text-black bg-orange-500 rounded shadow-lg hover:bg-orange-400 transition duration-300">
          Go Back Home
        </button>
      </Link>
      <p className="mt-4">Or you can explore some other haunted paths!</p>
    </div>
  );
};

export default Custom404;
