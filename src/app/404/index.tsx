export default function NotFoundPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Go to Homepage
      </button>
    </div>
  );
}
