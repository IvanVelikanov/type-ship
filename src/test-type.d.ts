/**
 * @file A test file.
 */

/**
 * @description A test type.
 * @template PartnerName A generic argument that will be used to name the partner being howdied.
 * @example
 * ```
 * const wrongValue: HowdyPartner<'Ivan'> = 'bye-bye partner Ivan!..' // TS-2322 ERROR
 * ```
 * ```
 * const correctValue: HowdyPartner<'Ivan'> = 'howdy partner Ivan!' // SUCCESS
 * ```
 */
export type HowdyPartner<PartnerName extends string> =
  `howdy partner ${PartnerName}!`;

/**
 * @example ```Does one thing or another```.
 * @description Testing the interface.
 */
export interface TestInterface {
  /**
   * Test.
   */
  readonly testPropertyOne: string;
}
