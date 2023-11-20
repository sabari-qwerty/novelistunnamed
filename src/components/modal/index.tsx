import { useClickOutside } from "@/hook/useClickOutside";
import { cn } from "@/util/dom";
import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Modal {
  children?: ReactNode;
  curserPointer?: boolean;
  className?: string;
  background?: string;
  onClose: () => void;
}

const Modal: FC<Modal> = ({ onClose, children, className, curserPointer }) => {
  const [root, setRoot] = useState<HTMLDivElement>();

  const closeOneEscKeypress = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;

    onClose?.();
  };

  const ref = useClickOutside(() => onClose?.());

  useEffect(() => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    setRoot(div);

    document.addEventListener("keydown", closeOneEscKeypress);

    return () => {
      document.removeEventListener("keydown", closeOneEscKeypress);

      if (!div) return;
      div.remove();
    };
  }, []);

  const onOutsideClick = () => {
    onClose?.();
  };

  return root
    ? createPortal(
        <div
          className={cn(
            `fixed top-0 left-0 flex items-center justify-center bg-black/20 backdrop-blur-sm w-full h-full z-50 ${className}`
          )}
        >
          <div
            className={`absolute top-0 left-0 z-10 w-full h-full bg-transparent ${
              curserPointer ? "cursor-pointer" : ""
            }`}
            onClick={onOutsideClick}
          ></div>
          <div className="z-20" ref={ref}>
            {children}
          </div>
        </div>,
        root
      )
    : null;
};

export default Modal;
