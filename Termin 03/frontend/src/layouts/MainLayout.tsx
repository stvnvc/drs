import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link to="/">
            <h1 className="text-xl font-bold">UserHub</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/users"
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className=" text-gray-800 py-4 mt-auto shadow-inner">
        <div className="container mx-auto text-center text-sm">
          © 2025 My React - Nemanja Petrovic
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
