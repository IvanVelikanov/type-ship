/**
 * @file IfNot type factory is used to create other, more specific IfNotType types.
 */

/**
 * @template Condition The boolean condition against which the If statement checks.
 * @template IfTrue The resulting type if `Condition` extends `false`. Default: `true`.
 * @template IfFalse The resulting type if `Condition` extends `true`. Default: `false`.
 * @description IfNot type factory is used to create other, more specific IfNotType types.
 * @example Example.
 */
export type IfNot<
  Condition extends boolean,
  IfTrue = true,
  IfFalse = false
> = Condition extends false ? IfTrue : IfFalse;
