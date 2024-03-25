import type { IsNotAny } from '../../../../src/testing-utils/is-not-type/any-never-unknown/is-not-any';
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

type TestIsNotAny_Any = ExpectFalse<IsNotAny<any>>;

type TestIsNotAny_Never = ExpectTrue<IsNotAny<never>>;
type TestIsNotAny_Unknown = ExpectTrue<IsNotAny<unknown>>;
type TestIsNotAny_Void = ExpectTrue<IsNotAny<void>>;
type TestIsNotAny_String = ExpectTrue<IsNotAny<string>>;
type TestIsNotAny_StringLiteral = ExpectTrue<IsNotAny<'hello'>>;
type TestIsNotAny_Number = ExpectTrue<IsNotAny<number>>;
type TestIsNotAny_NumberLiteral = ExpectTrue<IsNotAny<123>>;
type TestIsNotAny_BigInt = ExpectTrue<IsNotAny<bigint>>;
type TestIsNotAny_BigIntLiteral = ExpectTrue<
  IsNotAny<123123123123123123123123n>
>;
type TestIsNotAny_Null = ExpectTrue<IsNotAny<null>>;
type TestIsNotAny_Undefined = ExpectTrue<IsNotAny<undefined>>;
type TestIsNotAny_Interface = ExpectTrue<IsNotAny<FooBarInterface>>;
type TestIsNotAny_Type = ExpectTrue<IsNotAny<FooBarType>>;
type TestIsNotAny_Array = ExpectTrue<IsNotAny<Array<any>>>;
type TestIsNotAny_ReadonlyArray = ExpectTrue<IsNotAny<ReadonlyArray<any>>>;
type TestIsNotAny_Boolean = ExpectTrue<IsNotAny<boolean>>;
type TestIsNotAny_True = ExpectTrue<IsNotAny<true>>;
type TestIsNotAny_False = ExpectTrue<IsNotAny<false>>;
