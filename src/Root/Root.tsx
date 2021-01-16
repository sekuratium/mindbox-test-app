import React, { Component } from "react";

import { Modal } from "Modal";
import { Invites } from "Invites";

interface State {
  invites: string[];
  isOpened: boolean;
}

class Root extends Component<{}, State> {
  readonly state: State = {
    invites: [],
    isOpened: false
  };

  private _onModalOpenClick = () => {
    this.setState({isOpened: true});
  }

  private _onModalCloseClick = () => {
    this.setState({isOpened: false});
  }

  private _onAddInvite = (invite: string) => {
    this.setState({invites: [...this.state.invites, invite]});
  }

  render() {
    return (
      <>
        <button onClick={this._onModalOpenClick}>Open invites list</button>
        <Modal isOpened={this.state.isOpened} onCloseClick={this._onModalCloseClick}>
          <Invites
            invites={this.state.invites}
            onAddInvite={this._onAddInvite}
          />
        </Modal>
      </>
    );
  }
}

export {Root};
