"use client";
import { useState } from "react";
import Sidebar from "@/components/admin/customAdminUI/Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";

const AdminPageLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`transition-all overflow-auto duration-300 bg-white border-r h-full `}
      >
        {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
      </aside>

      {/* Main Content */}
      <main
        className={`bg-gradient-to-br from-stone-50 to-stone-100 flex-1 p-6 overflow-auto transition-all duration-300 ${
          sidebarOpen ? "ml-0" : ""
        }`}
      >
        {children}
      </main>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default AdminPageLayout;
