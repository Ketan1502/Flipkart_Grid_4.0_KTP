require("dotenv").config()
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
const contractAddress = "0x4637bb461b183b6f09bafccf70c5d73f8fe9c2cf"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

// const tx="0x995eeb6593b257316aed9e7f19fa0378fd07258c844881f8a3f4a43dfe1105e5"

// const receipt = web3.eth.getTransactionReceipt(tx)
// .then((err,event) => { console.log(event) });


// console.log(receipt);
nftContract.getPastEvents('AllEvents',
    {
        fromBlock:11119560,
        toBlock:11119560
    },
    (err,events) => { console.log(events) }
)