// app/components/ui/Toast/Toast.jsx
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = ({
  message = "Something happened",
  type = "default", // "info" | "success" | "warning" | "error"
  duration = 5000,
  position = "bottom-right",
}) => {
  toast(message, {
    position: "bottom-right",
    autoClose: duration,
    type,
    position,
    closeOnClick: true,
    transition: Zoom,
  });
};
