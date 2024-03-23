import type { IsBooleanLiteral } from '../../../src/testing-utils/is-type/is-boolean-literal';
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

type TestIsBooleanLiteral_True = ExpectTrue<IsBooleanLiteral<true>>;
type TestIsBooleanLiteral_False = ExpectTrue<IsBooleanLiteral<false>>;

type TestIsBooleanLiteral_Boolean = ExpectFalse<IsBooleanLiteral<boolean>>;
type TestIsBooleanLiteral_TrueOrFalse = ExpectFalse<
  IsBooleanLiteral<true | false>
>;

type TestIsBooleanLiteral_Any = ExpectFalse<IsBooleanLiteral<any>>;
type TestIsBooleanLiteral_Never = ExpectFalse<IsBooleanLiteral<never>>;
type TestIsBooleanLiteral_Unknown = ExpectFalse<IsBooleanLiteral<unknown>>;
type TestIsBooleanLiteral_Void = ExpectFalse<IsBooleanLiteral<void>>;
type TestIsBooleanLiteral_String = ExpectFalse<IsBooleanLiteral<string>>;
type TestIsBooleanLiteral_StringLiteral = ExpectFalse<
  IsBooleanLiteral<'hello'>
>;
type TestIsBooleanLiteral_Number = ExpectFalse<IsBooleanLiteral<number>>;
type TestIsBooleanLiteral_NumberLiteral = ExpectFalse<IsBooleanLiteral<123>>;
type TestIsBooleanLiteral_BigInt = ExpectFalse<IsBooleanLiteral<bigint>>;
type TestIsBooleanLiteral_BigIntLiteral = ExpectFalse<
  IsBooleanLiteral<123123123123123123123123n>
>;
type TestIsBooleanLiteral_Null = ExpectFalse<IsBooleanLiteral<null>>;
type TestIsBooleanLiteral_Undefined = ExpectFalse<IsBooleanLiteral<undefined>>;
type TestIsBooleanLiteral_Interface = ExpectFalse<
  IsBooleanLiteral<FooBarInterface>
>;
type TestIsBooleanLiteral_Type = ExpectFalse<IsBooleanLiteral<FooBarType>>;
type TestIsBooleanLiteral_Array = ExpectFalse<IsBooleanLiteral<Array<any>>>;
type TestIsBooleanLiteral_ReadonlyArray = ExpectFalse<
  IsBooleanLiteral<ReadonlyArray<any>>
>;
