export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-6 rounded-xl text-center my-6">
      <p className="text-red-600 dark:text-red-400 font-semibold">{message}</p>
    </div>
  );
}