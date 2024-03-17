/**
 * @file A type that replicates the contents of another type
 * and simplifies them, so to speak.
 */

/**
 * @description Takes a type and replicates its contents.
 * @template T Absolutely anything can go in here.
 * @example // Example will be provided once the SelectivePartial type is implemented.
 * @todo Implement SelectivePartial to illustrate an example :).
 */
export type Replicate<T> = {
  [Key in keyof T]: T[Key];
};
