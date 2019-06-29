## Running tests

Tests cannot be run from the root. `cd` into a specific package and run tests from the package root.

## TODO

- [ ] setup babel with typescript to "build" projects (do not use `tsc -b`)
  - [ ] update package.json { main, types } to the `lib`
  - [ ] setup path mapping and have babel rewrite it
  - [ ] `tsc` always use `noEmit` so it's only typechecking (or just rely on IDE)
