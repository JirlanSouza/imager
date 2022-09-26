import { editImageActions } from "../../actions/EditImage";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useEditImageStore } from "../../contexts/imageContext";
import styles from "./styles.module.scss";

export function SelectImage() {
  const { dispatch } = useEditImageStore();
  return (
    <main className={styles.app_main}>
      <PrimaryButton
        onClick={() => {
          dispatch(editImageActions.setStep("edit"));
        }}
      >
        Edit
      </PrimaryButton>
    </main>
  );
}
