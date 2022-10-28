// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol"; 


/**
@dev For the royalty implementation we are using the ERC2981 standard

 */



// We are inheriting ERC721URIStorage instead of ERC721
// This will allow us to use the _setTokenURI() function

/**

TO DO :

NFT Marketplace contract would deal with the transfer of funds.
1. The NFT mint function can only be called by the owner of the 
   collection.
2. Read about the ERC 2981 standard of royalty implementation. 
   Setup a standard for the royalty function.
3. Implement events , modifiers and errors 
4. 

 */

contract NFT is ERC721URIStorage, ERC2981 , Ownable {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;

   address payable public  royaltyReceiver; // changed the royaltyReceiver address to payable  
   address public txFeeToken; // ??
   uint256 public txFeeAmount;
   
   mapping(address => bool) public excludedList;  
   
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    } 


  //  struct NFTAttributes
  //    {
  //       uint256 tokenId ;
  //       uint256 tokenName ;
  //       string ImageURI ;
  //       string tokenURI  ;
  //       uint256 price ;
  //    }


    constructor(
    address payable _royaltyReceiver, 
    address _txFeeToken,
    uint _txFeeAmount
  ) ERC721('RandomAritst', 'ABC') {
    royaltyReceiver = _royaltyReceiver;
    txFeeToken = _txFeeToken;
    txFeeAmount = _txFeeAmount;
    excludedList[_royaltyReceiver] = true;
  }

  event NFT_Minted(
    uint256 indexed tokenId, 
    string tokenURI
  );

   function setExcluded(address excluded, bool status) external {
    require(msg.sender == royaltyReceiver, 'royaltyReceiver only');
    excludedList[excluded] = status;
  }

   function mintNFT(string memory tokenURI)
       public
   {
       _tokenIds.increment();
       uint256 newItemId = _tokenIds.current();
       _safeMint(royaltyReceiver, newItemId);  
       /**
       @dev
       / All tokens will be minted to the owner / royaltyReceiver address.
      // A user is not going to interact with the NFT contract. 
      // Interactions will be made using the NFTmarketplace contract. 
        */
       _setTokenURI(newItemId, tokenURI);
       emit NFT_Minted(newItemId, tokenURI);
   }


/**
  calldata can only be used for function parameters 
  immutable

 /** 

  This functionality can be implemented  

  //  function buyNFT (NFTAttributes calldata _NFT) public payable returns (uint256)
  //  {
  //     require(msg.value >= _NFT.price , "Insufficient funds to buy NFT");
  //     // Refactor using error 

  //  }

 */
   
   function setDefaultRoyalty(uint96 feeNumerator) external onlyOwner
   {
    _setDefaultRoyalty(royaltyReceiver, feeNumerator);
   }

  function setTokenRoyalty(
        uint256 tokenId,
        uint96 feeNumerator
    ) external onlyOwner {
        _setTokenRoyalty(tokenId, royaltyReceiver, feeNumerator);
    }

     function deleteDefaultRoyalty() external onlyOwner {
        _deleteDefaultRoyalty();
    }





   // To implement royalties, we need to override the methods in ERC721URIStorage
   // The methods include transferFrom(from, to tokenID), safeTansferFrom(from, to tokenID), safeTansferFrom(from, to, tokenID, data)
   function transferFrom(
    address from, 
    address to, 
    uint256 tokenId
  ) public override {
     require(
       _isApprovedOrOwner(_msgSender(), tokenId), 
       'ERC721: transfer caller is not owner nor approved'
     );
     if(excludedList[from] == false) {
      _payTxFee(from);
     }
     _transfer(from, to, tokenId);
  }

   function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId
   ) public override {
     require(
      _isApprovedOrOwner(_msgSender(), tokenId), 
      'ERC721: transfer caller is not owner nor approved'
    );
     if(excludedList[from] == false) {
       _payTxFee(from);
     }
     safeTransferFrom(from, to, tokenId, '');
   }

/**

@dev

 */


  function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId,
    bytes memory _data
  ) public override {
    require(
      _isApprovedOrOwner(_msgSender(), tokenId), 
      'ERC721: transfer caller is not owner nor approved'
    );
    if(excludedList[from] == false) {
      _payTxFee(from);
    }
    _safeTransfer(from, to, tokenId, _data);
  }

   function _payTxFee(address from) internal {
    IERC20 token = IERC20(txFeeToken);
    token.transferFrom(from, royaltyReceiver, txFeeAmount);
  }
}


