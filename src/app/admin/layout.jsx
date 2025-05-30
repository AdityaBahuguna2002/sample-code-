// app/admin/layout.jsx
import { ToastContainer } from "react-toastify";
import AppProviders from "../providers/AppProviders";

export const metadata = {
  title: "Admin",
};

export default async function AdminLayout({ children }) {

  return (
    <div>
      <AppProviders>
        {children}
        <ToastContainer/>
      </AppProviders>
    </div>

  );
}
