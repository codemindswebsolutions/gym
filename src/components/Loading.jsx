// src/components/Loading.jsx
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-[#FF4C60] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
