import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About | Team Directory";
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Team Directory</h1>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
        This application is a responsive team directory built using React, Vite, Tailwind CSS, and React Router. It allows organizations and teams to seamlessly manage member directories, search team profiles instantly, and bookmark preferred colleagues.
      </p>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        Designed with component reusability and clean state management in mind, supporting both light and dark display modes.
      </p>
    </div>
  );
}