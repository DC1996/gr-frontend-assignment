import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PrimaryButton } from "../../features/buttons/PrimaryButton";
import { SecondaryButton } from "../../features/buttons/SecondaryButton";
import { Checkbox } from "../../features/checkbox/Checkbox";
import {
  setStatus,
  setGdpr,
  prevStep,
} from "../../features/formData/formDataSlice";
import { InfoPreview } from "../../features/infoPreview/InfoPreview";

export function Step3() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const gdprAgreed = useAppSelector((state) => state.form.gdpr);

  const form = useAppSelector((state) => state.form);

  const bodyData = {
    firstName: form.name,
    lastName: form.surname,
    email: form.email,
    phone: form.phone,
    value: form.amount,
    shelterID: form.shelter == undefined ? 1 : Number(form.shelter),
  };

  const requestContent = {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  return (
    <div className="flexColumn">
      <h1 id="formHeading" className="headingText">
        Skontrolujte si zadané údaje
      </h1>
      <InfoPreview label="Akou formou chcem pomôcť" information={form.option} />
      <InfoPreview
        label="Najviac mi záleží na útulku"
        information={
          form.shelterList.find(({ id }) => id == form.shelter)?.name
        }
      />
      <InfoPreview
        label="Suma ktorou chcem pomôcť"
        information={form.amount + " €"}
      />
      <InfoPreview
        label="Meno a priezvisko"
        information={form.name + " " + form.surname}
      />
      <InfoPreview label="E-mailová adresa" information={form.email} />
      <InfoPreview label="Telefónne číslo" information={form.phone} />
      <Checkbox
        label="Súhlasím so spracovaním mojich osobných údajov"
        name="gdpr"
        value={gdprAgreed}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setGdpr(Boolean(e.target.checked)))
        }
      />
      <div className="rowSpaceBetween">
        <SecondaryButton
          label="Späť"
          onClick={() => {
            dispatch(prevStep());
            navigate("/step2");
          }}
        />
        <PrimaryButton
          valid={gdprAgreed}
          label="Odoslať&nbsp;formulár"
          onClick={() => {
            fetch(
              "https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute",
              requestContent
            ).then((response) => {
              console.log(JSON.stringify(bodyData));
              console.log(response);

              if (!response.ok) {
                dispatch(setStatus(false));
                navigate("/final");
              } else {
                dispatch(setStatus(true));
                navigate("/final");
              }
            });
          }}
        />
      </div>
    </div>
  );
}
