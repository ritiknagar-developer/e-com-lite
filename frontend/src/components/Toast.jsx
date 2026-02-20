import { useEffect } from "react";

export default function Toast({ msg, clear, type = "success" }) {
  useEffect(() => {
    if (!msg) return;

    const timer = setTimeout(() => {
      clear();
    }, 2500);

    return () => clearTimeout(timer);
  }, [msg]);

  if (!msg) return null;

  const styles = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div
      className={`fixed top-6 right-6 ${styles[type]} text-white px-6 py-3 rounded-xl shadow-lg z-50
      transition-all duration-300 animate-[slideIn_.3s_ease]`}
    >
      {msg}
    </div>
  );
}
