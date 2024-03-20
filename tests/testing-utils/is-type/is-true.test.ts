import type { IsTrue } from '../../../src/testing-utils/is-type/is-true';

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

type TestIsTrue_True = IsTrue<true>;

type TestIsTrue_Boolean = IsTrue<boolean>;
type TestIsTrue_False = IsTrue<false>;
type TestIsTrue_Any = IsTrue<any>;
type TestIsTrue_Never = IsTrue<never>;
type TestIsTrue_Unknown = IsTrue<unknown>;
type TestIsTrue_Void = IsTrue<void>;
type TestIsTrue_String = IsTrue<string>;
type TestIsTrue_StringLiteral = IsTrue<'hello'>;
type TestIsTrue_Number = IsTrue<number>;
type TestIsTrue_NumberLiteral = IsTrue<123>;
type TestIsTrue_BigInt = IsTrue<bigint>;
type TestIsTrue_BigIntLiteral = IsTrue<123123123123123123123123n>;
type TestIsTrue_Null = IsTrue<null>;
type TestIsTrue_Undefined = IsTrue<undefined>;
type TestIsTrue_Interface = IsTrue<FooBarInterface>;
type TestIsTrue_Type = IsTrue<FooBarType>;
type TestIsTrue_Array = IsTrue<Array<any>>;
type TestIsTrue_ReadonlyArray = IsTrue<ReadonlyArray<any>>;

type TestBoolean = boolean extends true ? true : false;
