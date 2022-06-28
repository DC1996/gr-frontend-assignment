import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Step1 } from "./common/step1/Step1";
import { Step2 } from "./common/step2/Step2";
import { Step3 } from "./common/step3/Step3";
import { FinalStep } from "./common/final/finalStep";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<App />}>
            <Route index element={<Navigate to="/step1" />}></Route>
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/final" element={<FinalStep />} />
          </Route>
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
