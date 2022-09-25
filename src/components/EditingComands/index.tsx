import { useState } from "react";

import { AspectrationButtonsBox } from "../AspectRatioButtonsBox";
import { PrimaryButton } from "../PrimaryButton";
import { RotateSlider } from "../RotateSlider";
import styles from "./styles.module.scss";

interface EditingComandsProps {
  rotateValue: number;
  aspectRatioCode: number;
  setRotateValue: (value: number) => void;
  setAspectRatioCode: (code: number) => void;
}

export function EditingComands({
  rotateValue,
  aspectRatioCode,
  setRotateValue,
  setAspectRatioCode,
}: EditingComandsProps) {
  const [lastStartVisible, setLastStartVisible] = useState(174);

  function handleSliderWeel(value: number) {
    setRotateValue(rotateValue + (value - lastStartVisible));
    setLastStartVisible(value);
  }

  return (
    <div className={styles.comands_container}>
      <RotateSlider rotateValue={rotateValue} onRendered={handleSliderWeel} />
      <AspectrationButtonsBox aspectRatioCode={aspectRatioCode} setAspectRatioCode={setAspectRatioCode} />
      <PrimaryButton>Apply</PrimaryButton>
    </div>
  );
}
