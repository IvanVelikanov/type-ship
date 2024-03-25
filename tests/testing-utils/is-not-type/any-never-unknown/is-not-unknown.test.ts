import type { IsNotUnknown } from '../../../../src/testing-utils/is-not-type/any-never-unknown/is-not-unknown';
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

type TestIsNotUnknown_Unknown = ExpectFalse<IsNotUnknown<unknown>>;

type TestIsNotUnknown_True = ExpectTrue<IsNotUnknown<true>>;
type TestIsNotUnknown_Boolean = ExpectTrue<IsNotUnknown<boolean>>;
type TestIsNotUnknown_False = ExpectTrue<IsNotUnknown<false>>;
type TestIsNotUnknown_Any = ExpectTrue<IsNotUnknown<any>>;
type TestIsNotUnknown_Never = ExpectTrue<IsNotUnknown<never>>;
type TestIsNotUnknown_Void = ExpectTrue<IsNotUnknown<void>>;
type TestIsNotUnknown_String = ExpectTrue<IsNotUnknown<string>>;
type TestIsNotUnknown_StringLiteral = ExpectTrue<IsNotUnknown<'hello'>>;
type TestIsNotUnknown_Number = ExpectTrue<IsNotUnknown<number>>;
type TestIsNotUnknown_NumberLiteral = ExpectTrue<IsNotUnknown<123>>;
type TestIsNotUnknown_BigInt = ExpectTrue<IsNotUnknown<bigint>>;
type TestIsNotUnknown_BigIntLiteral = ExpectTrue<
  IsNotUnknown<123123123123123123123123n>
>;
type TestIsNotUnknown_Null = ExpectTrue<IsNotUnknown<null>>;
type TestIsNotUnknown_Undefined = ExpectTrue<IsNotUnknown<undefined>>;
type TestIsNotUnknown_Interface = ExpectTrue<IsNotUnknown<FooBarInterface>>;
type TestIsNotUnknown_Type = ExpectTrue<IsNotUnknown<FooBarType>>;
type TestIsNotUnknown_Array = ExpectTrue<IsNotUnknown<Array<any>>>;
type TestIsNotUnknown_ReadonlyArray = ExpectTrue<
  IsNotUnknown<ReadonlyArray<any>>
>;
