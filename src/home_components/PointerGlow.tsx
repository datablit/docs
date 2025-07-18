"use client";

import { useEffect, useState } from "react";

export default function PointerGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: "screen" }}
    >
      <div
        className="absolute w-80 h-80 bg-purple-500 opacity-20 blur-3xl rounded-full"
        style={{
          transform: `translate(${position.x - 160}px, ${position.y - 160}px)`,
        }}
      />
    </div>
  );
}
