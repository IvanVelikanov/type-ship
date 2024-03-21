import type { IsTrue } from '../../../src/testing-utils/is-type/is-true';
import type { ExpectFalse } from '../../../src/testing-utils/expect-type/expect-false';
import type { ExpectTrue } from '../../../src/testing-utils/expect-type/expect-true';

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

type TestIsTrue_True = ExpectTrue<IsTrue<true>>;

type TestIsTrue_Boolean = ExpectFalse<IsTrue<boolean>>;
type TestIsTrue_False = ExpectFalse<IsTrue<false>>;
type TestIsTrue_Any = ExpectFalse<IsTrue<any>>;
type TestIsTrue_Never = ExpectFalse<IsTrue<never>>;
type TestIsTrue_Unknown = ExpectFalse<IsTrue<unknown>>;
type TestIsTrue_Void = ExpectFalse<IsTrue<void>>;
type TestIsTrue_String = ExpectFalse<IsTrue<string>>;
type TestIsTrue_StringLiteral = ExpectFalse<IsTrue<'hello'>>;
type TestIsTrue_Number = ExpectFalse<IsTrue<number>>;
type TestIsTrue_NumberLiteral = ExpectFalse<IsTrue<123>>;
type TestIsTrue_BigInt = ExpectFalse<IsTrue<bigint>>;
type TestIsTrue_BigIntLiteral = ExpectFalse<IsTrue<123123123123123123123123n>>;
type TestIsTrue_Null = ExpectFalse<IsTrue<null>>;
type TestIsTrue_Undefined = ExpectFalse<IsTrue<undefined>>;
type TestIsTrue_Interface = ExpectFalse<IsTrue<FooBarInterface>>;
type TestIsTrue_Type = ExpectFalse<IsTrue<FooBarType>>;
type TestIsTrue_Array = ExpectFalse<IsTrue<Array<any>>>;
type TestIsTrue_ReadonlyArray = ExpectFalse<IsTrue<ReadonlyArray<any>>>;
