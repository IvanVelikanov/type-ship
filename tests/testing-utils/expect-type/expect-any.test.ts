import type { ExpectAny } from '../../../src/testing-utils/expect-type/expect-any';

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

type ExpectAny_Any = ExpectAny<any>;

// @ts-expect-error
type ExpectAny_Never = ExpectAny<never>;
// @ts-expect-error
type ExpectAny_False = ExpectAny<false>;
// @ts-expect-error
type ExpectAny_True = ExpectAny<true>;
// @ts-expect-error
type ExpectAny_Boolean = ExpectAny<boolean>;
// @ts-expect-error
type ExpectAny_Unknown = ExpectAny<unknown>;
// @ts-expect-error
type ExpectAny_Void = ExpectAny<void>;
// @ts-expect-error
type ExpectAny_String = ExpectAny<string>;
// @ts-expect-error
type ExpectAny_StringLiteral = ExpectAny<'something'>;
// @ts-expect-error
type ExpectAny_Number = ExpectAny<number>;
// @ts-expect-error
type ExpectAny_NumberLiteral = ExpectAny<123>;
// @ts-expect-error
type ExpectAny_BigInt = ExpectAny<bigint>;
// @ts-expect-error
type ExpectAny_BigIntLiteral = ExpectAny<1111111111111111111111111111111n>;
// @ts-expect-error
type ExpectAny_Null = ExpectAny<null>;
// @ts-expect-error
type ExpectAny_Undefined = ExpectAny<undefined>;
// @ts-expect-error
type ExpectAny_Interface = ExpectAny<FooBarInterface>;
// @ts-expect-error
type ExpectAny_Type = ExpectAny<FooBarType>;
// @ts-expect-error
type ExpectAny_Array = ExpectAny<Array<false>>;
// @ts-expect-error
type ExpectAny_ReadonlyArray = ExpectAny<ReadonlyArray<false>>;
