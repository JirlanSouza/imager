import styles from "./styles.module.scss";

interface EditingImageProps {
  rotateValue: number;
  imageSrc: string;
}

export function EditingImage({ rotateValue, imageSrc }: EditingImageProps) {
  return (
    <div className={styles.app_editing_image}>
      <img style={{ transform: `rotate(${rotateValue}deg)` }} src={imageSrc} alt="editing image" />
    </div>
  );
}
