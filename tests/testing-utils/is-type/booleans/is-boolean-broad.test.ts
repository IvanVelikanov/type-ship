import type { IsBooleanBroad } from '../../../../src/testing-utils/is-type/booleans/is-boolean-broad';
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

type TestIsBooleanBroad_Boolean = ExpectTrue<IsBooleanBroad<boolean>>;
type TestIsBooleanBroad_TrueOrFalse = ExpectTrue<IsBooleanBroad<true | false>>;

type TestIsBooleanBroad_True = ExpectFalse<IsBooleanBroad<true>>;
type TestIsBooleanBroad_False = ExpectFalse<IsBooleanBroad<false>>;

type TestIsBooleanBroad_Any = ExpectFalse<IsBooleanBroad<any>>;
type TestIsBooleanBroad_Never = ExpectFalse<IsBooleanBroad<never>>;
type TestIsBooleanBroad_Unknown = ExpectFalse<IsBooleanBroad<unknown>>;
type TestIsBooleanBroad_Void = ExpectFalse<IsBooleanBroad<void>>;
type TestIsBooleanBroad_String = ExpectFalse<IsBooleanBroad<string>>;
type TestIsBooleanBroad_StringLiteral = ExpectFalse<IsBooleanBroad<'hello'>>;
type TestIsBooleanBroad_Number = ExpectFalse<IsBooleanBroad<number>>;
type TestIsBooleanBroad_NumberLiteral = ExpectFalse<IsBooleanBroad<123>>;
type TestIsBooleanBroad_BigInt = ExpectFalse<IsBooleanBroad<bigint>>;
type TestIsBooleanBroad_BigIntLiteral = ExpectFalse<
  IsBooleanBroad<123123123123123123123123n>
>;
type TestIsBooleanBroad_Null = ExpectFalse<IsBooleanBroad<null>>;
type TestIsBooleanBroad_Undefined = ExpectFalse<IsBooleanBroad<undefined>>;
type TestIsBooleanBroad_Interface = ExpectFalse<
  IsBooleanBroad<FooBarInterface>
>;
type TestIsBooleanBroad_Type = ExpectFalse<IsBooleanBroad<FooBarType>>;
type TestIsBooleanBroad_Array = ExpectFalse<IsBooleanBroad<Array<any>>>;
type TestIsBooleanBroad_ReadonlyArray = ExpectFalse<
  IsBooleanBroad<ReadonlyArray<any>>
>;
