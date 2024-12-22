import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Mahasiswa from '../Pages/Admin/Mahasiswa';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    console.log(isMobile);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return (
      <div className="bg-gray-100 h-screen flex flex-col">
        <div className="flex-grow flex ">
          <Sidebar />
          <Mahasiswa />
        </div>
        <Footer/>
      </div>
    );
  } else {
    return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <div className="flex items-center bg-indigo-900 text-white p-4">
        <button
          onClick={toggleSidebar}
          className="mr-4 p-2 bg-indigo-700 hover:bg-indigo-600 rounded focus:outline-none"
        >
          {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>

      <div className="flex-grow flex relative">
        <div
          className={`${
            isSidebarOpen ? 'block' : 'hidden'
          } md:block fixed inset-0 bg-black bg-opacity-50 md:relative md:bg-transparent md:opacity-100 z-50`}
          onClick={() => setIsSidebarOpen(false)}
        >
          {isSidebarOpen && (
            <div className="relative">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                <FaTimes />
              </button>
              <Sidebar />
            </div>
          )}
        </div>

        <div className={`flex-grow ${isSidebarOpen ? 'md:ml-64' : ''}`}>
          <Mahasiswa />
        </div>
      </div>

      <Footer />
    </div>
    );
  }
};

function Sidebar() {
  return (
    <aside className="w-screen md:w-64 bg-indigo-900 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav className="py-2 px-4 mt-4">
          <ul>
            <li className="py-2 px-4 hover:bg-indigo-700">
              <a href="">Dashboard</a>
            </li>

            <li className="py-2 px-4 hover:bg-indigo-700">
              <a href="">Mahasiswa</a>
            </li>

            <li className="py-2 px-4 hover:bg-indigo-700">
              <a href="">Setting</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="bg-indigo-900 p-4 text-white text-center bottom-0">
      &copy; Konoha Corp.
    </footer>
  );
}

export default Layout;
