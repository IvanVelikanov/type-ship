import type { ExpectAnyOrNeverOrUnknown } from '../../../../src/testing-utils/expect-type/any-never-unknown/expect-any-or-never-or-unknown';

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

export type ExpectAnyOrNeverOrUnknown_Any = ExpectAnyOrNeverOrUnknown<any>;
export type ExpectAnyOrNeverOrUnknown_Unknown =
  ExpectAnyOrNeverOrUnknown<unknown>;
export type ExpectAnyOrNeverOrUnknown_Never = ExpectAnyOrNeverOrUnknown<never>;

// @ts-expect-error
export type ExpectAnyOrNeverOrUnknown_False = ExpectAnyOrNeverOrUnknown<false>;
// @ts-expect-error
export type ExpectAnyOrNeverOrUnknown_True = ExpectAnyOrNeverOrUnknown<true>;
export type ExpectAnyOrNeverOrUnknown_Boolean =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<boolean>;
// @ts-expect-error
export type ExpectAnyOrNeverOrUnknown_Void = ExpectAnyOrNeverOrUnknown<void>;
export type ExpectAnyOrNeverOrUnknown_String =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<string>;
export type ExpectAnyOrNeverOrUnknown_StringLiteral =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<'something'>;
export type ExpectAnyOrNeverOrUnknown_Number =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<number>;
export type ExpectAnyOrNeverOrUnknown_NumberLiteral =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<123>;
export type ExpectAnyOrNeverOrUnknown_BigInt =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<bigint>;
export type ExpectAnyOrNeverOrUnknown_BigIntLiteral =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<1111111111111111111111111111111n>;
// @ts-expect-error
export type ExpectAnyOrNeverOrUnknown_Null = ExpectAnyOrNeverOrUnknown<null>;
export type ExpectAnyOrNeverOrUnknown_Undefined =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<undefined>;
export type ExpectAnyOrNeverOrUnknown_Interface =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<FooBarInterface>;
export type ExpectAnyOrNeverOrUnknown_Type =
  // @ts-expect-error
  ExpectAnyOrNeverOrUnknown<FooBarType>;
export type ExpectAnyOrNeverOrUnknown_Array = ExpectAnyOrNeverOrUnknown<
  // @ts-expect-error
  Array<false>
>;
export type ExpectAnyOrNeverOrUnknown_ReadonlyArray = ExpectAnyOrNeverOrUnknown<
  // @ts-expect-error
  ReadonlyArray<false>
>;
