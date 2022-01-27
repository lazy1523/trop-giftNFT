/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { SimpleURI } from "../SimpleURI";

export class SimpleURI__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleURI> {
    return super.deploy(overrides || {}) as Promise<SimpleURI>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleURI {
    return super.attach(address) as SimpleURI;
  }
  connect(signer: Signer): SimpleURI__factory {
    return super.connect(signer) as SimpleURI__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleURI {
    return new Contract(address, _abi, signerOrProvider) as SimpleURI;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "setTestStr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testStr",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610eaf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633ac5599314610046578063d1a826c714610064578063e3ce058514610080575b600080fd5b61004e6100b0565b60405161005b9190610a46565b60405180910390f35b61007e600480360381019061007991906108e2565b61013e565b005b61009a60048036038101906100959190610923565b610158565b6040516100a79190610a46565b60405180910390f35b600080546100bd90610c78565b80601f01602080910402602001604051908101604052809291908181526020018280546100e990610c78565b80156101365780601f1061010b57610100808354040283529160200191610136565b820191906000526020600020905b81548152906001019060200180831161011957829003601f168201915b505050505081565b80600090805190602001906101549291906107ad565b5050565b60606101638461019f565b61016c8461034c565b6101758461019f565b604051602001610187939291906109ff565b60405160208183030381529060405290509392505050565b606060008214156101e7576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610347565b600082905060005b6000821461021957808061020290610cdb565b915050600a826102129190610b3b565b91506101ef565b60008167ffffffffffffffff81111561025b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561028d5781602001600182028036833780820191505090505b5090505b60008514610340576001826102a69190610bc6565b9150600a856102b59190610d24565b60306102c19190610ae5565b60f81b8183815181106102fd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856103399190610b3b565b9450610291565b8093505050505b919050565b606060008273ffffffffffffffffffffffffffffffffffffffff1660001b905060006040518060400160405280601081526020017f303132333435363738396162636465660000000000000000000000000000000081525090506000602a67ffffffffffffffff8111156103e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561041b5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610479577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610503577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060005b60148110156107a15782600485600c8461054f9190610ae5565b60208110610586577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c60f81c60ff16815181106105eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b826002836106049190610b6c565b60026106109190610ae5565b81518110610647577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535082600f60f81b85600c8461068a9190610ae5565b602081106106c1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b1660f81c60ff1681518110610703577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b8260028361071c9190610b6c565b60036107289190610ae5565b8151811061075f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808061079990610cdb565b915050610535565b50809350505050919050565b8280546107b990610c78565b90600052602060002090601f0160209004810192826107db5760008555610822565b82601f106107f457805160ff1916838001178555610822565b82800160010185558215610822579182015b82811115610821578251825591602001919060010190610806565b5b50905061082f9190610833565b5090565b5b8082111561084c576000816000905550600101610834565b5090565b600061086361085e84610a8d565b610a68565b90508281526020810184848401111561087b57600080fd5b610886848285610c36565b509392505050565b60008135905061089d81610e4b565b92915050565b600082601f8301126108b457600080fd5b81356108c4848260208601610850565b91505092915050565b6000813590506108dc81610e62565b92915050565b6000602082840312156108f457600080fd5b600082013567ffffffffffffffff81111561090e57600080fd5b61091a848285016108a3565b91505092915050565b60008060006060848603121561093857600080fd5b6000610946868287016108cd565b93505060206109578682870161088e565b9250506040610968868287016108cd565b9150509250925092565b600061097d82610abe565b6109878185610ac9565b9350610997818560208601610c45565b6109a081610e11565b840191505092915050565b60006109b682610abe565b6109c08185610ada565b93506109d0818560208601610c45565b80840191505092915050565b60006109e9600183610ada565b91506109f482610e22565b600182019050919050565b6000610a0b82866109ab565b9150610a16826109dc565b9150610a2282856109ab565b9150610a2d826109dc565b9150610a3982846109ab565b9150819050949350505050565b60006020820190508181036000830152610a608184610972565b905092915050565b6000610a72610a83565b9050610a7e8282610caa565b919050565b6000604051905090565b600067ffffffffffffffff821115610aa857610aa7610de2565b5b610ab182610e11565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000610af082610c2c565b9150610afb83610c2c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b3057610b2f610d55565b5b828201905092915050565b6000610b4682610c2c565b9150610b5183610c2c565b925082610b6157610b60610d84565b5b828204905092915050565b6000610b7782610c2c565b9150610b8283610c2c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610bbb57610bba610d55565b5b828202905092915050565b6000610bd182610c2c565b9150610bdc83610c2c565b925082821015610bef57610bee610d55565b5b828203905092915050565b6000610c0582610c0c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610c63578082015181840152602081019050610c48565b83811115610c72576000848401525b50505050565b60006002820490506001821680610c9057607f821691505b60208210811415610ca457610ca3610db3565b5b50919050565b610cb382610e11565b810181811067ffffffffffffffff82111715610cd257610cd1610de2565b5b80604052505050565b6000610ce682610c2c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d1957610d18610d55565b5b600182019050919050565b6000610d2f82610c2c565b9150610d3a83610c2c565b925082610d4a57610d49610d84565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f2d00000000000000000000000000000000000000000000000000000000000000600082015250565b610e5481610bfa565b8114610e5f57600080fd5b50565b610e6b81610c2c565b8114610e7657600080fd5b5056fea2646970667358221220f031ffc47c84bdfd2532aefbcfd563a9ebf510358aadad3a102478ff8266558864736f6c63430008030033";
