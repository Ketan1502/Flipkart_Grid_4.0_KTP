const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const pinataSDK = require("@pinata/sdk");
const pinata = pinataSDK(
  "99ae4124e618f5d5369b",
  "faf3290da4ef1d98e03ebba369160a2a49fdf409780c3b34ce83bf840e840b41"
);
const mintNFT = require("./mint-nft")
const burnNFT = require("./burnNFT")

app.use(cors());
app.use(express.json());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  const body = req.body;
  const options = {
    pinataMetadata: {
      name: body.serialNo,
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };
  pinata
    .pinJSONToIPFS(body, options)
    .then((result) => {
      console.log("Hash of your meta data: ", result.IpfsHash)
      const hash = result.IpfsHash.toString();
      mintNFT(hash, 500)
     
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/burn", (req, res) => {
  res.send("hi");
});

app.post("/burn", (req, res) => {
  const id = req.body;
  console.log(Object.keys(id)[0]);
  burnNFT(Object.keys(id)[0]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

