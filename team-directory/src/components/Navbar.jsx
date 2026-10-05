import { NavLink } from "react-router-dom";

export default function Navbar({ favoriteCount, darkMode, setDarkMode }) {
  const navLinkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">TeamDirectory</span>
          <div className="flex space-x-2">
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>
            <NavLink to="/users" className={navLinkStyle}>Users</NavLink>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
            Favorites: {favoriteCount}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}