import { AspectRatioButton } from "../AspectRatioButton";
import styles from "./styles.module.scss";

interface AspectrationButtonsBoxprops {
  aspectRatioCode: number;
  setAspectRatioCode: (code: number) => void;
}

export function AspectrationButtonsBox({ aspectRatioCode, setAspectRatioCode }: AspectrationButtonsBoxprops) {
  function handleSelectAspectRatio(code: number) {
    setAspectRatioCode(code);
  }

  return (
    <div className={styles.app_aspect_ratio_buttons_box}>
      <AspectRatioButton
        selected={aspectRatioCode === 0}
        ratioX={1}
        ratioY={1}
        onClick={() => handleSelectAspectRatio(0)}
      />
      <AspectRatioButton
        selected={aspectRatioCode === 1}
        ratioX={2}
        ratioY={3}
        onClick={() => handleSelectAspectRatio(1)}
      />
      <AspectRatioButton
        selected={aspectRatioCode === 2}
        ratioX={3}
        ratioY={2}
        onClick={() => handleSelectAspectRatio(2)}
      />
      <AspectRatioButton
        selected={aspectRatioCode === 3}
        ratioX={3}
        ratioY={4}
        onClick={() => handleSelectAspectRatio(3)}
      />
      <AspectRatioButton
        selected={aspectRatioCode === 4}
        ratioX={4}
        ratioY={3}
        onClick={() => handleSelectAspectRatio(4)}
      />
      <AspectRatioButton
        selected={aspectRatioCode === 5}
        ratioX={16}
        ratioY={9}
        onClick={() => handleSelectAspectRatio(5)}
      />
      <AspectRatioButton
        selected={aspectRatioCode === 6}
        ratioX={21}
        ratioY={9}
        onClick={() => handleSelectAspectRatio(6)}
      />
    </div>
  );
}
