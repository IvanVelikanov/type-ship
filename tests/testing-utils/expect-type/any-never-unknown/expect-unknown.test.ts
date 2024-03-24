import type { ExpectUnknown } from '../../../../src/testing-utils/expect-type/any-never-unknown/expect-unknown';

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

export type ExpectUnknown_Unknown = ExpectUnknown<unknown>;

// @ts-expect-error
export type ExpectUnknown_Never = ExpectUnknown<never>;
// @ts-expect-error
export type ExpectUnknown_False = ExpectUnknown<false>;
// @ts-expect-error
export type ExpectUnknown_True = ExpectUnknown<true>;
// @ts-expect-error
export type ExpectUnknown_Boolean = ExpectUnknown<boolean>;
// @ts-expect-error
export type ExpectUnknown_Any = ExpectUnknown<any>;
// @ts-expect-error
export type ExpectUnknown_Void = ExpectUnknown<void>;
// @ts-expect-error
export type ExpectUnknown_String = ExpectUnknown<string>;
// @ts-expect-error
export type ExpectUnknown_StringLiteral = ExpectUnknown<'something'>;
// @ts-expect-error
export type ExpectUnknown_Number = ExpectUnknown<number>;
// @ts-expect-error
export type ExpectUnknown_NumberLiteral = ExpectUnknown<123>;
// @ts-expect-error
export type ExpectUnknown_BigInt = ExpectUnknown<bigint>;
export type ExpectUnknown_BigIntLiteral =
  // @ts-expect-error
  ExpectUnknown<1111111111111111111111111111111n>;
// @ts-expect-error
export type ExpectUnknown_Null = ExpectUnknown<null>;
// @ts-expect-error
export type ExpectUnknown_Undefined = ExpectUnknown<undefined>;
// @ts-expect-error
export type ExpectUnknown_Interface = ExpectUnknown<FooBarInterface>;
// @ts-expect-error
export type ExpectUnknown_Type = ExpectUnknown<FooBarType>;
// @ts-expect-error
export type ExpectUnknown_Array = ExpectUnknown<Array<false>>;
// @ts-expect-error
export type ExpectUnknown_ReadonlyArray = ExpectUnknown<ReadonlyArray<false>>;
