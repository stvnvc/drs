export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">
        About This Project
      </h1>

      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        This project is a{" "}
        <span className="font-semibold text-indigo-600">
          full-stack web application
        </span>
        &nbsp; built to demonstrate modern development practices. It combines a{" "}
        <span className="font-semibold text-blue-600">React frontend</span>
        &nbsp;with a{" "}
        <span className="font-semibold text-blue-600">Flask backend API</span>,
        following{" "}
        <span className="italic text-gray-900 font-medium">
          feature-based architecture
        </span>{" "}
        and.
      </p>

      <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900">Tech Stack</h2>
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Frontend:</span> React + TypeScript
            + Vite + TailwindCSS
          </li>
          <li>
            <span className="font-semibold">Backend:</span> Python Flask +
            MongoDB
          </li>
          <li>
            <span className="font-semibold">Styling:</span> TailwindCSS
          </li>
          <li>
            <span className="font-semibold">API Communication:</span> REST +
            JSON
          </li>
        </ul>
      </div>

      <div className="mt-8 bg-linear-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold">Development Approach</h2>
        <p className="mt-3 leading-relaxed">
          The application is structured to maximize{" "}
          <span className="font-semibold">scalability</span> and{" "}
          <span className="font-semibold">maintainability</span>. Each feature
          has its own folder with{" "}
          <span className="italic">components, pages, hooks, and styles</span>{" "}
          grouped together. This approach ensures that new features can be added
          without affecting unrelated parts of the app.
        </p>
      </div>
    </div>
  );
}
