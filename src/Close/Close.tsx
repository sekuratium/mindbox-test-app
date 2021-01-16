import "./style.css";
import { ReactComponent as Icon } from "./images/close.svg";

import React from "react";
import cx from "classnames";

interface CloseProps {
  onClick: () => void;
  className?: string;
}

const Close: React.FunctionComponent<CloseProps> = (props) => (
  <div className={cx("close", props.className)} onClick={props.onClick}>
    <Icon className="close--icon" />
  </div>
);

export {Close};
