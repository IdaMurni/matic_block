// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TokenAddition extends ethereum.Event {
  get params(): TokenAddition__Params {
    return new TokenAddition__Params(this);
  }
}

export class TokenAddition__Params {
  _event: TokenAddition;

  constructor(event: TokenAddition) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TokenRemoval extends ethereum.Event {
  get params(): TokenRemoval__Params {
    return new TokenRemoval__Params(this);
  }
}

export class TokenRemoval__Params {
  _event: TokenRemoval;

  constructor(event: TokenRemoval) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ConverterAddition extends ethereum.Event {
  get params(): ConverterAddition__Params {
    return new ConverterAddition__Params(this);
  }
}

export class ConverterAddition__Params {
  _event: ConverterAddition;

  constructor(event: ConverterAddition) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _address(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ConverterRemoval extends ethereum.Event {
  get params(): ConverterRemoval__Params {
    return new ConverterRemoval__Params(this);
  }
}

export class ConverterRemoval__Params {
  _event: ConverterRemoval;

  constructor(event: ConverterRemoval) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _address(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnerUpdate extends ethereum.Event {
  get params(): OwnerUpdate__Params {
    return new OwnerUpdate__Params(this);
  }
}

export class OwnerUpdate__Params {
  _event: OwnerUpdate;

  constructor(event: OwnerUpdate) {
    this._event = event;
  }

  get _prevOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ConverterRegistryContract__tokenTableResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class ConverterRegistryContract extends ethereum.SmartContract {
  static bind(address: Address): ConverterRegistryContract {
    return new ConverterRegistryContract("ConverterRegistryContract", address);
  }

  tokenTable(param0: Address): ConverterRegistryContract__tokenTableResult {
    let result = super.call(
      "tokenTable",
      "tokenTable(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new ConverterRegistryContract__tokenTableResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_tokenTable(
    param0: Address
  ): ethereum.CallResult<ConverterRegistryContract__tokenTableResult> {
    let result = super.tryCall(
      "tokenTable",
      "tokenTable(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ConverterRegistryContract__tokenTableResult(
        value[0].toBoolean(),
        value[1].toBigInt()
      )
    );
  }

  latestConverterAddress(_token: Address): Address {
    let result = super.call(
      "latestConverterAddress",
      "latestConverterAddress(address):(address)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toAddress();
  }

  try_latestConverterAddress(_token: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "latestConverterAddress",
      "latestConverterAddress(address):(address)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokens(param0: BigInt): Address {
    let result = super.call("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_tokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  converterAddress(_token: Address, _index: BigInt): Address {
    let result = super.call(
      "converterAddress",
      "converterAddress(address,uint32):(address)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return result[0].toAddress();
  }

  try_converterAddress(
    _token: Address,
    _index: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "converterAddress",
      "converterAddress(address,uint32):(address)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenAddress(_converter: Address): Address {
    let result = super.call("tokenAddress", "tokenAddress(address):(address)", [
      ethereum.Value.fromAddress(_converter)
    ]);

    return result[0].toAddress();
  }

  try_tokenAddress(_converter: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenAddress",
      "tokenAddress(address):(address)",
      [ethereum.Value.fromAddress(_converter)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenCount(): BigInt {
    let result = super.call("tokenCount", "tokenCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokenCount", "tokenCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  converterCount(_token: Address): BigInt {
    let result = super.call(
      "converterCount",
      "converterCount(address):(uint256)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toBigInt();
  }

  try_converterCount(_token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "converterCount",
      "converterCount(address):(uint256)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  newOwner(): Address {
    let result = super.call("newOwner", "newOwner():(address)", []);

    return result[0].toAddress();
  }

  try_newOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("newOwner", "newOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class UnregisterConverterCall extends ethereum.Call {
  get inputs(): UnregisterConverterCall__Inputs {
    return new UnregisterConverterCall__Inputs(this);
  }

  get outputs(): UnregisterConverterCall__Outputs {
    return new UnregisterConverterCall__Outputs(this);
  }
}

export class UnregisterConverterCall__Inputs {
  _call: UnregisterConverterCall;

  constructor(call: UnregisterConverterCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _index(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnregisterConverterCall__Outputs {
  _call: UnregisterConverterCall;

  constructor(call: UnregisterConverterCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class RegisterConverterCall extends ethereum.Call {
  get inputs(): RegisterConverterCall__Inputs {
    return new RegisterConverterCall__Inputs(this);
  }

  get outputs(): RegisterConverterCall__Outputs {
    return new RegisterConverterCall__Outputs(this);
  }
}

export class RegisterConverterCall__Inputs {
  _call: RegisterConverterCall;

  constructor(call: RegisterConverterCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _converter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RegisterConverterCall__Outputs {
  _call: RegisterConverterCall;

  constructor(call: RegisterConverterCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
