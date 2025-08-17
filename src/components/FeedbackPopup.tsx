import { useEffect, useRef } from "react";

interface Props {
  onClose: () => void;
}

const FeedbackPopup = ({ onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // press esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Detect clicks outside the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute top-0 left-3/4 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg p-4 rounded-md w-96 z-50"
    >
      <input
        type="email"
        placeholder="Email Address"
        className="w-full border border-gray-300 rounded p-2 mb-3"
      />
      <textarea
        placeholder="Your feedback..."
        className="w-full border border-gray-300 rounded p-2 mb-3 h-24"
      />
      <div className="text-gray-500 text-sm mb-3">🧭 supported.</div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-xl">
          <button>🤩</button>
          <button>😊</button>
          <button>😕</button>
          <button>😭</button>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
};

export default FeedbackPopup;
