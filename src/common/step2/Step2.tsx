import { PrimaryButton } from "../../features/buttons/PrimaryButton";
import { SecondaryButton } from "../../features/buttons/SecondaryButton";
import { InputBox } from "../../features/inputBox/InputBox";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  setEmail,
  setName,
  setPhone,
  setSurname,
  nextStep,
  prevStep,
} from "../../features/formData/formDataSlice";
import { useNavigate } from "react-router-dom";

//function validateInput(input: string): boolean {}

export function Step2() {
  // Prepare data
  const name = useAppSelector((state) => state.form.name);
  const email = useAppSelector((state) => state.form.email);
  const phone = useAppSelector((state) => state.form.phone);
  const surname = useAppSelector((state) => state.form.surname);
  const nameValidated = useAppSelector((state) => state.form.nameErrMsg);
  const surnameValidated = useAppSelector((state) => state.form.surnameErrMsg);
  const emailValidated = useAppSelector((state) => state.form.emailErrMsg);
  const phoneValidated = useAppSelector((state) => state.form.phoneErrMsg);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let allCorrect;

  return (
    <div className="flexColumn">
      <h1 id="formHeading" className="headingText">
        Potrebujeme od Vás zopár informáci
      </h1>
      <h3 className="subheading">O vás</h3>
      <InputBox
        label="Meno"
        value={name}
        placeholder="Zadajte Vaše meno"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setName(event.target.value));
        }}
        required={false}
        errMsg={nameValidated}
      />
      <InputBox
        label="Priezvisko"
        value={surname}
        placeholder="Zadajte Vaše priezvisko"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setSurname(event.target.value));
        }}
        required={true}
        errMsg={surnameValidated}
      />
      <InputBox
        label="E-mailová adresa"
        value={email}
        placeholder="Zadajte Váš e-mail"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setEmail(event.target.value));
        }}
        required={true}
        errMsg={emailValidated}
      />
      <InputBox
        label="Telefónne čislo"
        value={phone}
        countryFlag={true}
        placeholder="+421/+420"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setPhone(event.target.value));
        }}
        required={true}
        errMsg={phoneValidated}
      />
      <div className="rowSpaceBetween">
        <SecondaryButton
          label="Späť"
          valid={allCorrect}
          onClick={() => {
            dispatch(prevStep());
            navigate("/step1");
          }}
        />
        <PrimaryButton
          label="Pokračovať"
          valid={
            nameValidated === "" &&
            surnameValidated === "" &&
            emailValidated === "" &&
            phoneValidated === "" &&
            name.trim() !== "" &&
            surname !== "" &&
            email !== "" &&
            phone !== ""
          }
          onClick={() => {
            dispatch(nextStep());
            navigate("/step3");
          }}
        />
      </div>
    </div>
  );
}
