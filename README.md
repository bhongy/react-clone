## Running tests

Run `yarn jest` from either root of within a package.

## TODO

- [ ] setup babel with typescript to "build" projects (do not use `tsc -b`)
  - [ ] update package.json { main, types } to the `lib`
  - [ ] setup path mapping and have babel rewrite it
  - [ ] `tsc` always use `noEmit` so it's only typechecking (or just rely on IDE)
