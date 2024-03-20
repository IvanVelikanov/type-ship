import { IsNever } from '../../../src/testing-utils/is-type/is-never';

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

type TestIsNever_Never = IsNever<never>;

type TestIsNever_Any = IsNever<any>;
type TestIsNever_Unknown = IsNever<unknown>;
type TestIsNever_Void = IsNever<void>;
type TestIsNever_String = IsNever<string>;
type TestIsNever_StringLiteral = IsNever<'hello'>;
type TestIsNever_Number = IsNever<number>;
type TestIsNever_NumberLiteral = IsNever<123>;
type TestIsNever_BigInt = IsNever<bigint>;
type TestIsNever_BigIntLiteral = IsNever<123123123123123123123123n>;
type TestIsNever_Null = IsNever<null>;
type TestIsNever_Undefined = IsNever<undefined>;
type TestIsNever_Interface = IsNever<FooBarInterface>;
type TestIsNever_Type = IsNever<FooBarType>;
type TestIsNever_Array = IsNever<Array<any>>;
type TestIsNever_ReadonlyArray = IsNever<ReadonlyArray<any>>;
type TestIsNever_Boolean = IsNever<boolean>;
type TestIsNever_True = IsNever<true>;
type TestIsNever_False = IsNever<false>;
