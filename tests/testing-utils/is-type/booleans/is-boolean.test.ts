import type { IsBoolean } from '../../../../src/testing-utils/is-type/booleans/is-boolean';
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

type TestIsBoolean_Boolean = ExpectTrue<IsBoolean<boolean>>;
type TestIsBoolean_True = ExpectTrue<IsBoolean<true>>;
type TestIsBoolean_False = ExpectTrue<IsBoolean<false>>;
type TestIsBoolean_TrueOrFalse = ExpectTrue<IsBoolean<true | false>>;

type TestIsBoolean_Any = ExpectFalse<IsBoolean<any>>;
type TestIsBoolean_Never = ExpectFalse<IsBoolean<never>>;
type TestIsBoolean_Unknown = ExpectFalse<IsBoolean<unknown>>;
type TestIsBoolean_Void = ExpectFalse<IsBoolean<void>>;
type TestIsBoolean_String = ExpectFalse<IsBoolean<string>>;
type TestIsBoolean_StringLiteral = ExpectFalse<IsBoolean<'hello'>>;
type TestIsBoolean_Number = ExpectFalse<IsBoolean<number>>;
type TestIsBoolean_NumberLiteral = ExpectFalse<IsBoolean<123>>;
type TestIsBoolean_BigInt = ExpectFalse<IsBoolean<bigint>>;
type TestIsBoolean_BigIntLiteral = ExpectFalse<
  IsBoolean<123123123123123123123123n>
>;
type TestIsBoolean_Null = ExpectFalse<IsBoolean<null>>;
type TestIsBoolean_Undefined = ExpectFalse<IsBoolean<undefined>>;
type TestIsBoolean_Interface = ExpectFalse<IsBoolean<FooBarInterface>>;
type TestIsBoolean_Type = ExpectFalse<IsBoolean<FooBarType>>;
type TestIsBoolean_Array = ExpectFalse<IsBoolean<Array<any>>>;
type TestIsBoolean_ReadonlyArray = ExpectFalse<IsBoolean<ReadonlyArray<any>>>;
