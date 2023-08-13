"use client";
import { useEffect, useState, FC, ReactNode } from "react";

interface HorrorLayout {
  children: ReactNode;
}

export const HorrorLayout: FC<HorrorLayout> = ({ children }) => {
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(true);
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      {showDiv && (
        <div className="absolute ">
          <div className="image-continer">
            <div className="image">
              <img src="/mask-sprite-claws.svg" alt="hello" />
            </div>
          </div>
        </div>
      )}
      <div className="bg w-full h-screen">{children}</div>
    </div>
  );
};
