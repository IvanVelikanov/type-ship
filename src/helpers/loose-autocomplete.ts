/**
 * @file Loose autocomplete is used when any string or string | number | symbol can be assigned to a value,
 * but a particular subset of strings or string | number | symbol are needed for autocomplete.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import { LooseOmit } from '../loose-builtins/loose-omit';
import type { EXPERIMENTAL_LooseOmit } from '../EXPERIMENTAL/EXPERIMENAL_loose-omit';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for StrictOmit should come after this line. */

/**
 * @summary Type that allows a value to be any `string` or any `string | number | symbol` but provides loose autocomplete for a selected set of values.
 * @template Union A union of either `string`'s or `string | number | symbol`'s to be used for autocomplete, based on the `AutocompleteType`.
 * @template AutocompleteType For proper autocomplete, should be string (the default), except for the one case where this being used in {@link LooseOmit}.
 * @description
 * **Use-cases**:
 * - 1. Useful in scenarios where a particular set of keys is expected but in actuality, any number of keys is possible.
 * Validating with LooseAutocomplete is safer in this case, as it makes no assumptions about the possible values but
 * provides autocomplete for better DX.
 * - 2. In {@link LooseOmit}.
 * @example
 * ```
 * import { LooseAutocomplete } from 'type-ship';
 *
 * type FooBar = LooseAutocomplete<'foo', 'bar'>
 *
 * const test: FooBar = 'hello!'
 *                   // ^ No TS errors but provides 'foo' and 'bar' in the dropdown for autocomplete.
 * ```
 * @see
 * Types used under the hood:
 * - TS built-in Utilities: {@link Omit}, {@link PropertyKey}.
 * @see
 * Used internally in:
 * - EXPERIMENTAL: {@link EXPERIMENTAL_LooseOmit};
 * - Loose Built-Ins: {@link LooseOmit}.
 */
export type LooseAutocomplete<
  Union extends AutocompleteType,
  AutocompleteType extends PropertyKey = string
> = Union | Omit<Union, AutocompleteType>;
