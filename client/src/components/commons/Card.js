import React from "react";
import "../styles/Card.css";

export default function Card({ warrantyCreds }) {
  return (
    <div className="card">
      <p className="card__name">Serial No: {warrantyCreds.serialNo}</p>
      <p className="card__name">Product Id: {warrantyCreds.productId}</p>
      <p className="card__name">Name of Buyer: {warrantyCreds.buyerName}</p>
      <p className="card__name">Product Name: {warrantyCreds.productName}</p>
      <p className="card__name">Company Name: {warrantyCreds.companyName}</p>
      <p className="card__name">
        Date of Purchase: {warrantyCreds.purchaseDate}
      </p>
    </div>
  );
}
