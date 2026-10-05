import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);

  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">The page you are looking for does not exist.</p>
      <Link to="/">
        <Button label="Go Back Home" variant="primary" />
      </Link>
    </div>
  );
}