import type { IsNever } from '../../../src/testing-utils/is-type/is-never';
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

type TestIsNever_Never = ExpectTrue<IsNever<never>>;

type TestIsNever_Any = ExpectFalse<IsNever<any>>;
type TestIsNever_Unknown = ExpectFalse<IsNever<unknown>>;
type TestIsNever_Void = ExpectFalse<IsNever<void>>;
type TestIsNever_String = ExpectFalse<IsNever<string>>;
type TestIsNever_StringLiteral = ExpectFalse<IsNever<'hello'>>;
type TestIsNever_Number = ExpectFalse<IsNever<number>>;
type TestIsNever_NumberLiteral = ExpectFalse<IsNever<123>>;
type TestIsNever_BigInt = ExpectFalse<IsNever<bigint>>;
type TestIsNever_BigIntLiteral = ExpectFalse<
  IsNever<123123123123123123123123n>
>;
type TestIsNever_Null = ExpectFalse<IsNever<null>>;
type TestIsNever_Undefined = ExpectFalse<IsNever<undefined>>;
type TestIsNever_Interface = ExpectFalse<IsNever<FooBarInterface>>;
type TestIsNever_Type = ExpectFalse<IsNever<FooBarType>>;
type TestIsNever_Array = ExpectFalse<IsNever<Array<any>>>;
type TestIsNever_ReadonlyArray = ExpectFalse<IsNever<ReadonlyArray<any>>>;
type TestIsNever_Boolean = ExpectFalse<IsNever<boolean>>;
type TestIsNever_True = ExpectFalse<IsNever<true>>;
type TestIsNever_False = ExpectFalse<IsNever<false>>;
