import "./style.css";

import React from "react";

interface InvitesProps {
  invites: string[];
  onAddInvite: (name: string) => void;
}

const Invites: React.FunctionComponent<InvitesProps> = ({ invites, onAddInvite }) => {
  const [name, setName] = React.useState("");
  const onChangeName = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [setName]
  );
  const submit = React.useCallback(() => {
      onAddInvite(name);
  }, [name, onAddInvite]);

  React.useEffect(() => {
    setName("");
  }, [invites]);

  return (
    <div className="invites">
      <div className="invites--form">
        <input
          className="invites--form-input"
          onKeyDown={(event) => {
              if (event.key === 'Enter') {
                  submit();
              }
          }}
          onChange={onChangeName}
          type="text"
          value={name}
        />
        <button className="invites--form-submit" onClick={submit}>
          Invite
        </button>
      </div>
      <div className="invites--delimiter" />
      <ul className="invites--items">
        {invites.map(name => (
          <li className="invites--item">{name}</li>
        ))}
      </ul>
    </div>
  );
};

export {Invites};
