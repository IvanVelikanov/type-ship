import type { ExpectNotUnknown } from '../../../../src/testing-utils/expect-not-type/any-never-unknown/expect-not-unknown';

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
export type ExpectNotUnknown_Unknown = ExpectNotUnknown<unknown>;

export type ExpectNotUnknown_Never = ExpectNotUnknown<never>;
export type ExpectNotUnknown_False = ExpectNotUnknown<false>;
export type ExpectNotUnknown_True = ExpectNotUnknown<true>;
export type ExpectNotUnknown_Boolean = ExpectNotUnknown<boolean>;
export type ExpectNotUnknown_Any = ExpectNotUnknown<any>;
export type ExpectNotUnknown_Void = ExpectNotUnknown<void>;
export type ExpectNotUnknown_String = ExpectNotUnknown<string>;
export type ExpectNotUnknown_StringLiteral = ExpectNotUnknown<'something'>;
export type ExpectNotUnknown_Number = ExpectNotUnknown<number>;
export type ExpectNotUnknown_NumberLiteral = ExpectNotUnknown<123>;
export type ExpectNotUnknown_BigInt = ExpectNotUnknown<bigint>;
export type ExpectNotUnknown_BigIntLiteral =
  ExpectNotUnknown<1111111111111111111111111111111n>;
export type ExpectNotUnknown_Null = ExpectNotUnknown<null>;
export type ExpectNotUnknown_Undefined = ExpectNotUnknown<undefined>;
export type ExpectNotUnknown_Interface = ExpectNotUnknown<FooBarInterface>;
export type ExpectNotUnknown_Type = ExpectNotUnknown<FooBarType>;
export type ExpectNotUnknown_Array = ExpectNotUnknown<Array<false>>;
export type ExpectNotUnknown_ReadonlyArray = ExpectNotUnknown<
  ReadonlyArray<false>
>;
