import type { IsAny } from '../../../src/testing-utils/is-type/is-any';
import type { ExpectFalse } from '../../../src/testing-utils/expect-type/expect-false';

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

type TestIsAny_Any = IsAny<any>;

type TestIsAny_Never = ExpectFalse<IsAny<never>>;
type TestIsAny_Unknown = ExpectFalse<IsAny<unknown>>;
type TestIsAny_Void = ExpectFalse<IsAny<void>>;
type TestIsAny_String = ExpectFalse<IsAny<string>>;
type TestIsAny_StringLiteral = ExpectFalse<IsAny<'hello'>>;
type TestIsAny_Number = ExpectFalse<IsAny<number>>;
type TestIsAny_NumberLiteral = ExpectFalse<IsAny<123>>;
type TestIsAny_BigInt = ExpectFalse<IsAny<bigint>>;
type TestIsAny_BigIntLiteral = ExpectFalse<IsAny<123123123123123123123123n>>;
type TestIsAny_Null = ExpectFalse<IsAny<null>>;
type TestIsAny_Undefined = ExpectFalse<IsAny<undefined>>;
type TestIsAny_Interface = ExpectFalse<IsAny<FooBarInterface>>;
type TestIsAny_Type = ExpectFalse<IsAny<FooBarType>>;
type TestIsAny_Array = ExpectFalse<IsAny<Array<any>>>;
type TestIsAny_ReadonlyArray = ExpectFalse<IsAny<ReadonlyArray<any>>>;
type TestIsAny_Boolean = ExpectFalse<IsAny<boolean>>;
type TestIsAny_True = ExpectFalse<IsAny<true>>;
type TestIsAny_False = ExpectFalse<IsAny<false>>;
