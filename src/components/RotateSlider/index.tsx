import { FixedSizeList as List } from "react-window";

import { SliderItem } from "./SliderItem";
import styles from "./styles.module.scss";

const ROTATE_SLIDER_INDEX_OFFSET = 179;

interface RotateSliderProps {
  rotateValue: number;
  onRendered: (value: number) => void;
}

export function RotateSlider({ rotateValue, onRendered }: RotateSliderProps) {
  return (
    <div className={styles.app_rotate_slider}>
      <span className={styles.app_rotate_slider_label}>{rotateValue}°</span>
      <List
        itemCount={361}
        itemSize={32}
        width={window.screen.width - 32}
        height={32}
        initialScrollOffset={173 * 32}
        layout="horizontal"
        itemData={rotateValue + ROTATE_SLIDER_INDEX_OFFSET}
        onItemsRendered={({ visibleStartIndex }) => onRendered(visibleStartIndex)}
      >
        {SliderItem}
      </List>
    </div>
  );
}
