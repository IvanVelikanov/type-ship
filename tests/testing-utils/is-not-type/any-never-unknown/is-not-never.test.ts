import type { IsNotNever } from '../../../../src/testing-utils/is-not-type/any-never-unknown/is-not-never';
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

type TestIsNotNever_Never = ExpectFalse<IsNotNever<never>>;

type TestIsNotNever_Any = ExpectTrue<IsNotNever<any>>;
type TestIsNotNever_Unknown = ExpectTrue<IsNotNever<unknown>>;
type TestIsNotNever_Void = ExpectTrue<IsNotNever<void>>;
type TestIsNotNever_String = ExpectTrue<IsNotNever<string>>;
type TestIsNotNever_StringLiteral = ExpectTrue<IsNotNever<'hello'>>;
type TestIsNotNever_Number = ExpectTrue<IsNotNever<number>>;
type TestIsNotNever_NumberLiteral = ExpectTrue<IsNotNever<123>>;
type TestIsNotNever_BigInt = ExpectTrue<IsNotNever<bigint>>;
type TestIsNotNever_BigIntLiteral = ExpectTrue<
  IsNotNever<123123123123123123123123n>
>;
type TestIsNotNever_Null = ExpectTrue<IsNotNever<null>>;
type TestIsNotNever_Undefined = ExpectTrue<IsNotNever<undefined>>;
type TestIsNotNever_Interface = ExpectTrue<IsNotNever<FooBarInterface>>;
type TestIsNotNever_Type = ExpectTrue<IsNotNever<FooBarType>>;
type TestIsNotNever_Array = ExpectTrue<IsNotNever<Array<any>>>;
type TestIsNotNever_ReadonlyArray = ExpectTrue<IsNotNever<ReadonlyArray<any>>>;
type TestIsNotNever_Boolean = ExpectTrue<IsNotNever<boolean>>;
type TestIsNotNever_True = ExpectTrue<IsNotNever<true>>;
type TestIsNotNever_False = ExpectTrue<IsNotNever<false>>;
