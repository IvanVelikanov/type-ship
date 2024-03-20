// import type { ExpectTrue } from '../../../src/testing-utils/expect-type/expect-true';

// export type TestTrue = ExpectTrue<true>;

// // @ts-expect-error
// export type TestFalse = ExpectTrue<false>;

// // @ts-expect-error
// export type TestAny = ExpectTrue<any>;

// // @ts-expect-error
// export type TestNever = ExpectTrue<never>;

// interface IdOnly {
//   id: string;
// }

// interface NameAndid extends IdOnly {
//   name: string;
// }

type TestZeroExtends = never extends any ? true : false;

export type IsAny<T> = 'something' extends number & T ? true : false;

export type IsNeverHelper<T> = IsAny<T> extends true
  ? false
  : T extends never
  ? true
  : false;

type Test = Extract<>;

export type IsNever<T> = IsNeverHelper<T> extends never ? true : false;

export type IsTrue<T> = IsAny<T> extends true
  ? false
  : IsNever<T> extends true
  ? false
  : T extends true
  ? true
  : false;

export type IsTypeFactory<T, K> = IsAny<T> extends K
  ? false
  : IsNever<T> extends K
  ? false
  : T extends K
  ? K
  : false;

export type ExpectTrue<T extends IsAny<T> extends true ? never : true> =
  IsTrue<T> extends true ? true : never;

type TestTrue = IsTrue<true>;

type TestFalse = IsTrue<false>;

type TestString = IsTrue<string>;

type TestStringLiteral = IsTrue<'asddasdas'>;

type TestAny = IsTrue<any>;

type TestNEver = IsTrue<never>;

type TestUnknown = IsTrue<unknown>;

type TestVoid = IsTrue<void>;

type IsStringLiteral<T> = T extends string
  ? string extends T
    ? false
    : true
  : false;

type TESTME = IsStringLiteral<string>;

/////

export type TestExpectTrue = ExpectTrue<true>;

export type TestExpectFalse = ExpectTrue<false>;

export type TestExpectString = ExpectTrue<string>;

export type TestExpectStringLiteral = ExpectTrue<'asddasdas'>;

export type TestExpectAny = ExpectTrue<any>;

export type TestExpectNEver = ExpectTrue<never>;

export type TestExpectUnknown = ExpectTrue<unknown>;

export type TestExpectVoid = ExpectTrue<void>;

// type TestIsAnyAny = IsAny<any>;
// type TestIsAnyString = IsAny<string>;
// type TestIsAnyBoolean = IsAny<true>;
// type TestIsAnyNumber = IsAny<12321323>;
// type TestIsAnyNever = IsAny<never>;
// type TestIsAnyUnknown = IsAny<unknown>;

// type UnionTest = any & 1;

// type TestNeverAny = IsNever<any>;
// type TestNeverString = IsNever<string>;
// type TestNeverNumber = IsNever<number>;
// type TestNeverNever = IsNever<never>;
