export default function ({ children }) {
  return (
    <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
      <span class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
        {children}
      </span>
    </blockquote>
  );
}
