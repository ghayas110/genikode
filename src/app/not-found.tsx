import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-zinc-800 mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
        Page Not Found
      </h2>
      <p className="text-zinc-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved to a new location.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition-colors"
        >
          Return Home
        </Link>
        <Link
          href="/work"
          className="border border-zinc-700 px-6 py-3 rounded-full font-semibold hover:bg-zinc-900 transition-colors"
        >
          View Our Work
        </Link>
      </div>
    </div>
  );
}
