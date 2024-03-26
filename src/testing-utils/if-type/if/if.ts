/**
 * @file If type factory is used to create other, more specific IfType types.
 */

/**
 * @description If type factory is used to create other, more specific IfType types.
 * @example Example.
 */
export type If<
  Condition extends boolean,
  IfTrue = true,
  IfFalse = false
> = Condition extends true ? IfTrue : IfFalse;
