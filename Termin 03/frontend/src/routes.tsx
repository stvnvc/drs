import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./features/home/pages/Home";
import AboutPage from "./features/about/pages/About";
import ContactPage from "./features/contact/pages/Contact";
import UsersPage from "./features/users/pages/UsersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "users", element: <UsersPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
