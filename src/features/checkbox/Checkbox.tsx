import styles from "./Checkbox.module.css";

export function Checkbox(props: any) {
  return (
    <div className={styles.boundingBox}>
      <input
        className={styles.checkbox}
        id={props.name}
        name={props.name}
        type="checkbox"
        value={props.value}
        onChange={props.onChange}
      />
      <label className={styles.checkboxLabel} htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  );
}
