import React, { useState } from "react";
import { editImageActions } from "../../actions/EditImage";
import { useEditImageStore } from "../../contexts/imageContext";
import styles from "./styles.module.scss";

export function ImageInput() {
  const [imageName, setImagename] = useState("Selecione uma imagem");
  const { state, dispatch } = useEditImageStore();

  function handleSelectImage(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const imageFile = event.target.files[0];
    setImagename(imageFile.name);
    const imageUrl = URL.createObjectURL(imageFile);
    dispatch(editImageActions.setImageSrc(imageUrl));
  }

  return (
    <label htmlFor="image_input" className={styles.app_image_input}>
      <span>
        <input id="image_input" type="file" accept="image/*" onChange={handleSelectImage} />
      </span>
      {imageName}
    </label>
  );
}
