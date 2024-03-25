import type { ExpectNotAnyOrNeverOrUnknown } from '../../../../src/testing-utils/expect-not-type/any-never-unknown/expect-not-any-or-never-or-unknown';

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

export type ExpectNotAnyOrNeverOrUnknown_Any =
  // @ts-expect-error
  ExpectNotAnyOrNeverOrUnknown<any>;
export type ExpectNotAnyOrNeverOrUnknown_Unknown =
  // @ts-expect-error
  ExpectNotAnyOrNeverOrUnknown<unknown>;
export type ExpectNotAnyOrNeverOrUnknown_Never =
  // @ts-expect-error
  ExpectNotAnyOrNeverOrUnknown<never>;

export type ExpectNotAnyOrNeverOrUnknown_False =
  ExpectNotAnyOrNeverOrUnknown<false>;
export type ExpectNotAnyOrNeverOrUnknown_True =
  ExpectNotAnyOrNeverOrUnknown<true>;
export type ExpectNotAnyOrNeverOrUnknown_Boolean =
  ExpectNotAnyOrNeverOrUnknown<boolean>;
export type ExpectNotAnyOrNeverOrUnknown_Void =
  ExpectNotAnyOrNeverOrUnknown<void>;
export type ExpectNotAnyOrNeverOrUnknown_String =
  ExpectNotAnyOrNeverOrUnknown<string>;
export type ExpectNotAnyOrNeverOrUnknown_StringLiteral =
  ExpectNotAnyOrNeverOrUnknown<'something'>;
export type ExpectNotAnyOrNeverOrUnknown_Number =
  ExpectNotAnyOrNeverOrUnknown<number>;
export type ExpectNotAnyOrNeverOrUnknown_NumberLiteral =
  ExpectNotAnyOrNeverOrUnknown<123>;
export type ExpectNotAnyOrNeverOrUnknown_BigInt =
  ExpectNotAnyOrNeverOrUnknown<bigint>;
export type ExpectNotAnyOrNeverOrUnknown_BigIntLiteral =
  ExpectNotAnyOrNeverOrUnknown<1111111111111111111111111111111n>;
export type ExpectNotAnyOrNeverOrUnknown_Null =
  ExpectNotAnyOrNeverOrUnknown<null>;
export type ExpectNotAnyOrNeverOrUnknown_Undefined =
  ExpectNotAnyOrNeverOrUnknown<undefined>;
export type ExpectNotAnyOrNeverOrUnknown_Interface =
  ExpectNotAnyOrNeverOrUnknown<FooBarInterface>;
export type ExpectNotAnyOrNeverOrUnknown_Type =
  ExpectNotAnyOrNeverOrUnknown<FooBarType>;
export type ExpectNotAnyOrNeverOrUnknown_Array = ExpectNotAnyOrNeverOrUnknown<
  Array<false>
>;
export type ExpectNotAnyOrNeverOrUnknown_ReadonlyArray =
  ExpectNotAnyOrNeverOrUnknown<ReadonlyArray<false>>;
