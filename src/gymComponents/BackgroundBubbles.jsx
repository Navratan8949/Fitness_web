import React from "react";

export const BackgroundBubbles = () => {
  return (
    <div className="fixed inset-2 pointer-events-none z-1 overflow-hidden">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="absolute bg-blue-500/10 rounded-full animate-bubble"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};
