// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping (uint => uint) public mp;

    constructor() ERC721("MyNFT", "NFT") {}

    event token(uint);

    function burner(uint tokenId) public onlyOwner
    {
        require(mp[tokenId] <= block.timestamp,"NOt Yet Bro");
        delete mp[tokenId];
        _burn(tokenId);
    }

    function mintNFT(address recipient, string memory tokenURI, uint warranty)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        mp[newItemId]=block.timestamp+warranty;

        emit token(newItemId);

        return newItemId;
    }
}