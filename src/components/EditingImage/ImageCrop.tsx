import React, { useState, useRef, useEffect } from "react";
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";

import defaultImage from "../../assets/images/default.jpg";

function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

interface ImageCropProps {
  rotate: number;
  scale: number;
  aspect?: number;
}

export function ImageCrop({ rotate, scale, aspect }: ImageCropProps) {
  const [imgSrc, setImgSrc] = useState(defaultImage);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  useEffect(() => {
    if (!imgRef.current) return;
    const { width, height } = imgRef.current;

    if (aspect === 0) {
      setFreeAspect(width, height);
      return;
    }

    updateCrop(width, height);
  }, [aspect]);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    updateCrop(width, height);
  }

  function updateCrop(width: number, height: number) {
    if (!aspect) return;
    setCrop(centerAspectCrop(width, height, aspect));
  }

  function setFreeAspect(width: number, height: number) {
    setCrop(undefined);
  }

  return (
    <ReactCrop
      crop={crop}
      onChange={(_, percentCrop) => setCrop(percentCrop)}
      onComplete={(c) => setCompletedCrop(c)}
      aspect={aspect}
    >
      <img
        ref={imgRef}
        alt="Crop me"
        src={imgSrc}
        style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
        onLoad={onImageLoad}
      />
    </ReactCrop>
  );
}
