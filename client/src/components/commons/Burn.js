import React, { useState } from "react";
import axios from "axios";

export default function Burn() {
  const [tid, setTid] = useState("");

  const handleBurn = (e) => {
    e.preventDefault();
    console.log(tid);
    if (tid) {
      axios
        .post("http://localhost:5000/burn", tid)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      console.log("no id");
    }
  };

  return (
    <div id="container">
      <h3 id="retailer-register-h">Burn your warranty</h3>
      <div className="formInputs">
        <label className="label">Enter your Token Id</label>
        <input
          onChange={(e) => setTid(e.target.value)}
          className="input"
          value={tid}
          type="text"
        />
        <button onClick={handleBurn} className="viewLink">
          Burn
        </button>
      </div>
    </div>
  );
}
