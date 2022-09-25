import { FaArrowLeft, FaTimes } from "react-icons/fa";

import { IconButton } from "../IconButton";
import { TextButton } from "../TextButton";
import styles from "./styles.module.scss";

export function EditScreenHeader() {
  return (
    <header className={styles.app_header}>
      <div className={styles.app_header_container}>
        <IconButton icon={FaArrowLeft} />
        <TextButton>Reset</TextButton>
        <IconButton icon={FaTimes} />
      </div>
    </header>
  );
}
