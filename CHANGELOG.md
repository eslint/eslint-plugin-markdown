# Changelog

## [6.0.0](https://github.com/eslint/markdown/compare/v5.1.0...v6.0.0) (2024-08-05)


### ⚠ BREAKING CHANGES

* Rename to @eslint/markdown ([#265](https://github.com/eslint/markdown/issues/265))
* Convert to ESM ([#259](https://github.com/eslint/markdown/issues/259))

### Features

* Add type checking and type definitions ([#266](https://github.com/eslint/markdown/issues/266)) ([0503748](https://github.com/eslint/markdown/commit/0503748497e623842b8c78b140b766a086ee2ce7))
* Convert to ESM ([#259](https://github.com/eslint/markdown/issues/259)) ([e0da221](https://github.com/eslint/markdown/commit/e0da2214cc06fd441def1844135f3c9fef74e940))
* Rename to @eslint/markdown ([#265](https://github.com/eslint/markdown/issues/265)) ([e0b5457](https://github.com/eslint/markdown/commit/e0b545708c051e605b438f9cddde8dad3ec24c6e))

## [5.1.0](https://github.com/eslint/eslint-plugin-markdown/compare/v5.0.0...v5.1.0) (2024-07-05)


### Features

* add name to flat configs ([#256](https://github.com/eslint/eslint-plugin-markdown/issues/256)) ([001d51e](https://github.com/eslint/eslint-plugin-markdown/commit/001d51e9a66bea80f0c971f05a9cf4e1126dfaa8))

## [5.0.0](https://github.com/eslint/eslint-plugin-markdown/compare/v4.0.1...v5.0.0) (2024-05-01)


### ⚠ BREAKING CHANGES

* map known code block languages to respective file extensions ([#246](https://github.com/eslint/eslint-plugin-markdown/issues/246))

### Features

* map known code block languages to respective file extensions ([#246](https://github.com/eslint/eslint-plugin-markdown/issues/246)) ([096cff4](https://github.com/eslint/eslint-plugin-markdown/commit/096cff4094dc9118a3538980ee56bfb8c5cb03d4))


### Bug Fixes

* check upper bounds of message line numbers for code blocks ([#247](https://github.com/eslint/eslint-plugin-markdown/issues/247)) ([00adccb](https://github.com/eslint/eslint-plugin-markdown/commit/00adccb49ed74e6b6ce43bc221a93d7c6782a83c))


### Chores

* run tests in Node.js 22, with ESLint 9 ([#250](https://github.com/eslint/eslint-plugin-markdown/issues/250)) ([085e6d5](https://github.com/eslint/eslint-plugin-markdown/commit/085e6d59737e22566d99ee1d09affdd1e2460112))
* switch to eslint v9, eslint-config-eslint v10 ([#251](https://github.com/eslint/eslint-plugin-markdown/issues/251)) ([a76cdf5](https://github.com/eslint/eslint-plugin-markdown/commit/a76cdf53cb9d4cb27f53cfec9da960aea3997724))

## [4.0.1](https://github.com/eslint/eslint-plugin-markdown/compare/v4.0.0...v4.0.1) (2024-03-06)


### Chores

* update changelog with note that v4.0.0 was not published to npm ([#241](https://github.com/eslint/eslint-plugin-markdown/issues/241)) ([e80139d](https://github.com/eslint/eslint-plugin-markdown/commit/e80139da3f8be9179469a015e8345b460537e958))

## [4.0.0](https://github.com/eslint/eslint-plugin-markdown/compare/v3.0.1...v4.0.0) (2024-03-01)

⚠️ This release was not published to npm due to technical problems.

### ⚠ BREAKING CHANGES

* drop eslint < 8 & Node.js < 18 ([#238](https://github.com/eslint/eslint-plugin-markdown/issues/238))
* Switch to flat config ([#232](https://github.com/eslint/eslint-plugin-markdown/issues/232))

### Features

* add `meta` property ([#233](https://github.com/eslint/eslint-plugin-markdown/issues/233)) ([eedda96](https://github.com/eslint/eslint-plugin-markdown/commit/eedda967069a665b800fcf95b985424e50c77df6))
* drop eslint &lt; 8 & Node.js < 18 ([#238](https://github.com/eslint/eslint-plugin-markdown/issues/238)) ([f14f6a5](https://github.com/eslint/eslint-plugin-markdown/commit/f14f6a58ffe65cee8c31beb6d8ff8bcc1ae81383))
* Switch to flat config ([#232](https://github.com/eslint/eslint-plugin-markdown/issues/232)) ([7a27eef](https://github.com/eslint/eslint-plugin-markdown/commit/7a27eef394dbc06f24b16d926946d60accb2d4c7))


### Documentation

* fix expected errors in react example ([#237](https://github.com/eslint/eslint-plugin-markdown/issues/237)) ([a758163](https://github.com/eslint/eslint-plugin-markdown/commit/a758163a05c8ff79fa6a67d907f6a6ae07f55b90))


### Chores

* add `.vscode` to `.gitignore` ([#236](https://github.com/eslint/eslint-plugin-markdown/issues/236)) ([cbb8e3a](https://github.com/eslint/eslint-plugin-markdown/commit/cbb8e3afc665d314570a9b087c7cef2e97d45860))
* bump setup-node and checkout actions to v4 in release workflow ([#239](https://github.com/eslint/eslint-plugin-markdown/issues/239)) ([3fd99ad](https://github.com/eslint/eslint-plugin-markdown/commit/3fd99ad0a3787f2ce28b5eb74f5fc197974b0ede))
* remove unused `@eslint/eslintrc` in test examples ([#234](https://github.com/eslint/eslint-plugin-markdown/issues/234)) ([4e2e160](https://github.com/eslint/eslint-plugin-markdown/commit/4e2e160e267b5bce91d2ec2795d6b0f13c7ea62c))
* run tests in Node.js 21 ([#225](https://github.com/eslint/eslint-plugin-markdown/issues/225)) ([4d9f36f](https://github.com/eslint/eslint-plugin-markdown/commit/4d9f36f5c5fd1b5d3b1957913118cd76a92750f2))
* standardize npm script names ([#223](https://github.com/eslint/eslint-plugin-markdown/issues/223)) ([6bdff60](https://github.com/eslint/eslint-plugin-markdown/commit/6bdff605b1d2793f9b20ec9cbadb5c55dbcb783a))
* use latest `typescript-eslint` in examples ([#235](https://github.com/eslint/eslint-plugin-markdown/issues/235)) ([313959b](https://github.com/eslint/eslint-plugin-markdown/commit/313959bcaf1613a60fc60a42c52b78146934eae2))

## [3.0.1](https://github.com/eslint/eslint-plugin-markdown/compare/v3.0.0...v3.0.1) (2023-07-15)


### Chores

* add Node v19 ([#212](https://github.com/eslint/eslint-plugin-markdown/issues/212)) ([81ff967](https://github.com/eslint/eslint-plugin-markdown/commit/81ff967a325608e44b7bb467f8359ab620528dac))
* add triage action ([#213](https://github.com/eslint/eslint-plugin-markdown/issues/213)) ([ef7dcdc](https://github.com/eslint/eslint-plugin-markdown/commit/ef7dcdccfb94ac7e657a6c66998ce8831f3e58fd))
* generate provenance statements when release ([#222](https://github.com/eslint/eslint-plugin-markdown/issues/222)) ([30ae649](https://github.com/eslint/eslint-plugin-markdown/commit/30ae6492e48328672c10da3a7a5bead850b03b52))
* run tests on Node.js v20 ([#215](https://github.com/eslint/eslint-plugin-markdown/issues/215)) ([f5ce090](https://github.com/eslint/eslint-plugin-markdown/commit/f5ce090010659cd55e38348083585ab116d9b19a))
* set up release-please ([#219](https://github.com/eslint/eslint-plugin-markdown/issues/219)) ([311c626](https://github.com/eslint/eslint-plugin-markdown/commit/311c626ac9f9ec05aa8bc6915e995f0a0c408891))

v3.0.0 - July 16, 2022

* [`558ae3c`](https://github.com/eslint/eslint-plugin-markdown/commit/558ae3ca2b2b35f7a389aa37389d322dc3d3630c) chore: add node v18 (#205) (Amaresh  S M)
* [`071fa66`](https://github.com/eslint/eslint-plugin-markdown/commit/071fa661875e4bd88a91dcd39eee9276bf3f2b0a) feat!: drop node v8 and v10 (#203) (Amaresh  S M)
* [`f186730`](https://github.com/eslint/eslint-plugin-markdown/commit/f186730bd7420e251da6469f07f3d873d9259abd) ci: update github actions (#207) (Deepshika S)
* [`6570c82`](https://github.com/eslint/eslint-plugin-markdown/commit/6570c829155a2ca802195c1efd3623e62ca18f4e) ci: Work around npm behavior changes to fix CI on main (#206) (Brandon Mills)
* [`87c2b53`](https://github.com/eslint/eslint-plugin-markdown/commit/87c2b536fd80b15e134766d92b90048ae45cbe1f) docs: update badges (#202) (Milos Djermanovic)
* [`2fd5b89`](https://github.com/eslint/eslint-plugin-markdown/commit/2fd5b89a589a5b25677983c0228bd2a27e60ba00) chore: add tests for ESLint 8 (#195) (Michaël De Boey)
* [`8db0978`](https://github.com/eslint/eslint-plugin-markdown/commit/8db097895222a8b0ac0e85b68728829dc508701f) chore: Check for package.json in examples (#200) (Brandon Mills)
* [`b695396`](https://github.com/eslint/eslint-plugin-markdown/commit/b69539679a2bd4f9dc1b0b52bae68fba85749187) test: test with `ESLint` instead of `CLIEngine` when available (#198) (Michaël De Boey)
* [`e1ddcc5`](https://github.com/eslint/eslint-plugin-markdown/commit/e1ddcc5a274bbb4902b8ac8029928a3b2aff5a51) ci: use node `v16` (#199) (Nitin Kumar)
* [`8f590fc`](https://github.com/eslint/eslint-plugin-markdown/commit/8f590fc3bc61df4e72a06da3e6bf3264df9eea54) chore: update `devDependencies` (#197) (Michaël De Boey)
* [`3667566`](https://github.com/eslint/eslint-plugin-markdown/commit/36675663b83bf02bcde5b7bd8895f7fd4d0b7451) chore: test all supported ESLint versions (#196) (Michaël De Boey)
* [`ecae4fe`](https://github.com/eslint/eslint-plugin-markdown/commit/ecae4fe7ee53afeefbb8a2627b6bde38a4e5d297) Chore: ignore pnpm-lock.yaml (#193) (Nitin Kumar)
* [`ffdb245`](https://github.com/eslint/eslint-plugin-markdown/commit/ffdb24573dff0728342e21c44013fa78882352d9) Chore: use `actions/setup-node@v2` in CI (#192) (Nitin Kumar)

v2.2.1 - September 11, 2021

* [`3a40160`](https://github.com/eslint/eslint-plugin-markdown/commit/3a401606cb2ac4dae6b95720799ed1c611af32d0) Fix: `message.line` could be `undefined` (#191) (JounQin)

v2.2.0 - May 26, 2021

* [`32203f6`](https://github.com/eslint/eslint-plugin-markdown/commit/32203f6ec86ec5e220d18099863d94408f334665) Update: Replace Markdown parser (fixes #125, fixes #186) (#188) (Brandon Mills)

v2.1.0 - April 25, 2021

* [`f1e153b`](https://github.com/eslint/eslint-plugin-markdown/commit/f1e153b8b634af7121e87b505c3c882536f4e3a5) Update: Upgrade remark-parse to v7 (fixes #77, fixes #78) (#175) (Brandon Mills)

v2.0.1 - April 5, 2021

* [`d23d5f7`](https://github.com/eslint/eslint-plugin-markdown/commit/d23d5f739943d136669aac945ef25528f31cd7db) Fix: use blocksCache instead of single blocks instance (fixes #181) (#183) (JounQin)
* [`a09a645`](https://github.com/eslint/eslint-plugin-markdown/commit/a09a6452c1031b029efb17fe606cc5f56cfa0d23) Chore: add yarn.lock and package-lock.json into .gitignore (#184) (JounQin)
* [`1280ac1`](https://github.com/eslint/eslint-plugin-markdown/commit/1280ac1f4998e8ab2030742fe510cc02d200aea2) Docs: improve jsdoc, better for typings (#182) (JounQin)
* [`79be776`](https://github.com/eslint/eslint-plugin-markdown/commit/79be776331cf2bb4db2f265ee6cf7260e90e3d5e) Fix: More reliable comment attachment (fixes #76) (#177) (Brandon Mills)

v2.0.0 - February 14, 2021

* [`53dc0e5`](https://github.com/eslint/eslint-plugin-markdown/commit/53dc0e56a86144a8b93b3e220116252058fa3144) Docs: Remove prerelease README notes (#173) (Brandon Mills)
* [`140adf4`](https://github.com/eslint/eslint-plugin-markdown/commit/140adf42a9e103c5fdce5338b737fa0a7c47d38c) 2.0.0-rc.2 (ESLint Jenkins)
* [`15d7aa6`](https://github.com/eslint/eslint-plugin-markdown/commit/15d7aa6cd830f769078b6eb6cf89ef3e6e04548f) Build: changelog update for 2.0.0-rc.2 (ESLint Jenkins)
* [`f6a3fad`](https://github.com/eslint/eslint-plugin-markdown/commit/f6a3fada43aaeb613aaf9168dfd06a53b9db0ab4) Fix: overrides pattern for virtual filenames in recommended config (#169) (Milos Djermanovic)
* [`390d508`](https://github.com/eslint/eslint-plugin-markdown/commit/390d508607aa6a5b1668633799d8e6b34a853d26) 2.0.0-rc.1 (ESLint Jenkins)
* [`e05d6eb`](https://github.com/eslint/eslint-plugin-markdown/commit/e05d6ebdbcd87d0ac57ff037fcfe82cd2b0cca37) Build: changelog update for 2.0.0-rc.1 (ESLint Jenkins)
* [`1dd7089`](https://github.com/eslint/eslint-plugin-markdown/commit/1dd70890b92827a5fbd3a86a62c3f2bc30389340) Fix: npm prepare script on Windows (refs #166) (#168) (Brandon Mills)
* [`23ac2b9`](https://github.com/eslint/eslint-plugin-markdown/commit/23ac2b95b1c2666baf422c24f5b73607d315a700) Fix: Ignore words in info string after syntax (fixes #166) (#167) (Brandon Mills)
* [`8f729d3`](https://github.com/eslint/eslint-plugin-markdown/commit/8f729d3f286820da8099aaf2708d54aa9edcc000) Chore: Switch to main for primary branch (fixes #161) (#165) (Brandon Mills)
* [`d30c50f`](https://github.com/eslint/eslint-plugin-markdown/commit/d30c50f46237af2fdef0a8a21fb547ed8e6c4d80) Chore: Automatically install example dependencies (#164) (Brandon Mills)
* [`2749b4d`](https://github.com/eslint/eslint-plugin-markdown/commit/2749b4deb8a8f8015721ecb5eb49bec8de2042c4) 2.0.0-rc.0 (ESLint Jenkins)
* [`922a00e`](https://github.com/eslint/eslint-plugin-markdown/commit/922a00e286f548f2810ebe5fb534418ae9ba83a3) Build: changelog update for 2.0.0-rc.0 (ESLint Jenkins)
* [`d94c22f`](https://github.com/eslint/eslint-plugin-markdown/commit/d94c22fa908c5ea93f5ca083438af3b108f440c2) Build: Install example test dependencies in Jenkins (#160) (Brandon Mills)
* [`7f26cb9`](https://github.com/eslint/eslint-plugin-markdown/commit/7f26cb9a9d1b3c169f532200d12aee80d41bb3e7) Docs: Reference recommended config disabled rules (#159) (Brandon Mills)
* [`bf7648f`](https://github.com/eslint/eslint-plugin-markdown/commit/bf7648f0ebdb5ac967059ee83708b46f389aa4a9) Docs: Add TypeScript example (#155) (Brandon Mills)
* [`d80be9e`](https://github.com/eslint/eslint-plugin-markdown/commit/d80be9e0b668c0bf3b2176f0f82b5852d4559b59) New: Add rules to recommended config (#157) (Nikolay Stoynov)
* [`fc4d7aa`](https://github.com/eslint/eslint-plugin-markdown/commit/fc4d7aa0612a3fdeeb26fbaf261e94547393ab48) Chore: run CI in Node 14.x (#158) (Kai Cataldo)
* [`f2d4923`](https://github.com/eslint/eslint-plugin-markdown/commit/f2d4923d3b974a201077574fd6e6e7535152db96) Docs: Add React example (#152) (Brandon Mills)
* [`eb66833`](https://github.com/eslint/eslint-plugin-markdown/commit/eb6683351f72735f52dad5018d4fa0c1b3f0f2a1) New: Add recommended config (fixes #151) (#153) (Brandon Mills)
* [`0311640`](https://github.com/eslint/eslint-plugin-markdown/commit/03116401ae7be0c86b5a48d22aacd94df387a5df) Fix: Don't require message end locations (fixes #112) (#154) (Brandon Mills)
* [`2bc9352`](https://github.com/eslint/eslint-plugin-markdown/commit/2bc93523e006b482a4c57a251c221e7b8711b66b) 2.0.0-alpha.0 (ESLint Jenkins)
* [`c0ba401`](https://github.com/eslint/eslint-plugin-markdown/commit/c0ba401315323890ce072507a83ab9b3207aeff7) Build: changelog update for 2.0.0-alpha.0 (ESLint Jenkins)
* [`51e48c6`](https://github.com/eslint/eslint-plugin-markdown/commit/51e48c68535964b1fe0f5c949d721baca4e6a1d6) Docs: Revamp documentation for v2 (#149) (Brandon Mills)
* [`b221391`](https://github.com/eslint/eslint-plugin-markdown/commit/b2213919e3973ebb3788295143c17e14f5fc3f3b) Docs: Dogfood plugin by linting readme (#145) (Brandon Mills)
* [`7423610`](https://github.com/eslint/eslint-plugin-markdown/commit/74236108b5c996b5f73046c2112270c7458cbae9) Docs: Explain use of --ext option in ESLint v7 (#146) (Brandon Mills)
* [`0d4dbe8`](https://github.com/eslint/eslint-plugin-markdown/commit/0d4dbe8a50852516e14f656007c60e9e7a180b0a) Breaking: Implement new processor API (fixes #138) (#144) (Brandon Mills)
* [`7eeafb8`](https://github.com/eslint/eslint-plugin-markdown/commit/7eeafb83e446f76bc4581381cd68dacc484b2249) Chore: Update ESLint config and plugins (#143) (Brandon Mills)
* [`f483343`](https://github.com/eslint/eslint-plugin-markdown/commit/f4833438fa2c06941f05e994eb1084321ce4cfb3) Breaking: Require ESLint v6 (#142) (Brandon Mills)
* [`9aa1fdc`](https://github.com/eslint/eslint-plugin-markdown/commit/9aa1fdca62733543d2c26a755ad14dbc02926f27) Chore: Use ES2018 object spread syntax (#141) (Brandon Mills)
* [`f584cc6`](https://github.com/eslint/eslint-plugin-markdown/commit/f584cc6f08f0eeac0e657ae45cbf561764fab696) Build: Remove Travis (#140) (Brandon Mills)
* [`35f9a11`](https://github.com/eslint/eslint-plugin-markdown/commit/35f9a11b407078774eef37295ba7ddb95c56f419) Breaking: Drop support for Node.js v6 (refs #138) (#137) (Brandon Mills)
* [`6f02ef5`](https://github.com/eslint/eslint-plugin-markdown/commit/6f02ef53abc08b5e35b56361f2bd7cbc7ea8e993) Chore: Add npm version and build status badges (#139) (Brandon Mills)

v2.0.0-rc.2 - January 30, 2021

* [`f6a3fad`](https://github.com/eslint/eslint-plugin-markdown/commit/f6a3fada43aaeb613aaf9168dfd06a53b9db0ab4) Fix: overrides pattern for virtual filenames in recommended config (#169) (Milos Djermanovic)

v2.0.0-rc.1 - December 20, 2020

* [`1dd7089`](https://github.com/eslint/eslint-plugin-markdown/commit/1dd70890b92827a5fbd3a86a62c3f2bc30389340) Fix: npm prepare script on Windows (refs #166) (#168) (Brandon Mills)
* [`23ac2b9`](https://github.com/eslint/eslint-plugin-markdown/commit/23ac2b95b1c2666baf422c24f5b73607d315a700) Fix: Ignore words in info string after syntax (fixes #166) (#167) (Brandon Mills)
* [`8f729d3`](https://github.com/eslint/eslint-plugin-markdown/commit/8f729d3f286820da8099aaf2708d54aa9edcc000) Chore: Switch to main for primary branch (fixes #161) (#165) (Brandon Mills)
* [`d30c50f`](https://github.com/eslint/eslint-plugin-markdown/commit/d30c50f46237af2fdef0a8a21fb547ed8e6c4d80) Chore: Automatically install example dependencies (#164) (Brandon Mills)

v2.0.0-rc.0 - August 19, 2020

* [`d94c22f`](https://github.com/eslint/eslint-plugin-markdown/commit/d94c22fa908c5ea93f5ca083438af3b108f440c2) Build: Install example test dependencies in Jenkins (#160) (Brandon Mills)
* [`7f26cb9`](https://github.com/eslint/eslint-plugin-markdown/commit/7f26cb9a9d1b3c169f532200d12aee80d41bb3e7) Docs: Reference recommended config disabled rules (#159) (Brandon Mills)
* [`bf7648f`](https://github.com/eslint/eslint-plugin-markdown/commit/bf7648f0ebdb5ac967059ee83708b46f389aa4a9) Docs: Add TypeScript example (#155) (Brandon Mills)
* [`d80be9e`](https://github.com/eslint/eslint-plugin-markdown/commit/d80be9e0b668c0bf3b2176f0f82b5852d4559b59) New: Add rules to recommended config (#157) (Nikolay Stoynov)
* [`fc4d7aa`](https://github.com/eslint/eslint-plugin-markdown/commit/fc4d7aa0612a3fdeeb26fbaf261e94547393ab48) Chore: run CI in Node 14.x (#158) (Kai Cataldo)
* [`f2d4923`](https://github.com/eslint/eslint-plugin-markdown/commit/f2d4923d3b974a201077574fd6e6e7535152db96) Docs: Add React example (#152) (Brandon Mills)
* [`eb66833`](https://github.com/eslint/eslint-plugin-markdown/commit/eb6683351f72735f52dad5018d4fa0c1b3f0f2a1) New: Add recommended config (fixes #151) (#153) (Brandon Mills)
* [`0311640`](https://github.com/eslint/eslint-plugin-markdown/commit/03116401ae7be0c86b5a48d22aacd94df387a5df) Fix: Don't require message end locations (fixes #112) (#154) (Brandon Mills)

v2.0.0-alpha.0 - April 12, 2020

* [`51e48c6`](https://github.com/eslint/eslint-plugin-markdown/commit/51e48c68535964b1fe0f5c949d721baca4e6a1d6) Docs: Revamp documentation for v2 (#149) (Brandon Mills)
* [`b221391`](https://github.com/eslint/eslint-plugin-markdown/commit/b2213919e3973ebb3788295143c17e14f5fc3f3b) Docs: Dogfood plugin by linting readme (#145) (Brandon Mills)
* [`7423610`](https://github.com/eslint/eslint-plugin-markdown/commit/74236108b5c996b5f73046c2112270c7458cbae9) Docs: Explain use of --ext option in ESLint v7 (#146) (Brandon Mills)
* [`0d4dbe8`](https://github.com/eslint/eslint-plugin-markdown/commit/0d4dbe8a50852516e14f656007c60e9e7a180b0a) Breaking: Implement new processor API (fixes #138) (#144) (Brandon Mills)
* [`7eeafb8`](https://github.com/eslint/eslint-plugin-markdown/commit/7eeafb83e446f76bc4581381cd68dacc484b2249) Chore: Update ESLint config and plugins (#143) (Brandon Mills)
* [`f483343`](https://github.com/eslint/eslint-plugin-markdown/commit/f4833438fa2c06941f05e994eb1084321ce4cfb3) Breaking: Require ESLint v6 (#142) (Brandon Mills)
* [`9aa1fdc`](https://github.com/eslint/eslint-plugin-markdown/commit/9aa1fdca62733543d2c26a755ad14dbc02926f27) Chore: Use ES2018 object spread syntax (#141) (Brandon Mills)
* [`f584cc6`](https://github.com/eslint/eslint-plugin-markdown/commit/f584cc6f08f0eeac0e657ae45cbf561764fab696) Build: Remove Travis (#140) (Brandon Mills)
* [`35f9a11`](https://github.com/eslint/eslint-plugin-markdown/commit/35f9a11b407078774eef37295ba7ddb95c56f419) Breaking: Drop support for Node.js v6 (refs #138) (#137) (Brandon Mills)
* [`6f02ef5`](https://github.com/eslint/eslint-plugin-markdown/commit/6f02ef53abc08b5e35b56361f2bd7cbc7ea8e993) Chore: Add npm version and build status badges (#139) (Brandon Mills)

v1.0.2 - February 24, 2020

* [`52e0984`](https://github.com/eslint/eslint-plugin-markdown/commit/52e098483fdf958a8dce96ab66c52b4337d522fe) Upgrade: Update devDeps and change istanbul -> nyc (#130) (Brett Zamir)
* [`d52988f`](https://github.com/eslint/eslint-plugin-markdown/commit/d52988f5efcacb16862c79c1857e9b912cf3ffb0) Chore: Remove call to lint absent `Makefile.js` (#129) (Brett Zamir)
* [`5640ea6`](https://github.com/eslint/eslint-plugin-markdown/commit/5640ea65730abab5c9c97d77b5708f3499ec62f3) Fix: Apply base indent to multiple line breaks (fixes #127) (#128) (Brett Zamir)

v1.0.1 - October 21, 2019

* [`fb0b5a3`](https://github.com/eslint/eslint-plugin-markdown/commit/fb0b5a3fc36ad362556cafc49929f49e3b4bc6b0) Fix: Indent multiline fixes (fixes #120) (#124) (Brandon Mills)
* [`07c9017`](https://github.com/eslint/eslint-plugin-markdown/commit/07c9017551d3a3382126882cf08bc162afcab734) Chore: Use GitHub Actions (#123) (Brandon Mills)
* [`b5bf014`](https://github.com/eslint/eslint-plugin-markdown/commit/b5bf01465252a5d5ae3e1849b99b7d37bcd5a030) Chore: Add Node 12 to Travis (#122) (Brandon Mills)
* [`dc90961`](https://github.com/eslint/eslint-plugin-markdown/commit/dc909618aa8f39e84279f5bdeb4a888d56d919b1) Fix: Support autofix at the very start of blocks (fixes #117) (#119) (Simon Lydell)
* [`2de2490`](https://github.com/eslint/eslint-plugin-markdown/commit/2de2490f6d9dd5073bd9662d7ec6d61ceb13a811) Docs: Syntax highlight Markdown (#116) (Brett Zamir)
* [`fdacf0c`](https://github.com/eslint/eslint-plugin-markdown/commit/fdacf0c29e4c9267816df0918f1b372fbd8eef32) Chore: Upgrade to eslint-config-eslint@5.0.1 (#110) (Brandon Mills)

v1.0.0 - January 2, 2019

* [`2a8482e`](https://github.com/eslint/eslint-plugin-markdown/commit/2a8482e8e39da2ab4a1d8aeb7459f26a8377905d) Fix: `overrides` general docs and Atom linter-eslint tips (fixes #109) (#111) (Brett Zamir)

v1.0.0-rc.1 - November 5, 2018

* a2f4492 Fix: Allowing eslint-plugin-prettier to work (fixes #101) (#107) (simlu)

v1.0.0-rc.0 - October 27, 2018

* 8fe9a0e New: Enable autofix with --fix (fixes #58) (#97) (Bohdan Khodakivskyi)
* a5d0cce Fix: Ignore anything after space in code fence's language (fixes #98) (#99) (Francisco Ryan Tolmasky I)
* 6fd340d Upgrade: eslint-release@1.0.0 (#100) (Teddy Katz)
* dff8e9c Fix: Emit correct endLine numbers (#88) (Paul Murray)
* 83f00d0 Docs: Suggest disabling strict in .md files (fixes #94) (#95) (Brandon Mills)
* 3b4ff95 Build: Test against Node v10 (#96) (Brandon Mills)
* 6777977 Breaking: required node version 6+ (#89) (薛定谔的猫)
* 5582fce Docs: Updating CLA link (#93) (Pablo Nevares)
* 24070e6 Build: Upgrade to eslint-release@0.11.1 (#92) (Brandon Mills)
* 6cfd1f0 Docs: Add unicode-bom to list of unsatisfiable rules (#91) (Brandon Mills)

v1.0.0-beta.8 - April 8, 2018

* a1544c2 Chore: Add .npmrc to disable creating package-lock.json (#90) (Brandon Mills)
* 47ad3f9 Chore: Replace global comment integration test with unit test (refs #81) (#85) (Brandon Mills)
* e34acc6 Fix: Add unicode-bom to unsatisfiable rules (refs #75) (#84) (Brandon Mills)
* 7c19f8b Fix: Support globals (fixes #79) (#81) (Anders D. Johnson)

v1.0.0-beta.7 - July 2, 2017

* f8ba18a New: Custom eslint-skip HTML comment skips blocks (fixes #69) (#73) (Brandon Mills)
* 249904f Chore: Add test for code fences without blank lines (#72) (Brandon Mills)
* 3abc569 Chore: Un-disable strict and eol-last in repository (#71) (Brandon Mills)
* 132ea5b Chore: Add test ensuring config comments do not fall through (#70) (Brandon Mills)

v1.0.0-beta.6 - April 29, 2017

* c5e9d67 Build: Explicitly specify package.json files (#67) (Brandon Mills)

v1.0.0-beta.5 - April 29, 2017

* 7bd0f6e Build: Install eslint-release (#66) (Brandon Mills)
* 48122eb Build: Dogfood plugin without npm link (#65) (Brandon Mills)
* cc7deea Chore: Increase code coverage (#64) (Brandon Mills)
* 29f2f05 Build: Use eslint-release (#63) (Brandon Mills)
* d2f2962 Upgrade: remark (#62) (Titus)
