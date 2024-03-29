# Changelog

All notable changes to the project shall be documented here.

## 0.18.0 - 2024-03-28

### Added

- IfBoolean type.
- IfBooleanBroad type.
- IfBooleanLiteral type.
- IfTrue type.
- IfFalse type.

### Changed

- ExpectBoolean type to use IfBoolean instead of IsBoolean under the hood.
- ExpectBooleanBroad type to use IfBooleanBroad instead of IsBooleanBroad under the hood.
- ExpectBooleanLiteral type to use IfBooleanLiteral instead of IsBooleanLiteral under the hood.
- ExpectTrue type to use IfTrue instead of IsTrue under the hood.
- ExpectFalse type to use IfFalse instead of IsFalse under the hood.

## 0.17.0 - 2024-03-27

### Changed

- Modified ExpectType and ExpectNotType types (except for booleans, as the If and IfNot types for them haven't been createt as of yet) to use If and IfNot types under the hood instead of Is and IsNot types.
- Modified ExpectType and ExpectNotType types so that - on meeting the expected condition - instead of returning true, the passed type is returned.

## 0.16.1 - 2024-03-27

### Changed

- Simplified syntax for IsBoolean type and updated its JSDoc.
- Simplified syntax for IsBooleanBroad type and updated its JSDoc.
- Simplified syntax for IsBooleanLiteral type and updated its JSDoc.
- Simplified syntax for IsTrue type and updated its JSDoc.
- Simplified syntax for IsFalse type and updated its JSDoc.
- Updated JSDoc for IsAny type.
- Updated JSDoc for IsNever type.
- Updated JSDoc for IsUnknown type.
- Updated JSDoc for IsAnyOrNeverOrUnknown type.
- Updated JSDoc for IsNotAny type.
- Updated JSDoc for IsNotNever type.
- Updated JSDoc for IsNotUnknown type.
- Updated JSDoc for IsNotAnyOrNeverOrUnknown type.
- Updated JSDoc for If type.
- Updated JSDoc for IfAny type.
- Updated JSDoc for IfNever type.
- Updated JSDoc for IfUnknown type.
- Updated JSDoc for IfAnyOrNeverOrUnknown type.
- Updated JSDoc for IfNot type.
- Updated JSDoc for IfNotAny type.
- Updated JSDoc for IfNotNever type.
- Updated JSDoc for IfNotUnknown type.
- Updated JSDoc for IfNotAnyOrNeverOrUnknown type.

## 0.16.0 - 2024-03-27

### Added

- IfNot type.
- IfNotAny type.
- IfNotNever type.
- IfNotUnknown type.
- IfNotAnyOrNeverOrUnknown type.

## 0.15.0 - 2024-03-26

### Added

- If type.
- IfAny type.
- IfNever type.
- IfUnknown type.
- IfAnyOrNeverOrUnknown type.

## 0.14.0 - 2024-03-25

### Added

- IsNotAny type.
- ExpectNotAny type.
- IsNotNever type.
- ExpectNotNever type.
- IsNotUnknown type.
- ExpectNotUnknown type.
- IsNotAnyOrNeverOrUnknown type.
- ExpectNotAnyOrNeverOrUnknown type.

### Tested

- IsNotAny type.
- ExpectNotAny type.
- IsNotNever type.
- ExpectNotNever type.
- IsNotUnknown type.
- ExpectNotUnknown type.
- IsNotAnyOrNeverOrUnknown type.
- ExpectNotAnyOrNeverOrUnknown type.

### Fixed

- Some errors in JSDoc descriptions for IsType and ExpectType types.

## 0.13.0 - 2024-03-24

### Added

- IsAnyOrNeverOrUnknown type.
- ExpectAnyOrNeverOrUnknown type.

### Tested

- IsAnyOrNeverOrUnknown type.
- ExpectAnyOrNeverOrUnknown type.

## 0.12.0 - 2024-03-23

### Added

- IsBoolean type.
- ExpectBoolean type.
- IsBooleanBroad type.
- ExpectBooleanBroad type.
- IsBooleanLiteral type.
- ExpectBooleanLiteral type.

### Tested

- IsBoolean type.
- ExpectBoolean type.
- IsBooleanBroad type.
- ExpectBooleanBroad type.
- IsBooleanLiteral type.
- ExpectBooleanLiteral type.

## 0.11.0 - 2024-03-22

### Added

- ExpectNever type.
- ExpectAny type.
- ExpectUnknown type.

### Tested

- ExpectNever type.
- ExpectAny type.
- ExpectUnknown type.

## 0.10.1 - 2024-03-21

### Removed

- Export for IsNeverHelper type.

## 0.10.0 - 2024-03-21

### Added

- ExpectTrue type.
- IsUnknown type.

### Tested

- ExpectTrue type.
- IsAny type.
- IsFalse type.
- IsNever type.
- IsTrue type.
- IsUnknown type.

### Changed

- Implementation of ExpectFalse type.

## 0.9.1 - 2024-03-20

### Added

- TODOs.md to track planned change.
- IsTrue type.
- IsFalse type.
- IsNever type.
- IsAny type.
- ExpectFalse type.

### Tested

## 0.9.0 - 2024-03-20

### Added

- TODOs.md to track planned change.
- IsTrue type.
- IsFalse type.
- IsNever type.
- IsAny type.
- ExpectFalse type.

### Tested

- ExpectFalse type.

## 0.8.0 - 2024-03-19

### Added

- LooseExclude type (looser version of StrictExclude; opposite of LooseExtract).
- LooseExtract type (looser version of StrictExtract; opposite of LooseExclude).

## 0.7.1 - 2024-03-18

### Fixed

- Issue where Arrays could be passed to Strict and Loose varieties of Pick and Omit (Issue #2 in StrictPick and LoosePick; Issue #3 in StrictOmit and LooseOmit).

## 0.7.0 - 2024-03-17

### Added

- Replicate type.
- ReplicateObject type.
- ReturnObjectLikeOrNever type.

## 0.6.0 - 2024-03-16

### Added

- LoosePick type (looser version of StrictPick; opposite of LooseOmit).

## 0.5.0 - 2024-03-15

### Added

- LooseOmit type (looser version of StrictOmit).
- EXPERIMENTAL_LooseOmit type (an attempt to fix certain issues with LooseOmit and StrictOmit -- see Issue #4 in these types' JSDocs for more info).
- LooseAutocomplete type (primarily as a helper for LooseOmit and EXPERIMENTAL_LooseOmit -- although it has other uses too).

## 0.4.0 - 2024-03-14

### Added

- StrictPick type (opposite of StrictOmit).

## 0.3.2 - 2024-03-14

### Removed

- ObjectKeyTypes type in favor of the built-in PropertyKey type.

## 0.3.1 - 2024-03-13

### Fixed

- StrictExtract export issue.

## 0.3.0 - 2024-03-13

### Added

- StrictExtract type (opposite of StrictExclude).

## 0.2.1 - 2024-03-13

### Changed

- .d.ts extensions to .ts.

## 0.2.0 - 2024-03-13

### Added

- StrictExclude type.

### Changed

- Add Issue #2 to the StrictOmit type: for the time being, it may not work correctly with Sets or Maps.

## 0.1.0 - 2024-03-12

### Added

- StrictOmit type.
- ObjectKeyTypes type.
- EmptyObject type.

### Removed

- HowdyPartner test type.

## 0.0.2 - 2024-03-12

### Added

- tsconfig in strict mode.
- Linting rules.

### Changed

- Apply JSDoc to the test types.

## 0.0.1 - 2024-03-11

### Added

- MIT LICENSE.
- README.
- A test type.
- An entry point for the lib (index.d.ts).
