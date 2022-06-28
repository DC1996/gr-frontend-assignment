import styles from "./PrimaryButton.module.css";

export function PrimaryButton(props: any) {
  return (
    <button
      className={
        styles.primaryButton +
        " " +
        (props.valid ? styles.enabled : styles.disabled)
      }
      onClick={props.valid ? props.onClick : undefined}
    >
      <p className={styles.buttonLabel}>{props.label}</p>
    </button>
  );
}
