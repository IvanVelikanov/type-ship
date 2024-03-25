import type { IsNotAnyOrNeverOrUnknown } from '../../../../src/testing-utils/is-not-type/any-never-unknown/is-not-any-or-never-or-unknown';
import type { ExpectFalse } from '../../../../src/testing-utils/expect-type/booleans/expect-false';
import type { ExpectTrue } from '../../../../src/testing-utils/expect-type/booleans/expect-true';

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

type TestIsNotAnyOrNeverOrUnknown_Any = ExpectFalse<
  IsNotAnyOrNeverOrUnknown<any>
>;

type TestIsNotAnyOrNeverOrUnknown_Never = ExpectFalse<
  IsNotAnyOrNeverOrUnknown<never>
>;
type TestIsNotAnyOrNeverOrUnknown_Unknown = ExpectFalse<
  IsNotAnyOrNeverOrUnknown<unknown>
>;

type TestIsNotAnyOrNeverOrUnknown_Void = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<void>
>;
type TestIsNotAnyOrNeverOrUnknown_String = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<string>
>;
type TestIsNotAnyOrNeverOrUnknown_StringLiteral = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<'hello'>
>;
type TestIsNotAnyOrNeverOrUnknown_Number = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<number>
>;
type TestIsNotAnyOrNeverOrUnknown_NumberLiteral = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<123>
>;
type TestIsNotAnyOrNeverOrUnknown_BigInt = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<bigint>
>;
type TestIsNotAnyOrNeverOrUnknown_BigIntLiteral = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<123123123123123123123123n>
>;
type TestIsNotAnyOrNeverOrUnknown_Null = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<null>
>;
type TestIsNotAnyOrNeverOrUnknown_Undefined = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<undefined>
>;
type TestIsNotAnyOrNeverOrUnknown_Interface = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<FooBarInterface>
>;
type TestIsNotAnyOrNeverOrUnknown_Type = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<FooBarType>
>;
type TestIsNotAnyOrNeverOrUnknown_Array = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<Array<any>>
>;
type TestIsNotAnyOrNeverOrUnknown_ReadonlyArray = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<ReadonlyArray<any>>
>;
type TestIsNotAnyOrNeverOrUnknown_Boolean = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<boolean>
>;
type TestIsNotAnyOrNeverOrUnknown_True = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<true>
>;
type TestIsNotAnyOrNeverOrUnknown_False = ExpectTrue<
  IsNotAnyOrNeverOrUnknown<false>
>;
