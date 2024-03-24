import type { ExpectNever } from '../../../../src/testing-utils/expect-type/any-never-unknown/expect-never';

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

type ExpectNever_Never = ExpectNever<never>;

// @ts-expect-error
type ExpectNever_False = ExpectNever<false>;
// @ts-expect-error
type ExpectNever_True = ExpectNever<true>;
// @ts-expect-error
type ExpectNever_Boolean = ExpectNever<boolean>;
// @ts-expect-error
type ExpectNever_Any = ExpectNever<any>;
// @ts-expect-error
type ExpectNever_Unknown = ExpectNever<unknown>;
// @ts-expect-error
type ExpectNever_Void = ExpectNever<void>;
// @ts-expect-error
type ExpectNever_String = ExpectNever<string>;
// @ts-expect-error
type ExpectNever_StringLiteral = ExpectNever<'something'>;
// @ts-expect-error
type ExpectNever_Number = ExpectNever<number>;
// @ts-expect-error
type ExpectNever_NumberLiteral = ExpectNever<123>;
// @ts-expect-error
type ExpectNever_BigInt = ExpectNever<bigint>;
// @ts-expect-error
type ExpectNever_BigIntLiteral = ExpectNever<1111111111111111111111111111111n>;
// @ts-expect-error
type ExpectNever_Null = ExpectNever<null>;
// @ts-expect-error
type ExpectNever_Undefined = ExpectNever<undefined>;
// @ts-expect-error
type ExpectNever_Interface = ExpectNever<FooBarInterface>;
// @ts-expect-error
type ExpectNever_Type = ExpectNever<FooBarType>;
// @ts-expect-error
type ExpectNever_Array = ExpectNever<Array<false>>;
// @ts-expect-error
type ExpectNever_ReadonlyArray = ExpectNever<ReadonlyArray<false>>;
