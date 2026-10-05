import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { usersData } from "../data/users";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Button";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const foundUser = usersData.find((u) => u.id === parseInt(id));
      setUser(foundUser || null);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (user) {
      document.title = user.name;
    } else {
      document.title = "User Not Found";
    }
  }, [user]);

  if (loading) return <Loader />;

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <ErrorMessage message="User not found." />
        <Link to="/users">
          <Button label="Back to Users" variant="primary" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link to="/users" className="inline-block mb-6 text-blue-600 dark:text-blue-400 font-medium hover:underline">
        ← Back to Users
      </Link>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl">
        <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-semibold mb-4">
          {user.role}
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">{user.name}</h1>
        <div className="space-y-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300">
          <p><span className="font-semibold text-gray-900 dark:text-white">Email:</span> {user.email}</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">Company:</span> {user.company}</p>
          <p><span className="font-semibold text-gray-900 dark:text-white">User ID:</span> {user.id}</p>
        </div>
      </div>
    </div>
  );
}