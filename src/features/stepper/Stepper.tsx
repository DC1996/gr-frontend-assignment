import styles from "./Stepper.module.css";

import { useAppSelector } from "../../app/hooks";

export function Stepper(props: any) {
  const step = useAppSelector((state) => state.form.step);

  // Add steps
  let steps: any[] = [];
  for (let i: number = 1; i < props.stepCount + 1; i++) {
    steps.push(
      <div
        key={i}
        className={step === i ? styles.active : styles.default}
      ></div>
    );
  }

  return <div className={styles.boundingBox}>{steps}</div>;
}
