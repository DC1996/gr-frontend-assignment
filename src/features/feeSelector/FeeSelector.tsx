import styles from "./FeeSelector.module.css";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setAmount } from "../formData/formDataSlice";

export enum SelectType {
  basic = "Basic",
  input = "Input",
}

export function FeeSelector(props: any) {
  const dispatch = useAppDispatch();
  const amount = useAppSelector((state) => state.form.amount);
  const customAmount = useAppSelector((state) => state.form.customAmount);

  var basicBoxStyle: string =
    amount === props.amount && !customAmount ? styles.selected : "";

  if (props.type === SelectType.basic) {
    return (
      <div
        className={styles.boundingBox + " " + basicBoxStyle}
        onClick={() => dispatch(setAmount([Number(props.amount), false]))}
      >
        <p className={styles.feeAmount}>{props.amount + " €"}</p>
      </div>
    );
  }

  return (
    <div
      className={
        styles.boundingBox +
        " " +
        (customAmount === true ? styles.selected : "")
      }
    >
      <input
        className={
          styles.feeInput +
          " " +
          styles.feeAmount +
          " " +
          (customAmount === true ? styles.selectedInput : "")
        }
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setAmount([Number(e.target.value), true]))
        }
        value={customAmount ? amount : ""}
      />
      <p className={styles.feeAmount}>&nbsp;€</p>
    </div>
  );
}
