import type { ExpectNotNever } from '../../../../src/testing-utils/expect-not-type/any-never-unknown/expect-not-never';

interface FooBarInterface {
  foo: any;
  bar: never;
  readonly bazz?: string;
}

type FooBarType = {
  foo: any;
  bar: never;
  readonly bazz?: string;
};

// @ts-expect-error
export type ExpectNotNever_Never = ExpectNotNever<never>;

export type ExpectNotNever_Unknown = ExpectNotNever<unknown>;
export type ExpectNotNever_Any = ExpectNotNever<any>;
export type ExpectNotNever_False = ExpectNotNever<false>;
export type ExpectNotNever_True = ExpectNotNever<true>;
export type ExpectNotNever_Boolean = ExpectNotNever<boolean>;
export type ExpectNotNever_Void = ExpectNotNever<void>;
export type ExpectNotNever_String = ExpectNotNever<string>;
export type ExpectNotNever_StringLiteral = ExpectNotNever<'something'>;
export type ExpectNotNever_Number = ExpectNotNever<number>;
export type ExpectNotNever_NumberLiteral = ExpectNotNever<123>;
export type ExpectNotNever_BigInt = ExpectNotNever<bigint>;
export type ExpectNotNever_BigIntLiteral =
  ExpectNotNever<1111111111111111111111111111111n>;
export type ExpectNotNever_Null = ExpectNotNever<null>;
export type ExpectNotNever_Undefined = ExpectNotNever<undefined>;
export type ExpectNotNever_Interface = ExpectNotNever<FooBarInterface>;
export type ExpectNotNever_Type = ExpectNotNever<FooBarType>;
export type ExpectNotNever_Array = ExpectNotNever<Array<false>>;
export type ExpectNotNever_ReadonlyArray = ExpectNotNever<ReadonlyArray<false>>;
