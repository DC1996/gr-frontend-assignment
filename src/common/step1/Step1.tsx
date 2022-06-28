import { PrimaryButton } from "../../features/buttons/PrimaryButton";
import DropdownSelector from "../../features/dropdownSelector/DropdownSelector";
import {
  FeeSelector,
  SelectType,
} from "../../features/feeSelector/FeeSelector";
import { Switch } from "../../features/switch/Switch";
import {
  Amounts,
  HelpType,
  nextStep,
} from "../../features/formData/formDataSlice";

import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Step1() {
  const option = useAppSelector((state) => state.form.option);
  const shelter = useAppSelector((state) => state.form.shelter);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flexColumn">
      <h1 id="formHeading" className="headingText">
        Vyberte si možnosť, ako chcete pomôcť
      </h1>
      <Switch />
      <div className="rowSpaceBetween">
        <h3 className="subheading">O projekte</h3>
        <h3
          className={
            "subheadingOptional " + (option === HelpType.specific ? "hide" : "")
          }
        >
          Nepovinné
        </h3>
      </div>
      <DropdownSelector
        label="Útulok"
        required={option === HelpType.specific ? true : false}
        name="útulok"
        value={shelter}
      />
      <h3 className="subheading">Suma, ktorou chcem prispieť</h3>
      <div className="rowStart">
        {Amounts.map((amount) => {
          return (
            <FeeSelector key={amount} amount={amount} type={SelectType.basic} />
          );
        })}
        <FeeSelector type={SelectType.input} />
      </div>
      <PrimaryButton
        label="Pokračovať"
        valid={
          (option === HelpType.specific && shelter !== undefined) ||
          option === HelpType.generic
            ? true
            : false
        }
        onClick={() => {
          dispatch(nextStep());
          navigate("/step2");
        }}
      />
    </div>
  );
}
