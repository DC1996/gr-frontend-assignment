// import { useAppSelector } from "../../app/hooks";

import { useAppSelector } from "../../app/hooks";

export function FinalStep() {
  const success = useAppSelector((state) => state.form.success);

  return (
    <div className="flexColumn">
      <h1 id="formHeading" className="headingText">
        {success
          ? "Príspevok bol úspešne zaznamenaný"
          : "Príspevok sa nepodarilo doručiť"}
      </h1>
      <h3 className="subheading">
        {success
          ? "Nadácia Good Boy Vám srdečne ďakuje."
          : "Ľutujeme, nepodarilo sa nám zaznamenať Váš príspevok. Skúste to, prosím, neskôr."}
      </h3>
    </div>
  );
}
