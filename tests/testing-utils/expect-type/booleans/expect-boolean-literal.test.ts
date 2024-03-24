import type { ExpectBooleanLiteral } from '../../../../src/testing-utils/expect-type/booleans/expect-boolean-literal';

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

export type ExpectBooleanLiteral_True = ExpectBooleanLiteral<true>;
export type ExpectBooleanLiteral_False = ExpectBooleanLiteral<false>;

// @ts-expect-error
export type ExpectBooleanLiteral_Boolean = ExpectBooleanLiteral<boolean>;
export type ExpectBooleanLiteral_TrueOrFalse = ExpectBooleanLiteral<
  // @ts-expect-error
  true | false
>;

// @ts-expect-error
export type ExpectBooleanLiteral_Any = ExpectBooleanLiteral<any>;
// @ts-expect-error: Seems like there isn't a way to make this test pass due to the nature of `never`.
export type ExpectBooleanLiteral_Never = ExpectBooleanLiteral<never>;
// @ts-expect-error
export type ExpectBooleanLiteral_Unknown = ExpectBooleanLiteral<unknown>;
// @ts-expect-error
export type ExpectBooleanLiteral_Void = ExpectBooleanLiteral<void>;
// @ts-expect-error
export type ExpectBooleanLiteral_String = ExpectBooleanLiteral<string>;
export type ExpectBooleanLiteral_StringLiteral =
  // @ts-expect-error
  ExpectBooleanLiteral<'something'>;
// @ts-expect-error
export type ExpectBooleanLiteral_Number = ExpectBooleanLiteral<number>;
// @ts-expect-error
export type ExpectBooleanLiteral_NumberLiteral = ExpectBooleanLiteral<123>;
// @ts-expect-error
export type ExpectBooleanLiteral_BigInt = ExpectBooleanLiteral<bigint>;
export type ExpectBooleanLiteral_BigIntLiteral =
  // @ts-expect-error
  ExpectBooleanLiteral<1111111111111111111111111111111n>;
// @ts-expect-error
export type ExpectBooleanLiteral_Null = ExpectBooleanLiteral<null>;
// @ts-expect-error
export type ExpectBooleanLiteral_Undefined = ExpectBooleanLiteral<undefined>;
export type ExpectBooleanLiteral_Interface =
  // @ts-expect-error
  ExpectBooleanLiteral<FooBarInterface>;
// @ts-expect-error
export type ExpectBooleanLiteral_Type = ExpectBooleanLiteral<FooBarType>;
// @ts-expect-error
export type ExpectBooleanLiteral_Array = ExpectBooleanLiteral<Array<false>>;
export type ExpectBooleanLiteral_ReadonlyArray = ExpectBooleanLiteral<
  // @ts-expect-error
  ReadonlyArray<false>
>;
