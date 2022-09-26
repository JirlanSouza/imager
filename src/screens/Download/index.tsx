import { editImageActions } from "../../actions/EditImage";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useEditImageStore } from "../../contexts/imageContext";
import styles from "./styles.module.scss";

export function Download() {
  const { state, dispatch } = useEditImageStore();
  return (
    <main className={styles.app_main}>
      <PrimaryButton
        onClick={() => {
          dispatch(editImageActions.setStep("selectImage"));
        }}
      >
        To home
      </PrimaryButton>
      <div className={styles.app_image_out}>
        <img src={state.imageOut} />
      </div>
    </main>
  );
}
