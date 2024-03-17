/**
 * @file Identical to {@link Replicate} but only works with object-like types.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { Replicate } from './replicate';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for LooseOmit should come after this line. */

import type { ReturnObjectLikeOrNever } from './return-object-like-or-never';

/**
 * @summary Identical to {@link Replicate} but only works with object-like types.
 * @template ObjectLike The object-like type or interface to be replicated.
 * @template ObjectLikeHelper An internal helper. DO NOT CHANGE.
 * @description Takes a type and replicates its contents. (Better description will be provided once the SelectivePartial type is implemented).
 * @example // Example will be provided once the SelectivePartial type is implemented.
 * @todo
 *
 * **Issue #1:**
 *
 * Implement SelectivePartial to illustrate an example :).
 *
 * **Issue #2:**
 *
 * It irks me to no end how silly the insides of this type look.
 * Matter of fact, the same issue will plague any other type that
 * will use {@link ReturnObjectLikeOrNever} under the hood for reasons explained in that type's `@todo`. There's gotta be a better way.
 * Functionally though, it works exactly as it should --
 * nevertheless, the aesthetic side of things should not be ignored
 * lest we suffer the fate of lazy, ugly and boring pragmatism.
 * @see
 * Types used under the hood:
 * - Helpers: {@link ReturnObjectLikeOrNever}.
 */
export type ReplicateObject<
  ObjectLike extends ReturnObjectLikeOrNever<ObjectLikeHelper>,
  ObjectLikeHelper extends object = ReturnObjectLikeOrNever<ObjectLike>
> = {
  [Key in keyof ObjectLikeHelper]: ObjectLikeHelper[Key];
};
