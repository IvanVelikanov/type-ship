# Changelog

All notable changes to the project shall be documented here.

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
