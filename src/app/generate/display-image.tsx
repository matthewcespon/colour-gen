"use client";

import React from 'react';

interface DisplayImageProps {
  file: File | null
  generate: boolean
}

const DisplayImage: React.FC<DisplayImageProps> = ({
  file,
}) => {
  const imageUrl = file ? URL.createObjectURL(file) : undefined;
  return (
    <div>
      {file && (
        <>
          <img src={imageUrl} alt="uploaded image" />
        </>
      )}
    </div>
  );
};


export default DisplayImage;
