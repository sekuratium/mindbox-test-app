import "./style.css";

import React from "react";
import { CSSTransition } from "react-transition-group";
import { Close } from "Close";

interface ModalProps {
  isOpened: boolean;
  onCloseClick: () => void;
}

const Modal: React.FunctionComponent<ModalProps> = (props) => (
  <CSSTransition
    classNames={{
      enter: "modal_enter",
      enterActive: "modal_enter-active",
      enterDone: "modal_enter-done",
      exit: "modal_exit",
      exitActive: "modal_exit-active",
      exitDone: "modal_exit-done"
    }}
    in={props.isOpened}
    timeout={300}
  >
    <div className="modal">
      <div className="modal--content">
        <Close onClick={props.onCloseClick} />

        {props.children}
      </div>
    </div>
  </CSSTransition>
);

export {Modal}
