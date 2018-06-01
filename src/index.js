import "./styles/style.css";
// import Backround from "./forest.jpg";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
// import Ajax from "axios";
// import { AutoUpdatedForm } from "./containers/AutoUpdatedForm.js";
import UserInput from "./components/UserInput";
import OfferedVariants from "./components/OfferedVariants";

const store = configureStore();

render(
  <Provider store={store}>
  <div>
    <UserInput />
    <OfferedVariants />
  </div>
  </Provider>,
  document.getElementById("root")
);

