import "./index.css";

import React from "react";
import { render } from "react-dom";
import { init as suppress } from "log-suppress";
import { Root } from "Root";

suppress(console);

const rootElement = document.getElementById("root");

render(<Root />, rootElement);
