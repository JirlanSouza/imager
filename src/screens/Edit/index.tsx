import { useState } from "react";

import { EditScreenHeader } from "../../components/EditScreenHeader";
import { EditingImage } from "../../components/EditingImage";
import { EditingComands } from "../../components/EditingComands";
import styles from "./styles.module.scss";
import defaultImage from "../../assets/images/default.jpg";

export function Edit() {
  const [rotateValue, setRotateValue] = useState(0);
  const [selectedRatio, setSelectedRatio] = useState(0);

  return (
    <>
      <EditScreenHeader />

      <main className={styles.editing_main}>
        <EditingImage rotateValue={rotateValue} aspecRatioCode={selectedRatio} imageSrc={defaultImage} />
        <EditingComands
          rotateValue={rotateValue}
          aspectRatioCode={selectedRatio}
          setRotateValue={setRotateValue}
          setAspectRatioCode={setSelectedRatio}
        />
      </main>
    </>
  );
}
