/**
 * @file Shorthand for the three basic types allowed for object keys (string | number | symbol).
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Needs to be here for the JSDoc @link tags to work correctly. I wonder if there's a more elegant approach though... */
import type { EmptyObject } from './empty-object';
import type { StrictOmit } from '../strict-builtins/strict-omit';
/* eslint-enable @typescript-eslint/no-unused-vars -- Any *real* imports (those not used for the sake of JSDoc) should come after this line */

/**
 * @description Shorthand for the three basic types allowed for object keys (string | number | symbol).
 * @example
 * Record<ObjectKeyTypes, string>
 * @see
 * Used internally in: {@link StrictOmit}, {@link EmptyObject}.
 */
export type ObjectKeyTypes = string | number | symbol;
