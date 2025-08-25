import { useEffect } from "react";

export function Dialog({ open, onClose, children }) {
  // Cegah scroll di body saat dialog terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-h-[100vh] overflow-y-auto shadow-xl w-full max-w-lg p-6 relative">
        {/* Tombol close pojok kanan atas */}
        <button onClick={onClose} className="absolute px-3 py-1 text-lg rounded-md right-8 bg-gray-500 text-white hover:bg-gray-400">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({ children, className }) {
  return <h2 className={`text-lg font-semibold ms-3 mt-2 mb-4 ${className}`}>{children}</h2>;
}

export function DialogDescription({ children }) {
  return <p className="text-sm mb-4">{children}</p>;
}

export function DialogBody({ children }) {
  return <div className=" px-4">{children}</div>;
}

export function DialogActions({ children }) {
  return <div className="mt-6 grid grid-cols-2 text-sm gap-2">{children}</div>;
}
