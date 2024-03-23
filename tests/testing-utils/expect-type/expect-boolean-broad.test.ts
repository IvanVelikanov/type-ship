import type { ExpectBooleanBroad } from '../../../src/testing-utils/expect-type/expect-boolean-broad';

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

export type ExpectBooleanBroad_Boolean = ExpectBooleanBroad<boolean>;
export type ExpectBooleanBroad_TrueOrFalse = ExpectBooleanBroad<true | false>;

// @ts-expect-error
export type ExpectBooleanBroad_True = ExpectBooleanBroad<true>;
// @ts-expect-error
export type ExpectBooleanBroad_False = ExpectBooleanBroad<false>;

// @ts-expect-error
export type ExpectBooleanBroad_Any = ExpectBooleanBroad<any>;
// @ts-expect-error: Seems like there isn't a way to make this test pass due to the nature of `never`.
export type ExpectBooleanBroad_Never = ExpectBooleanBroad<never>;
// @ts-expect-error
export type ExpectBooleanBroad_Unknown = ExpectBooleanBroad<unknown>;
// @ts-expect-error
export type ExpectBooleanBroad_Void = ExpectBooleanBroad<void>;
// @ts-expect-error
export type ExpectBooleanBroad_String = ExpectBooleanBroad<string>;
// @ts-expect-error
export type ExpectBooleanBroad_StringLiteral = ExpectBooleanBroad<'something'>;
// @ts-expect-error
export type ExpectBooleanBroad_Number = ExpectBooleanBroad<number>;
// @ts-expect-error
export type ExpectBooleanBroad_NumberLiteral = ExpectBooleanBroad<123>;
// @ts-expect-error
export type ExpectBooleanBroad_BigInt = ExpectBooleanBroad<bigint>;
export type ExpectBooleanBroad_BigIntLiteral =
  // @ts-expect-error
  ExpectBooleanBroad<1111111111111111111111111111111n>;
// @ts-expect-error
export type ExpectBooleanBroad_Null = ExpectBooleanBroad<null>;
// @ts-expect-error
export type ExpectBooleanBroad_Undefined = ExpectBooleanBroad<undefined>;
// @ts-expect-error
export type ExpectBooleanBroad_Interface = ExpectBooleanBroad<FooBarInterface>;
// @ts-expect-error
export type ExpectBooleanBroad_Type = ExpectBooleanBroad<FooBarType>;
// @ts-expect-error
export type ExpectBooleanBroad_Array = ExpectBooleanBroad<Array<false>>;
export type ExpectBooleanBroad_ReadonlyArray = ExpectBooleanBroad<
  // @ts-expect-error
  ReadonlyArray<false>
>;
