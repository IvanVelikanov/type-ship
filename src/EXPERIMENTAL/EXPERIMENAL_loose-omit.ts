import type { EmptyObject } from '../helpers/empty-object';
import type { LooseAutocomplete } from '../helpers/loose-autocomplete';
import type { LooseOmit } from '../loose-builtins/loose-omit';

type Stringifiable = string | number | bigint | boolean | null | undefined;

type StringAndNumberToString<Value extends Stringifiable> = `${Value}`;

/**
 * @summary DO NOT USE IT. Or do. Who am I to tell you what to do. Just beware that it might and most certainly WILL be changed or removed at any random point in the near or distant future. You've been warned. Thanks for reading this far, by the way! From the bottom of my heart, I wish you the best in all your endeavors, whoever or wherever you may be! Take care of yourself, fellow developer!..
 * @description An attempt to fix Issue #4 from {@link LooseOmit}.
 */
export type EXPERIMENTAL_LooseOmit<
  ObjectLike extends Record<string | number, any>,
  KeysUnion extends LooseAutocomplete<
    keyof ObjectLike extends number | string
      ? StringAndNumberToString<keyof ObjectLike>
      : keyof ObjectLike extends PropertyKey
      ? keyof ObjectLike
      : PropertyKey,
    PropertyKey
  >,
  ExpectedResult extends Omit<
    ObjectLike,
    KeysUnion extends PropertyKey ? KeysUnion : PropertyKey
  > = Omit<ObjectLike, KeysUnion extends PropertyKey ? KeysUnion : PropertyKey>
> = ExpectedResult extends EmptyObject ? EmptyObject : ExpectedResult;

interface TestInterface {
  id: number;
  name: string;
  age: number;
  0: number;
  12345678901234567890: string;
  123456789012345678901234567890: string;
}

type Test = EXPERIMENTAL_LooseOmit<
  TestInterface,
  '12345678901234567000' | '1.2345678901234568e+29'
>;
