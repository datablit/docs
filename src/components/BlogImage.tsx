import React from "react";
import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function BlogImage({
  src,
  alt,
  width = 600,
  height,
  className = "",
}: BlogImageProps) {
  return (
    <div className={`my-4 flex ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height || Math.round((width * 9) / 16)} // Default 16:9 aspect ratio
        priority={false}
        quality={85}
      />
    </div>
  );
}
