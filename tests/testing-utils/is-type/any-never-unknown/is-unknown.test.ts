import type { IsUnknown } from '../../../../src/testing-utils/is-type/any-never-unknown/is-unknown';
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

type TestIsUnknown_Unknown = ExpectTrue<IsUnknown<unknown>>;

type TestIsUnknown_True = ExpectFalse<IsUnknown<true>>;
type TestIsUnknown_Boolean = ExpectFalse<IsUnknown<boolean>>;
type TestIsUnknown_False = ExpectFalse<IsUnknown<false>>;
type TestIsUnknown_Any = ExpectFalse<IsUnknown<any>>;
type TestIsUnknown_Never = ExpectFalse<IsUnknown<never>>;
type TestIsUnknown_Void = ExpectFalse<IsUnknown<void>>;
type TestIsUnknown_String = ExpectFalse<IsUnknown<string>>;
type TestIsUnknown_StringLiteral = ExpectFalse<IsUnknown<'hello'>>;
type TestIsUnknown_Number = ExpectFalse<IsUnknown<number>>;
type TestIsUnknown_NumberLiteral = ExpectFalse<IsUnknown<123>>;
type TestIsUnknown_BigInt = ExpectFalse<IsUnknown<bigint>>;
type TestIsUnknown_BigIntLiteral = ExpectFalse<
  IsUnknown<123123123123123123123123n>
>;
type TestIsUnknown_Null = ExpectFalse<IsUnknown<null>>;
type TestIsUnknown_Undefined = ExpectFalse<IsUnknown<undefined>>;
type TestIsUnknown_Interface = ExpectFalse<IsUnknown<FooBarInterface>>;
type TestIsUnknown_Type = ExpectFalse<IsUnknown<FooBarType>>;
type TestIsUnknown_Array = ExpectFalse<IsUnknown<Array<any>>>;
type TestIsUnknown_ReadonlyArray = ExpectFalse<IsUnknown<ReadonlyArray<any>>>;
