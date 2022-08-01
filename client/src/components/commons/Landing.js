import React from "react";
import "../styles/Landing.css";
import Stubg from "../images/stubg.jpg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div id="bg">
      <div className="container">
        <div className="navbar">
          <p id="logo">BcBews</p>
          <ul>
            <i className="bi bi-info-circle-fill"></i>
            <li title="We are team KTP ( Ketan - Django Developer, Tejaswini - Front End Developer, Pragya - ML Engineer ), final year students from NIT Silchar.">
              About Us
            </li>
            <i className="bi bi-cash-coin"></i>
            <li>
              <Link to="/register" className="navbarLink">Retailer Login</Link>
            </li>
            <i className="bi bi-eye-fill"></i>
            <li>
              <Link to="/contracts" className="navbarLink">View Warranty</Link>
            </li>
            <i className="bi bi-pen"></i>
            <li>
              <Link to="/warranty" className="navbarLink">Create Warranty</Link>
            </li>
            <i className="bi bi-trash"></i>
            <li>
              <Link to="/burn" className="navbarLink">Burn Warranty</Link>
            </li>
          </ul>
        </div>
      </div>

      <i className="bi bi-cash-stack" />
      <i className="bi bi-coin" />
      <i className="bi bi-currency-exchange" />
      <i className="bi bi-bank" />
      <i className="bi bi-currency-bitcoin" />

      <div className="typewriter">
        <h1>
          Welcome to <span>BcBews.</span>
        </h1>
        <h1>
          E-Commerce System
          <br />
        </h1>
        <p>
          A Blockchain-based eCommerce warranty system using NFTs <br />
          The objective is to replace the physical warranty and have <br />
          block chain based warranty using NFT which ensures <br />
          authenticity and security.
          <br />
          <br />
        </p>
      </div>
      <div id="pic">
        <img src={Stubg} alt="" />
      </div>
    </div>
  );
}
