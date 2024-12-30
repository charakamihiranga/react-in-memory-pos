import {Link} from "react-router-dom";

export function Error() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-blue-500">404</h1>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
                    <p className="mt-2 text-gray-600">
                        Oops! The page you are looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                    >
                        Go Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
}