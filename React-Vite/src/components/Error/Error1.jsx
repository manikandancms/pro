import { useRouteError, Link } from "react-router-dom";

const Error1 = () => {
  const error = useRouteError();
  const status = error?.status || 404;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4">{status}</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {status === 404 ? "Page Not Found" : "Something Went Wrong"}
        </h2>
        <p className="text-sm text-gray-500 italic mb-6">
          {error?.statusText || error?.message || "We couldn't find what you're looking for."}
        </p>

        <Link
          to="/"
          className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error1;
