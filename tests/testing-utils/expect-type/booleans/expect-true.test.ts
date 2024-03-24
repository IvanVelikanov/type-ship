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

type ExpectTrue_True = ExpectTrue<true>;

// @ts-expect-error
type ExpectTrue_False = ExpectTrue<false>;
// @ts-expect-error
type ExpectTrue_Boolean = ExpectTrue<boolean>;
// @ts-expect-error
type ExpectTrue_Any = ExpectTrue<any>;
// @ts-expect-error: Seems like there isn't a way to make this test pass due to the nature of `never`.
export type ExpectTrue_Never = ExpectTrue<never>;
// @ts-expect-error
type ExpectTrue_Unknown = ExpectTrue<unknown>;
// @ts-expect-error
type ExpectTrue_Void = ExpectTrue<void>;
// @ts-expect-error
type ExpectTrue_String = ExpectTrue<string>;
// @ts-expect-error
type ExpectTrue_StringLiteral = ExpectTrue<'something'>;
// @ts-expect-error
type ExpectTrue_Number = ExpectTrue<number>;
// @ts-expect-error
type ExpectTrue_NumberLiteral = ExpectTrue<123>;
// @ts-expect-error
type ExpectTrue_BigInt = ExpectTrue<bigint>;
// @ts-expect-error
type ExpectTrue_BigIntLiteral = ExpectTrue<1111111111111111111111111111111n>;
// @ts-expect-error
type ExpectTrue_Null = ExpectTrue<null>;
// @ts-expect-error
type ExpectTrue_Undefined = ExpectTrue<undefined>;
// @ts-expect-error
type ExpectTrue_Interface = ExpectTrue<FooBarInterface>;
// @ts-expect-error
type ExpectTrue_Type = ExpectTrue<FooBarType>;
// @ts-expect-error
type ExpectTrue_Array = ExpectTrue<Array<false>>;
// @ts-expect-error
type ExpectTrue_ReadonlyArray = ExpectTrue<ReadonlyArray<false>>;
