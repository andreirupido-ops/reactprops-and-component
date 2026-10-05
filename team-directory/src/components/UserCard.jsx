import { Link } from "react-router-dom";
import Button from "./Button";

export default function UserCard({ id, name, email, company, role, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
            <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs px-2.5 py-1 rounded-full font-medium mt-1">
              {role}
            </span>
          </div>
          <button
            onClick={() => onToggleFavorite(id)}
            className={`p-2 rounded-full transition cursor-pointer ${
              isFavorite 
                ? "bg-amber-100 dark:bg-amber-900/50 text-amber-500" 
                : "bg-gray-100 dark:bg-gray-700 text-gray-400 hover:text-amber-500"
            }`}
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          >
            ★
          </button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1"><span className="font-semibold">Email:</span> {email}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4"><span className="font-semibold">Company:</span> {company}</p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
        <Link to={`/users/${id}`}>
          <Button label="View Details" variant="primary" />
        </Link>
        <Button 
          label={isFavorite ? "Favorited" : "Favorite"} 
          variant={isFavorite ? "danger" : "primary"}
          onClick={() => onToggleFavorite(id)}
        />
      </div>
    </div>
  );
}