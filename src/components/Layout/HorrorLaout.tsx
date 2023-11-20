"use client";
import { useEffect, useState, FC, ReactNode } from "react";
import toast from "react-hot-toast";

interface HorrorLayout {
  children: ReactNode;
}

export const HorrorLayout: FC<HorrorLayout> = ({ children }) => {
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(false);
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      {showDiv && (
        <div className={`absolute w-full overflow-hidden `}>
          <div className={`image-continer `}>
            <div className="image">
              <img src="/mask-sprite-claws.svg" alt="hello" />
            </div>
          </div>
        </div>
      )}
      <div className="  w-full bg-[#1d232a]  ">{children}</div>
    </div>
  );
};
