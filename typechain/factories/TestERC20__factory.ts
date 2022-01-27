/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TestERC20 } from "../TestERC20";

export class TestERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC20> {
    return super.deploy(overrides || {}) as Promise<TestERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f54657374455243323000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f4552433230000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620000b8565b508060049080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000168565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b600060028204905060018216806200018157607f821691505b602082108114156200019857620001976200019e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6115c980620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f19146101a357806370a08231146101bf57806395d89b41146101ef578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610fec565b60405180910390f35b6100f160048036038101906100ec9190610e17565b61032f565b6040516100fe9190610fd1565b60405180910390f35b61010f61034d565b60405161011c919061110e565b60405180910390f35b61013f600480360381019061013a9190610dc8565b610357565b60405161014c9190610fd1565b60405180910390f35b61015d610458565b60405161016a9190611129565b60405180910390f35b61018d60048036038101906101889190610e17565b610461565b60405161019a9190610fd1565b60405180910390f35b6101bd60048036038101906101b89190610e17565b61050d565b005b6101d960048036038101906101d49190610d63565b61051b565b6040516101e6919061110e565b60405180910390f35b6101f7610563565b6040516102049190610fec565b60405180910390f35b61022760048036038101906102229190610e17565b6105f5565b6040516102349190610fd1565b60405180910390f35b61025760048036038101906102529190610e17565b6106e9565b6040516102649190610fd1565b60405180910390f35b61028760048036038101906102829190610d8c565b610707565b604051610294919061110e565b60405180910390f35b6060600380546102ac90611272565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890611272565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b600061034361033c61078e565b8484610796565b6001905092915050565b6000600254905090565b6000610364848484610961565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006103af61078e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561042f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104269061106e565b60405180910390fd5b61044c8561043b61078e565b858461044791906111b6565b610796565b60019150509392505050565b60006012905090565b600061050361046e61078e565b84846001600061047c61078e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104fe9190611160565b610796565b6001905092915050565b6105178282610be0565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461057290611272565b80601f016020809104026020016040519081016040528092919081815260200182805461059e90611272565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b5050505050905090565b6000806001600061060461078e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b8906110ce565b60405180910390fd5b6106de6106cc61078e565b8585846106d991906111b6565b610796565b600191505092915050565b60006106fd6106f661078e565b8484610961565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610806576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fd906110ae565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086d9061102e565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610954919061110e565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c89061108e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a389061100e565b60405180910390fd5b610a4c838383610d34565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ad2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac99061104e565b60405180910390fd5b8181610ade91906111b6565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b6e9190611160565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bd2919061110e565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c47906110ee565b60405180910390fd5b610c5c60008383610d34565b8060026000828254610c6e9190611160565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cc39190611160565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d28919061110e565b60405180910390a35050565b505050565b600081359050610d4881611565565b92915050565b600081359050610d5d8161157c565b92915050565b600060208284031215610d7557600080fd5b6000610d8384828501610d39565b91505092915050565b60008060408385031215610d9f57600080fd5b6000610dad85828601610d39565b9250506020610dbe85828601610d39565b9150509250929050565b600080600060608486031215610ddd57600080fd5b6000610deb86828701610d39565b9350506020610dfc86828701610d39565b9250506040610e0d86828701610d4e565b9150509250925092565b60008060408385031215610e2a57600080fd5b6000610e3885828601610d39565b9250506020610e4985828601610d4e565b9150509250929050565b610e5c816111fc565b82525050565b6000610e6d82611144565b610e77818561114f565b9350610e8781856020860161123f565b610e9081611302565b840191505092915050565b6000610ea860238361114f565b9150610eb382611313565b604082019050919050565b6000610ecb60228361114f565b9150610ed682611362565b604082019050919050565b6000610eee60268361114f565b9150610ef9826113b1565b604082019050919050565b6000610f1160288361114f565b9150610f1c82611400565b604082019050919050565b6000610f3460258361114f565b9150610f3f8261144f565b604082019050919050565b6000610f5760248361114f565b9150610f628261149e565b604082019050919050565b6000610f7a60258361114f565b9150610f85826114ed565b604082019050919050565b6000610f9d601f8361114f565b9150610fa88261153c565b602082019050919050565b610fbc81611228565b82525050565b610fcb81611232565b82525050565b6000602082019050610fe66000830184610e53565b92915050565b600060208201905081810360008301526110068184610e62565b905092915050565b6000602082019050818103600083015261102781610e9b565b9050919050565b6000602082019050818103600083015261104781610ebe565b9050919050565b6000602082019050818103600083015261106781610ee1565b9050919050565b6000602082019050818103600083015261108781610f04565b9050919050565b600060208201905081810360008301526110a781610f27565b9050919050565b600060208201905081810360008301526110c781610f4a565b9050919050565b600060208201905081810360008301526110e781610f6d565b9050919050565b6000602082019050818103600083015261110781610f90565b9050919050565b60006020820190506111236000830184610fb3565b92915050565b600060208201905061113e6000830184610fc2565b92915050565b600081519050919050565b600082825260208201905092915050565b600061116b82611228565b915061117683611228565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156111ab576111aa6112a4565b5b828201905092915050565b60006111c182611228565b91506111cc83611228565b9250828210156111df576111de6112a4565b5b828203905092915050565b60006111f582611208565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561125d578082015181840152602081019050611242565b8381111561126c576000848401525b50505050565b6000600282049050600182168061128a57607f821691505b6020821081141561129e5761129d6112d3565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61156e816111ea565b811461157957600080fd5b50565b61158581611228565b811461159057600080fd5b5056fea2646970667358221220e60de3198917ed6b784628694bf4207160bd080281770a78135ef97618cba8f664736f6c63430008030033";
