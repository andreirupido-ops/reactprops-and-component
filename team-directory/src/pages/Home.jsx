import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Team Directory";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Welcome to the Team Directory
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        Easily manage, search, and browse your organization members, explore their job roles, and keep track of your favorite colleagues.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/users">
          <Button label="Explore Users" variant="primary" />
        </Link>
        <Link to="/about">
          <Button label="Learn More" variant="danger" />
        </Link>
      </div>
    </div>
  );
}