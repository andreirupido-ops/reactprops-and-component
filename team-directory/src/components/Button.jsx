export default function Button({ label, onClick, variant = "primary", children }) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-200 shadow-sm cursor-pointer";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600",
    danger: "bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant] || variants.primary}`}>
      {label} {children}
    </button>
  );
}