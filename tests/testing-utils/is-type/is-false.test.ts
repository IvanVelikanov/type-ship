import type { IsFalse } from '../../../src/testing-utils/is-type/is-false';

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

type TestIsFalse_False = IsFalse<false>;

type TestIsFalse_True = IsFalse<true>;
type TestIsFalse_Boolean = IsFalse<boolean>;
type TestIsFalse_Any = IsFalse<any>;
type TestIsFalse_Never = IsFalse<never>;
type TestIsFalse_Unknown = IsFalse<unknown>;
type TestIsFalse_Void = IsFalse<void>;
type TestIsFalse_String = IsFalse<string>;
type TestIsFalse_StringLiteral = IsFalse<'hello'>;
type TestIsFalse_Number = IsFalse<number>;
type TestIsFalse_NumberLiteral = IsFalse<123>;
type TestIsFalse_BigInt = IsFalse<bigint>;
type TestIsFalse_BigIntLiteral = IsFalse<123123123123123123123123n>;
type TestIsFalse_Null = IsFalse<null>;
type TestIsFalse_Undefined = IsFalse<undefined>;
type TestIsFalse_Interface = IsFalse<FooBarInterface>;
type TestIsFalse_Type = IsFalse<FooBarType>;
type TestIsFalse_Array = IsFalse<Array<any>>;
type TestIsFalse_ReadonlyArray = IsFalse<ReadonlyArray<any>>;

type TestBoolean = boolean extends true ? true : false;
