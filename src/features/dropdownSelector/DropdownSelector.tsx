import React, { RefObject, createRef } from "react";
import { setShelter, saveShelterList } from "../formData/formDataSlice";
import styles from "./DropdownSelector.module.css";

import { connect } from "react-redux";
import { RootState } from "../../app/store";

interface ComponentProps {
  label: string;
  required: boolean;
  name: string;
  value?: number;
}

interface DispatchProps {
  setShelter: Function;
  saveShelterList: Function;
  shelters: { id: number; name: string }[];
}

interface State {}

type Props = ComponentProps & DispatchProps;

export class DropdownSelector extends React.Component<Props, State> {
  // var options: string[] = ['<option>', '2', '3'];
  private dropdownBtn: RefObject<HTMLButtonElement>;
  constructor(props: any) {
    super(props);
    this.dropdownBtn = createRef<HTMLButtonElement>();
  }

  // Load shelters from source (GET)
  componentDidMount() {
    fetch("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters")
      .then(async (response) => {
        const data: any = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        let shelters: { id: number; name: string }[] = data.shelters;

        this.props.saveShelterList(shelters); // <--- List of shelters
      })
      .catch((error) => {
        console.error("There was an error!", error);
        return error.toString();
      });
  }

  render(): React.ReactNode {
    const { setShelter } = this.props;

    return (
      <div className={styles.InputBoundingBox}>
        <label className={styles.InputLabel} htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <button
          ref={this.dropdownBtn}
          className={styles.dropdownButton}
        ></button>
        <select
          className={styles.dropdown}
          onMouseDown={() =>
            this.dropdownBtn.current?.classList.add(styles.dropdownButtonOpen)
          }
          onMouseOut={() =>
            this.dropdownBtn.current?.classList.remove(
              styles.dropdownButtonOpen
            )
          }
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setShelter(e.target.value);
            this.dropdownBtn.current?.classList.remove(
              styles.dropdownButtonOpen
            );
          }}
          onBlur={() =>
            this.dropdownBtn.current?.classList.remove(
              styles.dropdownButtonOpen
            )
          }
          id={this.props.name}
          name={this.props.name}
          defaultValue={"Vyberte " + this.props.name + " zo zoznamu"}
          value={this.props.value}
        >
          <option hidden>{"Vyberte " + this.props.name + " zo zoznamu"}</option>
          {this.props.shelters.map((shelter: { id: number; name: string }) => {
            return (
              <option
                key={shelter.id}
                onChange={() => {
                  this.dropdownBtn.current?.classList.remove(
                    styles.dropdownButtonOpen
                  );
                }}
                className={styles.dropdownOption}
                value={shelter.id}
              >
                {shelter.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  shelters: state.form.shelterList,
});

export default connect(mapStateToProps, { setShelter, saveShelterList })(
  DropdownSelector
);
