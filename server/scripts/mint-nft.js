require("dotenv").config();
var nodemailer = require("nodemailer");
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0x4637bb461b183b6f09bafccf70c5d73f8fe9c2cf";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user : "testnet46464444@outlook.com",
//     pass : "Testnet@46464444",
// }
// });

async function mintNFT(tokenURI, warranty) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce
  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods
      .mintNFT(PUBLIC_KEY, tokenURI, warranty)
      .encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);

  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        async function (err, hash) {
          if (!err) {
            //return this hash, to dispay it to retailer and later to be sent
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
            // var mailOptions = {
            //   from: "testnet46464444@outlook.com",
            //   to: "pragyamaroti17@gmail.com",
            //   subject: "Transaction hash",
            //   text: `Transaction hash: ${hash}`,
            // };

            // transporter.sendMail(mailOptions, function (error, info) {
            //   if (error) {
            //     console.log(error);
            //   } else {
            //     console.log("Email sent: " + info.response);
            //   }
            // });
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log("Promise failed:", err);
    });
}

module.exports = mintNFT;
