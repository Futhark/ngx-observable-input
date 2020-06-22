# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.2] - 2020-06-22

### Changed

- Fixed issue with multiple instances of same component having same value!

## [3.0.0] - 2020-06-05

### Changed

- [!] Changed the default behavior for not initialized `@Input` fields. Previously such a field was `undefined`. Now it is a valid `Observable` with initial value set by `@ObservableInput(defaultValue)` argument. It is a `Observable` of `undefined` if `defaultValue` argument is omited.

### Added

- Added examples in README.md file.

## [2.0.0] - 2019-12-04

### Changed

- [!] Added support for Angular AOT compiling. Now `ObservableInput` must be used **WITH** `@Input` decorator.
- Fixed examples in the README.md file.

### Added
- Added test project

## [1.0.0] - 2019-11-30

### Added

- Initial version
