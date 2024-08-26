// src/components/ErrorPage.js
const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg">
        We're sorry, but an unexpected error has occurred. The dev team is
        working on the issue
      </p>
      <div className="flex items-center gap-4 mt-5">
        <button
          className="py-2 px-5 text-base font-semibold bg-blue-400"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
        <button
          className="py-2 px-5 text-base font-semibold bg-blue-400"
          onClick={() => window.history.back()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
