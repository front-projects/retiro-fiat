/* eslint-disable react/prop-types */
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function Modal({ onClose, isOpen, children }) {
  const content = useRef(null);

  useEffect(() => {
    if (isOpen && content.current) {
      gsap.to(content.current, { scale: "1" });
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-10"
        onClick={() => {
          onClose();
        }}
      >
        <div
          ref={content}
          className={`bg-white rounded-[24px] p-4 scale-[.5] custom-shadow`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center ">{children}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
