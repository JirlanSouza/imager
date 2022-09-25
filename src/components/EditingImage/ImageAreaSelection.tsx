import styles from "./styles.module.scss";

interface ImageAreaSelectionProps {
  weight: {
    width: number;
    height: number;
  };
  position: {
    offsetX: number;
    offsetY: number;
  };
}

export function ImageAreaSelection({ weight, position }: ImageAreaSelectionProps) {
  return (
    <span
      style={{
        width: weight.width + "px",
        height: weight.height + "px",
        top: position.offsetY,
        bottom: position.offsetY,
        left: position.offsetX,
        right: position.offsetX,
      }}
      className={styles.app_image_area_selection}
    />
  );
}
