import React, { useState } from "react";
import "../styles/Warranty.css";
import axios from "axios";

export default function Warranty() {
  const [productId, setProductId] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [productName, setProductName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [purchaseDate, setPurchaseDate] = useState();

  const [warrantyCreds, setWarrantyCreds] = useState({});

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleBuyerName = (e) => {
    setBuyerName(e.target.value);
    setSubmitted(false);
    setWarrantyCreds({ ...warrantyCreds, buyerName: e.target.value });
  };

  const handleSerialNo = (e) => {
    setSerialNo(e.target.value);
    setSubmitted(false);
    setWarrantyCreds({ ...warrantyCreds, serialNo: e.target.value });
  };

  const handlePurchaseDate = (e) => {
    setPurchaseDate(e.target.value);
    setSubmitted(false);
    setWarrantyCreds({ ...warrantyCreds, purchaseDate: e.target.value });
  };

  const handleProductName = (e) => {
    setProductName(e.target.value);
    setSubmitted(false);
    setWarrantyCreds({ ...warrantyCreds, productName: e.target.value });
  };

  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
    setSubmitted(false);
    setWarrantyCreds({ ...warrantyCreds, companyName: e.target.value });
  };

  const handleProductId = (e) => {
    setProductId(e.target.value);
    setSubmitted(false);
    setWarrantyCreds({ ...warrantyCreds, productId: e.target.value });
  };

  const handleProductImage = (e) => {
    setProductImage(e.target.value);
    setSubmitted(false);
    setWarrantyCreds({ ...warrantyCreds, productImage: e.target.value });
  };

  function checkImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productId === "" ||
      productName === "" ||
      productImage === "" ||
      companyName === "" ||
      buyerName === "" ||
      purchaseDate === "" ||
      serialNo === "" ||
      checkImage(productImage) === false
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      axios
        .post("http://localhost:5000/", warrantyCreds)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const successMessage = () => {
    return (
      <div
        id="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <p>Warranty Created Successfully !!&nbsp;&nbsp;</p>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        id="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>Recheck your credentials !!</p>
      </div>
    );
  };

  return (
    <div id="warranty-container">
      <div className="form">
        <h3 id="retailer-register-h">Create Warranty for your product</h3>

        <div id="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form method="post">
          <div className="form-element">
            <label className="label">Product Name</label>
            <input
              onChange={handleProductName}
              className="input"
              value={productName}
              type="text"
            />
          </div>

          <div className="form-element">
            <label className="label">Product Id</label>
            <input
              onChange={handleProductId}
              className="input"
              value={productId}
              type="text"
            />
          </div>

          <div className="form-element">
            <label className="label">Company Name</label>
            <input
              onChange={handleCompanyName}
              className="input"
              value={companyName}
              type="text"
            />
          </div>

          <div className="form-element">
            <label className="label">Product Image</label>
            <input
              onChange={handleProductImage}
              className="input"
              value={productImage}
              type="text"
            />
          </div>

          <div className="form-element">
            <label className="label">Buyer Name</label>
            <input
              onChange={handleBuyerName}
              className="input"
              value={buyerName}
              type="text"
            />
          </div>

          <div className="form-element">
            <label className="label">Serial Number</label>
            <input
              onChange={handleSerialNo}
              className="input"
              value={serialNo}
              type="number"
            />
          </div>

          <div className="form-element">
            <label className="label">Purchase Date</label>
            <input
              onChange={handlePurchaseDate}
              className="input"
              value={purchaseDate}
              type="date"
            />
          </div>

          <button onClick={handleSubmit} className="btn" type="submit">
            Create Warranty Card
          </button>
        </form>
      </div>
    </div>
  );
}
