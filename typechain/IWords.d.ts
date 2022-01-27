/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IWordsInterface extends ethers.utils.Interface {
  functions: {
    "tokenIdToInfo(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "tokenIdToInfo",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "tokenIdToInfo",
    data: BytesLike
  ): Result;

  events: {};
}

export class IWords extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IWordsInterface;

  functions: {
    tokenIdToInfo(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, string] & {
        value: BigNumber;
        starIcon: string;
        background: string;
        icon: string;
        words: string;
        author: string;
        desc: string;
      }
    >;

    "tokenIdToInfo(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, string] & {
        value: BigNumber;
        starIcon: string;
        background: string;
        icon: string;
        words: string;
        author: string;
        desc: string;
      }
    >;
  };

  tokenIdToInfo(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, string, string, string] & {
      value: BigNumber;
      starIcon: string;
      background: string;
      icon: string;
      words: string;
      author: string;
      desc: string;
    }
  >;

  "tokenIdToInfo(uint256)"(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, string, string, string] & {
      value: BigNumber;
      starIcon: string;
      background: string;
      icon: string;
      words: string;
      author: string;
      desc: string;
    }
  >;

  callStatic: {
    tokenIdToInfo(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, string] & {
        value: BigNumber;
        starIcon: string;
        background: string;
        icon: string;
        words: string;
        author: string;
        desc: string;
      }
    >;

    "tokenIdToInfo(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, string] & {
        value: BigNumber;
        starIcon: string;
        background: string;
        icon: string;
        words: string;
        author: string;
        desc: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    tokenIdToInfo(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenIdToInfo(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tokenIdToInfo(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenIdToInfo(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
