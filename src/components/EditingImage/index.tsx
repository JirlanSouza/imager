import { ImageCrop } from "./ImageCrop";
import styles from "./styles.module.scss";

interface EditingImageProps {
  rotateValue: number;
  aspecRatioCode: number;
  imageSrc: string;
}

export function EditingImage() {
  return (
    <div className={styles.app_editing_image}>
      <ImageCrop />
    </div>
  );
}
