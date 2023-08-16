import React, { useState, useEffect } from 'react';

const ImageSkeleton = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(Math.floor(Math.random() * 60 + 60));
  }, []);

  return (
    <div
      className="bg-slate-300 rounded-2xl w-full"
      style={{ aspectRatio: height / 120 }}
    />
  );
};

export default ImageSkeleton;
