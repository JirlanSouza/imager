import { useEffect, useRef, useState } from "react";
import { Image as ImageJs } from "image-js";

import { ImageCrop } from "./ImageCrop";
import styles from "./styles.module.scss";

interface EditingImageProps {
  rotateValue: number;
  aspecRatioCode: number;
  imageSrc: string;
}

const aspects = [1 / 1, 2 / 3, 3 / 2, 3 / 4, 4 / 3, 16 / 9, 21 / 9];

export function EditingImage({ rotateValue, aspecRatioCode, imageSrc }: EditingImageProps) {
  return (
    <div className={styles.app_editing_image}>
      <ImageCrop rotate={rotateValue} scale={1} aspect={aspects[aspecRatioCode]} />
    </div>
  );
}
