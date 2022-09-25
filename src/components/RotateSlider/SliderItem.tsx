import { FaMinus } from "react-icons/fa";

import styles from "./styles.module.scss";

interface SliderItemProps {
  index: number;
  style: React.CSSProperties;
  data: number;
}

export const SliderItem = ({ index, style, data: rotateValue }: SliderItemProps) => (
  <span
    style={style}
    className={`${styles.app_rotate_slider_item} ${
      index === rotateValue ? styles.app_rotate_slider_item_selected : ""
    }`}
  >
    <FaMinus size={index === rotateValue ? 22 : 18}></FaMinus>
  </span>
);
