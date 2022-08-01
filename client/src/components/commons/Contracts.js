import React, { useState } from "react";
import "../styles/Contracts.css";
import Card from "./Card";

// QmNXkJS6W8hPf234hGMFNRwyS7AsoE4tC4PTrstatypZDp

export default function Contracts() {
  const baseUrl = "https://gateway.pinata.cloud/ipfs/";
  const [id, setId] = useState("");
  const [hash, setHash] = useState("");
  const [data, setData] = useState("");

  async function tokenHandle(e) {
    await fetch(e)
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  return (
    <div id="container">
      <h3 id="retailer-register-h">View your warranty Card</h3>
      <div className="formInputs">
        <label className="label">Enter your transaction Hash</label>
        <input
          onChange={(e) => setId(e.target.value)}
          className="input"
          value={id}
          type="text"
        />
        <a href={`https://rinkeby.etherscan.io/tx/${id}`} className="viewLink">
          Go
        </a>
      </div>
      <p id="contract-p">
        Visit the above the site with your transaction hash -{">"} Go to the end
        of the page -{">"} Expand the page by selecting Click to See more -{">"}{" "}
        Visit the Input Data -{">"} Decode Input Data -{">"} Copy the tokenURI
      </p>
      <div className="formInputs">
        <label className="label">Enter your token URI</label>
        <input
          onChange={(e) => setHash(e.target.value)}
          className="input"
          value={hash}
          type="text"
        />
        <button onClick={() => tokenHandle(baseUrl + hash)} className="viewLink">
          View
        </button>
      </div>
      <div
        id="card-cont"
        style={data ? { display: "block" } : { display: "none" }}
      >
        <Card warrantyCreds={data} />
      </div>
    </div>
  );
}
