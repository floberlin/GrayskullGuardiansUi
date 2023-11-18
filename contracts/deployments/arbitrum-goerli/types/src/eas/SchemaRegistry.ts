/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export type SchemaRecordStruct = {
  uid: BytesLike;
  resolver: AddressLike;
  revocable: boolean;
  schema: string;
};

export type SchemaRecordStructOutput = [
  uid: string,
  resolver: string,
  revocable: boolean,
  schema: string
] & { uid: string; resolver: string; revocable: boolean; schema: string };

export interface SchemaRegistryInterface extends Interface {
  getFunction(
    nameOrSignature: "getSchema" | "register" | "version"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;

  encodeFunctionData(
    functionFragment: "getSchema",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, AddressLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getSchema", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export namespace RegisteredEvent {
  export type InputTuple = [
    uid: BytesLike,
    registerer: AddressLike,
    schema: SchemaRecordStruct
  ];
  export type OutputTuple = [
    uid: string,
    registerer: string,
    schema: SchemaRecordStructOutput
  ];
  export interface OutputObject {
    uid: string;
    registerer: string;
    schema: SchemaRecordStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SchemaRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): SchemaRegistry;
  waitForDeployment(): Promise<this>;

  interface: SchemaRegistryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getSchema: TypedContractMethod<
    [uid: BytesLike],
    [SchemaRecordStructOutput],
    "view"
  >;

  register: TypedContractMethod<
    [schema: string, resolver: AddressLike, revocable: boolean],
    [string],
    "nonpayable"
  >;

  version: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getSchema"
  ): TypedContractMethod<[uid: BytesLike], [SchemaRecordStructOutput], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<
    [schema: string, resolver: AddressLike, revocable: boolean],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Registered"
  ): TypedContractEvent<
    RegisteredEvent.InputTuple,
    RegisteredEvent.OutputTuple,
    RegisteredEvent.OutputObject
  >;

  filters: {
    "Registered(bytes32,address,tuple)": TypedContractEvent<
      RegisteredEvent.InputTuple,
      RegisteredEvent.OutputTuple,
      RegisteredEvent.OutputObject
    >;
    Registered: TypedContractEvent<
      RegisteredEvent.InputTuple,
      RegisteredEvent.OutputTuple,
      RegisteredEvent.OutputObject
    >;
  };
}
