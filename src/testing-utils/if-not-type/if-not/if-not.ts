/**
 * @file IfNot type factory is used to create other, more specific IfNotType types.
 */

/**
 * @description IfNot type factory is used to create other, more specific IfNotType types.
 * @example Example.
 */
export type IfNot<
  Condition extends boolean,
  IfTrue = true,
  IfFalse = false
> = Condition extends false ? IfTrue : IfFalse;
