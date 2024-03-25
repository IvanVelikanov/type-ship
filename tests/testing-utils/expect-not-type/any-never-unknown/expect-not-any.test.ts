import type { ExpectNotAny } from '../../../../src/testing-utils/expect-not-type/any-never-unknown/expect-not-any';

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
export type ExpectNotAny_Any = ExpectNotAny<any>;

export type ExpectNotAny_Never = ExpectNotAny<never>;
export type ExpectNotAny_Unknown = ExpectNotAny<unknown>;
export type ExpectNotAny_False = ExpectNotAny<false>;
export type ExpectNotAny_True = ExpectNotAny<true>;
export type ExpectNotAny_Boolean = ExpectNotAny<boolean>;
export type ExpectNotAny_Void = ExpectNotAny<void>;
export type ExpectNotAny_String = ExpectNotAny<string>;
export type ExpectNotAny_StringLiteral = ExpectNotAny<'something'>;
export type ExpectNotAny_Number = ExpectNotAny<number>;
export type ExpectNotAny_NumberLiteral = ExpectNotAny<123>;
export type ExpectNotAny_BigInt = ExpectNotAny<bigint>;
export type ExpectNotAny_BigIntLiteral =
  ExpectNotAny<1111111111111111111111111111111n>;
export type ExpectNotAny_Null = ExpectNotAny<null>;
export type ExpectNotAny_Undefined = ExpectNotAny<undefined>;
export type ExpectNotAny_Interface = ExpectNotAny<FooBarInterface>;
export type ExpectNotAny_Type = ExpectNotAny<FooBarType>;
export type ExpectNotAny_Array = ExpectNotAny<Array<false>>;
export type ExpectNotAny_ReadonlyArray = ExpectNotAny<ReadonlyArray<false>>;
