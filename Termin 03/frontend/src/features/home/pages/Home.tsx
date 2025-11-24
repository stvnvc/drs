export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto mt-16 text-center px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
        Welcome to UserHub!
      </h1>

      <p className="text-lg text-gray-600 mt-6 leading-relaxed">
        This project is built with React, TypeScript, and Vite — following a
        clean, scalable, feature-based architecture. The goal is to keep the
        code simple, organized, and easy to extend as the application grows.
      </p>

      <p className="text-gray-700 mt-4 leading-relaxed">
        Navigate through the app to explore layouts, pages, API integration and
        modern UI components powered by TailwindCSS.
      </p>

      <div className="mt-12 p-8 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold">Why this architecture?</h2>
        <p className="mt-3 text-base opacity-90 leading-relaxed">
          A feature-based folder structure keeps related code together, improves
          maintainability, and makes it easier to scale larger projects —
          especially when combining a frontend like React with a backend API
          such as your Flask service.
        </p>
      </div>
    </div>
  );
}
