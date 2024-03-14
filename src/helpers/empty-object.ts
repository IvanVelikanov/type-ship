/**
 * @file Shorthand for the empty object type.
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Needs to be here for the JSDoc @link tags to work correctly. I wonder if there's a more elegant approach though...
import type { StrictOmit } from '../strict-builtins/strict-omit';

/**
 * @description { } is often erroneously used to mean 'empty object', when in fact it holds almost the opposite meaning: 'any non-nullish value'.
 *
 * This type is used when a true empty object type is needed.
 * @example
 * ```
 * import { EmptyObject } from 'type-ship';
 *
 * const emptyObject: EmptyObject = {};
 * emptyObject.newProperty = 'something'; // ERROR (TS-2322 - Type 'string' is not assignable to type 'never'.)
 * ```
 * @see {@link https://typescript.tv/errors/#ts2344 TS-2322}
 * @see
 * Used internally in: {@link StrictOmit}.
 */
export type EmptyObject = Record<PropertyKey, never>;
