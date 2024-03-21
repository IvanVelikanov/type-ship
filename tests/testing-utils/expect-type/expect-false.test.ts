import type { ExpectFalse } from '../../../src/testing-utils/expect-type/expect-false';

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

type ExpectFalse_False = ExpectFalse<false>;

// @ts-expect-error
type ExpectFalse_True = ExpectFalse<true>;
// @ts-expect-error
type ExpectFalse_Boolean = ExpectFalse<boolean>;
// @ts-expect-error
type ExpectFalse_Any = ExpectFalse<any>;
// @ts-expect-error: Seems like there isn't a way to make this test pass due to the nature of `never`.
export type ExpectFalse_Never = ExpectFalse<never>;
// @ts-expect-error
type ExpectFalse_Unknown = ExpectFalse<unknown>;
// @ts-expect-error
type ExpectFalse_Void = ExpectFalse<void>;
// @ts-expect-error
type ExpectFalse_String = ExpectFalse<string>;
// @ts-expect-error
type ExpectFalse_StringLiteral = ExpectFalse<'something'>;
// @ts-expect-error
type ExpectFalse_Number = ExpectFalse<number>;
// @ts-expect-error
type ExpectFalse_NumberLiteral = ExpectFalse<123>;
// @ts-expect-error
type ExpectFalse_BigInt = ExpectFalse<bigint>;
// @ts-expect-error
type ExpectFalse_BigIntLiteral = ExpectFalse<1111111111111111111111111111111n>;
// @ts-expect-error
type ExpectFalse_Null = ExpectFalse<null>;
// @ts-expect-error
type ExpectFalse_Undefined = ExpectFalse<undefined>;
// @ts-expect-error
type ExpectFalse_Interface = ExpectFalse<FooBarInterface>;
// @ts-expect-error
type ExpectFalse_Type = ExpectFalse<FooBarType>;
// @ts-expect-error
type ExpectFalse_Array = ExpectFalse<Array<false>>;
// @ts-expect-error
type ExpectFalse_ReadonlyArray = ExpectFalse<ReadonlyArray<false>>;
