import type { ExpectBoolean } from '../../../../src/testing-utils/expect-type/booleans/expect-boolean';

interface FooBarInterface {
  foo: any;
  bar: never;
  readonly bazz?: string;
}

export type FooBarType = {
  foo: any;
  bar: never;
  readonly bazz?: string;
};

export type ExpectBoolean_True = ExpectBoolean<true>;
export type ExpectBoolean_False = ExpectBoolean<false>;
export type ExpectBoolean_Boolean = ExpectBoolean<boolean>;
export type ExpectBoolean_TrueOrFalse = ExpectBoolean<true | false>;

// @ts-expect-error
export type ExpectBoolean_Any = ExpectBoolean<any>;
// @ts-expect-error: Seems like there isn't a way to make this test pass due to the nature of `never`.
export type ExpectBoolean_Never = ExpectBoolean<never>;
// @ts-expect-error
export type ExpectBoolean_Unknown = ExpectBoolean<unknown>;
// @ts-expect-error
export type ExpectBoolean_Void = ExpectBoolean<void>;
// @ts-expect-error
export type ExpectBoolean_String = ExpectBoolean<string>;
// @ts-expect-error
export type ExpectBoolean_StringLiteral = ExpectBoolean<'something'>;
// @ts-expect-error
export type ExpectBoolean_Number = ExpectBoolean<number>;
// @ts-expect-error
export type ExpectBoolean_NumberLiteral = ExpectBoolean<123>;
// @ts-expect-error
export type ExpectBoolean_BigInt = ExpectBoolean<bigint>;
export type ExpectBoolean_BigIntLiteral =
  // @ts-expect-error
  ExpectBoolean<1111111111111111111111111111111n>;
// @ts-expect-error
export type ExpectBoolean_Null = ExpectBoolean<null>;
// @ts-expect-error
export type ExpectBoolean_Undefined = ExpectBoolean<undefined>;
// @ts-expect-error
export type ExpectBoolean_Interface = ExpectBoolean<FooBarInterface>;
// @ts-expect-error
export type ExpectBoolean_Type = ExpectBoolean<FooBarType>;
// @ts-expect-error
export type ExpectBoolean_Array = ExpectBoolean<Array<false>>;
// @ts-expect-error
export type ExpectBoolean_ReadonlyArray = ExpectBoolean<ReadonlyArray<false>>;
