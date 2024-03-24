import type { IsAnyOrNeverOrUnknown } from '../../../../src/testing-utils/is-type/any-never-unknown/is-any-or-never-or-unknown';
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

type TestIsAnyOrNeverOrUnknown_Any = ExpectTrue<IsAnyOrNeverOrUnknown<any>>;

type TestIsAnyOrNeverOrUnknown_Never = ExpectTrue<IsAnyOrNeverOrUnknown<never>>;
type TestIsAnyOrNeverOrUnknown_Unknown = ExpectTrue<
  IsAnyOrNeverOrUnknown<unknown>
>;

type TestIsAnyOrNeverOrUnknown_Void = ExpectFalse<IsAnyOrNeverOrUnknown<void>>;
type TestIsAnyOrNeverOrUnknown_String = ExpectFalse<
  IsAnyOrNeverOrUnknown<string>
>;
type TestIsAnyOrNeverOrUnknown_StringLiteral = ExpectFalse<
  IsAnyOrNeverOrUnknown<'hello'>
>;
type TestIsAnyOrNeverOrUnknown_Number = ExpectFalse<
  IsAnyOrNeverOrUnknown<number>
>;
type TestIsAnyOrNeverOrUnknown_NumberLiteral = ExpectFalse<
  IsAnyOrNeverOrUnknown<123>
>;
type TestIsAnyOrNeverOrUnknown_BigInt = ExpectFalse<
  IsAnyOrNeverOrUnknown<bigint>
>;
type TestIsAnyOrNeverOrUnknown_BigIntLiteral = ExpectFalse<
  IsAnyOrNeverOrUnknown<123123123123123123123123n>
>;
type TestIsAnyOrNeverOrUnknown_Null = ExpectFalse<IsAnyOrNeverOrUnknown<null>>;
type TestIsAnyOrNeverOrUnknown_Undefined = ExpectFalse<
  IsAnyOrNeverOrUnknown<undefined>
>;
type TestIsAnyOrNeverOrUnknown_Interface = ExpectFalse<
  IsAnyOrNeverOrUnknown<FooBarInterface>
>;
type TestIsAnyOrNeverOrUnknown_Type = ExpectFalse<
  IsAnyOrNeverOrUnknown<FooBarType>
>;
type TestIsAnyOrNeverOrUnknown_Array = ExpectFalse<
  IsAnyOrNeverOrUnknown<Array<any>>
>;
type TestIsAnyOrNeverOrUnknown_ReadonlyArray = ExpectFalse<
  IsAnyOrNeverOrUnknown<ReadonlyArray<any>>
>;
type TestIsAnyOrNeverOrUnknown_Boolean = ExpectFalse<
  IsAnyOrNeverOrUnknown<boolean>
>;
type TestIsAnyOrNeverOrUnknown_True = ExpectFalse<IsAnyOrNeverOrUnknown<true>>;
type TestIsAnyOrNeverOrUnknown_False = ExpectFalse<
  IsAnyOrNeverOrUnknown<false>
>;
