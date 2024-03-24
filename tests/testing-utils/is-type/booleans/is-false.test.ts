import type { IsFalse } from '../../../../src/testing-utils/is-type/booleans/is-false';
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

type TestIsFalse_False = ExpectTrue<IsFalse<false>>;

type TestIsFalse_True = ExpectFalse<IsFalse<true>>;
type TestIsFalse_Boolean = ExpectFalse<IsFalse<boolean>>;
type TestIsFalse_Any = ExpectFalse<IsFalse<any>>;
type TestIsFalse_Never = ExpectFalse<IsFalse<never>>;
type TestIsFalse_Unknown = ExpectFalse<IsFalse<unknown>>;
type TestIsFalse_Void = ExpectFalse<IsFalse<void>>;
type TestIsFalse_String = ExpectFalse<IsFalse<string>>;
type TestIsFalse_StringLiteral = ExpectFalse<IsFalse<'hello'>>;
type TestIsFalse_Number = ExpectFalse<IsFalse<number>>;
type TestIsFalse_NumberLiteral = ExpectFalse<IsFalse<123>>;
type TestIsFalse_BigInt = ExpectFalse<IsFalse<bigint>>;
type TestIsFalse_BigIntLiteral = ExpectFalse<
  IsFalse<123123123123123123123123n>
>;
type TestIsFalse_Null = ExpectFalse<IsFalse<null>>;
type TestIsFalse_Undefined = ExpectFalse<IsFalse<undefined>>;
type TestIsFalse_Interface = ExpectFalse<IsFalse<FooBarInterface>>;
type TestIsFalse_Type = ExpectFalse<IsFalse<FooBarType>>;
type TestIsFalse_Array = ExpectFalse<IsFalse<Array<any>>>;
type TestIsFalse_ReadonlyArray = ExpectFalse<IsFalse<ReadonlyArray<any>>>;
