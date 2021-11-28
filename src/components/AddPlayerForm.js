// src/components/AddPlayerForm.js
import { useEffect, useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            set_name(event.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            props.addplayerconectwithaddplayer(name);
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
