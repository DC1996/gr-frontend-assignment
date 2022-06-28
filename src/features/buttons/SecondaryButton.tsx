import styles from "./SecondaryButton.module.css";

export function SecondaryButton(props: any) {
  return (
    <button className={styles.secondaryButton} onClick={props.onClick}>
      <p className={styles.buttonLabel}>{props.label}</p>
    </button>
  );
}
