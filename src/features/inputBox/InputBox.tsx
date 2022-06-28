import ReactCountryFlag from "react-country-flag";
import inputStyles from "../dropdownSelector/DropdownSelector.module.css";
import styles from "./InputBox.module.css";

// {props.required ? <span className={styles.mandatory}>*</span> : ""}

export function InputBox(props: any) {
  return (
    <div className={inputStyles.InputBoundingBox}>
      <label className={inputStyles.InputLabel} htmlFor={props.name}>
        {props.label}

        {<span className={styles.error}>{props.errMsg}</span>}
      </label>
      <div className="rowStart">
        {props.countryFlag ? (
          <ReactCountryFlag
            className="emojiFlag"
            countryCode={props.value.slice(0, 4) === "+421" ? "SK" : "CZ"}
            style={{
              fontSize: "1em",
              lineHeight: "1em",
              marginRight: "0.25rem",
            }}
            aria-label={""}
          />
        ) : (
          ""
        )}
        <input
          className={styles.TextInput}
          type="text"
          min={props.minChars}
          max={props.maxChars}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
        />
      </div>
    </div>
  );
}
