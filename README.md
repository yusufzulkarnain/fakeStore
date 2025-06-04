This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## Project Structure

.
├── App.tsx
├── Gemfile
├── README.md
├── **tests**
│ └── App.test.tsx
├── android
│ ├── app
│ ├── build
│ ├── build.gradle
│ ├── gradle
│ ├── gradle.properties
│ ├── gradlew
│ ├── gradlew.bat
│ ├── link-assets-manifest.json
│ ├── local.properties
│ └── settings.gradle
├── app.json
├── babel.config.js
├── index.js
├── ios
│ ├── Podfile
│ ├── Podfile.lock
│ ├── Pods
│ ├── TechTest2025
│ ├── TechTest2025.xcodeproj
│ ├── TechTest2025.xcworkspace
│ ├── TechTest2025Tests
│ ├── \_xcode.env
│ ├── build
│ └── link-assets-manifest.json
├── jest.config.js
├── metro.config.js
├── node_modules
│ ├── @ampproject
│ ├── @babel
│ ├── @bcoe
│ ├── @eslint
│ ├── @eslint-community
│ ├── @hapi
│ ├── @humanwhocodes
│ ├── @isaacs
│ ├── @istanbuljs
│ ├── @jest
│ ├── @jridgewell
│ ├── @nicolo-ribaudo
│ ├── @nodelib
│ ├── @react-native
│ ├── @react-native-async-storage
│ ├── @react-native-community
│ ├── @react-navigation
│ ├── @reduxjs
│ ├── @sideway
│ ├── @sinclair
│ ├── @sinonjs
│ ├── @types
│ ├── @typescript-eslint
│ ├── @ungap
│ ├── abort-controller
│ ├── accepts
│ ├── acorn
│ ├── acorn-jsx
│ ├── ajv
│ ├── anser
│ ├── ansi-escapes
│ ├── ansi-fragments
│ ├── ansi-regex
│ ├── ansi-styles
│ ├── anymatch
│ ├── appdirsjs
│ ├── argparse
│ ├── array-buffer-byte-length
│ ├── array-includes
│ ├── array-union
│ ├── array.prototype.findlast
│ ├── array.prototype.flat
│ ├── array.prototype.flatmap
│ ├── array.prototype.tosorted
│ ├── arraybuffer.prototype.slice
│ ├── asap
│ ├── ast-types
│ ├── astral-regex
│ ├── async-function
│ ├── async-limiter
│ ├── asynckit
│ ├── available-typed-arrays
│ ├── axios
│ ├── babel-core
│ ├── babel-jest
│ ├── babel-plugin-istanbul
│ ├── babel-plugin-jest-hoist
│ ├── babel-plugin-polyfill-corejs2
│ ├── babel-plugin-polyfill-corejs3
│ ├── babel-plugin-polyfill-regenerator
│ ├── babel-plugin-transform-flow-enums
│ ├── babel-preset-current-node-syntax
│ ├── babel-preset-jest
│ ├── balanced-match
│ ├── base64-js
│ ├── bl
│ ├── boolbase
│ ├── brace-expansion
│ ├── braces
│ ├── browserslist
│ ├── bser
│ ├── buffer
│ ├── buffer-from
│ ├── bytes
│ ├── call-bind
│ ├── call-bind-apply-helpers
│ ├── call-bound
│ ├── caller-callsite
│ ├── caller-path
│ ├── callsites
│ ├── camelcase
│ ├── caniuse-lite
│ ├── chalk
│ ├── char-regex
│ ├── chrome-launcher
│ ├── chromium-edge-launcher
│ ├── ci-info
│ ├── cjs-module-lexer
│ ├── cli-cursor
│ ├── cli-spinners
│ ├── cliui
│ ├── clone
│ ├── clone-deep
│ ├── co
│ ├── collect-v8-coverage
│ ├── color
│ ├── color-convert
│ ├── color-name
│ ├── color-string
│ ├── colorette
│ ├── combined-stream
│ ├── command-exists
│ ├── commander
│ ├── commondir
│ ├── compressible
│ ├── compression
│ ├── concat-map
│ ├── connect
│ ├── convert-source-map
│ ├── core-js-compat
│ ├── core-util-is
│ ├── cosmiconfig
│ ├── create-jest
│ ├── cross-spawn
│ ├── css-select
│ ├── css-tree
│ ├── css-what
│ ├── csstype
│ ├── data-view-buffer
│ ├── data-view-byte-length
│ ├── data-view-byte-offset
│ ├── dayjs
│ ├── debug
│ ├── decamelize
│ ├── decode-uri-component
│ ├── dedent
│ ├── deep-is
│ ├── deepmerge
│ ├── defaults
│ ├── define-data-property
│ ├── define-properties
│ ├── delayed-stream
│ ├── denodeify
│ ├── depd
│ ├── deprecated-react-native-prop-types
│ ├── destroy
│ ├── detect-newline
│ ├── diff-sequences
│ ├── dir-glob
│ ├── doctrine
│ ├── dom-serializer
│ ├── domelementtype
│ ├── domhandler
│ ├── domutils
│ ├── dunder-proto
│ ├── ee-first
│ ├── electron-to-chromium
│ ├── emittery
│ ├── emoji-regex
│ ├── encodeurl
│ ├── entities
│ ├── envinfo
│ ├── error-ex
│ ├── error-stack-parser
│ ├── errorhandler
│ ├── es-abstract
│ ├── es-define-property
│ ├── es-errors
│ ├── es-iterator-helpers
│ ├── es-object-atoms
│ ├── es-set-tostringtag
│ ├── es-shim-unscopables
│ ├── es-to-primitive
│ ├── escalade
│ ├── escape-html
│ ├── escape-string-regexp
│ ├── eslint
│ ├── eslint-config-prettier
│ ├── eslint-plugin-eslint-comments
│ ├── eslint-plugin-ft-flow
│ ├── eslint-plugin-jest
│ ├── eslint-plugin-prettier
│ ├── eslint-plugin-react
│ ├── eslint-plugin-react-hooks
│ ├── eslint-plugin-react-native
│ ├── eslint-plugin-react-native-globals
│ ├── eslint-scope
│ ├── eslint-visitor-keys
│ ├── espree
│ ├── esprima
│ ├── esquery
│ ├── esrecurse
│ ├── estraverse
│ ├── esutils
│ ├── etag
│ ├── event-target-shim
│ ├── execa
│ ├── exit
│ ├── expect
│ ├── exponential-backoff
│ ├── fast-deep-equal
│ ├── fast-diff
│ ├── fast-glob
│ ├── fast-json-stable-stringify
│ ├── fast-levenshtein
│ ├── fast-xml-parser
│ ├── fastq
│ ├── fb-watchman
│ ├── file-entry-cache
│ ├── fill-range
│ ├── filter-obj
│ ├── finalhandler
│ ├── find-cache-dir
│ ├── find-up
│ ├── flat-cache
│ ├── flatted
│ ├── flow-enums-runtime
│ ├── flow-parser
│ ├── follow-redirects
│ ├── for-each
│ ├── form-data
│ ├── fresh
│ ├── fs-extra
│ ├── fs.realpath
│ ├── fsevents
│ ├── function-bind
│ ├── function.prototype.name
│ ├── functions-have-names
│ ├── gensync
│ ├── get-caller-file
│ ├── get-intrinsic
│ ├── get-package-type
│ ├── get-proto
│ ├── get-stream
│ ├── get-symbol-description
│ ├── glob
│ ├── glob-parent
│ ├── globals
│ ├── globalthis
│ ├── globby
│ ├── gopd
│ ├── graceful-fs
│ ├── graphemer
│ ├── has-bigints
│ ├── has-flag
│ ├── has-property-descriptors
│ ├── has-proto
│ ├── has-symbols
│ ├── has-tostringtag
│ ├── hasown
│ ├── hermes-estree
│ ├── hermes-parser
│ ├── hermes-profile-transformer
│ ├── html-escaper
│ ├── http-errors
│ ├── human-signals
│ ├── ieee754
│ ├── ignore
│ ├── image-size
│ ├── immer
│ ├── import-fresh
│ ├── import-local
│ ├── imurmurhash
│ ├── inflight
│ ├── inherits
│ ├── internal-slot
│ ├── invariant
│ ├── ip
│ ├── is-array-buffer
│ ├── is-arrayish
│ ├── is-async-function
│ ├── is-bigint
│ ├── is-boolean-object
│ ├── is-callable
│ ├── is-core-module
│ ├── is-data-view
│ ├── is-date-object
│ ├── is-directory
│ ├── is-docker
│ ├── is-extglob
│ ├── is-finalizationregistry
│ ├── is-fullwidth-code-point
│ ├── is-generator-fn
│ ├── is-generator-function
│ ├── is-glob
│ ├── is-interactive
│ ├── is-map
│ ├── is-number
│ ├── is-number-object
│ ├── is-path-inside
│ ├── is-plain-obj
│ ├── is-plain-object
│ ├── is-regex
│ ├── is-set
│ ├── is-shared-array-buffer
│ ├── is-stream
│ ├── is-string
│ ├── is-symbol
│ ├── is-typed-array
│ ├── is-unicode-supported
│ ├── is-weakmap
│ ├── is-weakref
│ ├── is-weakset
│ ├── is-wsl
│ ├── isarray
│ ├── isexe
│ ├── isobject
│ ├── istanbul-lib-coverage
│ ├── istanbul-lib-instrument
│ ├── istanbul-lib-report
│ ├── istanbul-lib-source-maps
│ ├── istanbul-reports
│ ├── iterator.prototype
│ ├── jest
│ ├── jest-changed-files
│ ├── jest-circus
│ ├── jest-cli
│ ├── jest-config
│ ├── jest-diff
│ ├── jest-docblock
│ ├── jest-each
│ ├── jest-environment-node
│ ├── jest-get-type
│ ├── jest-haste-map
│ ├── jest-leak-detector
│ ├── jest-matcher-utils
│ ├── jest-message-util
│ ├── jest-mock
│ ├── jest-pnp-resolver
│ ├── jest-regex-util
│ ├── jest-resolve
│ ├── jest-resolve-dependencies
│ ├── jest-runner
│ ├── jest-runtime
│ ├── jest-snapshot
│ ├── jest-util
│ ├── jest-validate
│ ├── jest-watcher
│ ├── jest-worker
│ ├── joi
│ ├── js-tokens
│ ├── js-yaml
│ ├── jsc-android
│ ├── jsc-safe-url
│ ├── jscodeshift
│ ├── jsesc
│ ├── json-buffer
│ ├── json-parse-better-errors
│ ├── json-parse-even-better-errors
│ ├── json-schema-traverse
│ ├── json-stable-stringify-without-jsonify
│ ├── json5
│ ├── jsonfile
│ ├── jsx-ast-utils
│ ├── keyv
│ ├── kind-of
│ ├── kleur
│ ├── leven
│ ├── levn
│ ├── lighthouse-logger
│ ├── lines-and-columns
│ ├── locate-path
│ ├── lodash
│ ├── lodash.debounce
│ ├── lodash.merge
│ ├── lodash.throttle
│ ├── log-symbols
│ ├── logkitty
│ ├── loose-envify
│ ├── lru-cache
│ ├── lucide-react-native
│ ├── make-dir
│ ├── makeerror
│ ├── marky
│ ├── math-intrinsics
│ ├── mdn-data
│ ├── memoize-one
│ ├── merge-options
│ ├── merge-stream
│ ├── merge2
│ ├── metro
│ ├── metro-babel-transformer
│ ├── metro-cache
│ ├── metro-cache-key
│ ├── metro-config
│ ├── metro-core
│ ├── metro-file-map
│ ├── metro-minify-terser
│ ├── metro-resolver
│ ├── metro-runtime
│ ├── metro-source-map
│ ├── metro-symbolicate
│ ├── metro-transform-plugins
│ ├── metro-transform-worker
│ ├── micromatch
│ ├── mime
│ ├── mime-db
│ ├── mime-types
│ ├── mimic-fn
│ ├── minimatch
│ ├── minimist
│ ├── mkdirp
│ ├── ms
│ ├── nanoid
│ ├── natural-compare
│ ├── natural-compare-lite
│ ├── negotiator
│ ├── neo-async
│ ├── nocache
│ ├── node-abort-controller
│ ├── node-dir
│ ├── node-fetch
│ ├── node-int64
│ ├── node-releases
│ ├── node-stream-zip
│ ├── normalize-path
│ ├── npm-run-path
│ ├── nth-check
│ ├── nullthrows
│ ├── ob1
│ ├── object-assign
│ ├── object-inspect
│ ├── object-keys
│ ├── object.assign
│ ├── object.entries
│ ├── object.fromentries
│ ├── object.values
│ ├── on-finished
│ ├── on-headers
│ ├── once
│ ├── onetime
│ ├── open
│ ├── optionator
│ ├── ora
│ ├── own-keys
│ ├── p-limit
│ ├── p-locate
│ ├── p-try
│ ├── parent-module
│ ├── parse-json
│ ├── parseurl
│ ├── path-exists
│ ├── path-is-absolute
│ ├── path-key
│ ├── path-parse
│ ├── path-type
│ ├── picocolors
│ ├── picomatch
│ ├── pify
│ ├── pirates
│ ├── pkg-dir
│ ├── possible-typed-array-names
│ ├── prelude-ls
│ ├── prettier
│ ├── prettier-linter-helpers
│ ├── pretty-format
│ ├── process-nextick-args
│ ├── promise
│ ├── prompts
│ ├── prop-types
│ ├── proxy-from-env
│ ├── punycode
│ ├── pure-rand
│ ├── query-string
│ ├── queue
│ ├── queue-microtask
│ ├── range-parser
│ ├── react
│ ├── react-devtools-core
│ ├── react-freeze
│ ├── react-is
│ ├── react-native
│ ├── react-native-animatable
│ ├── react-native-axios
│ ├── react-native-linear-gradient
│ ├── react-native-modal
│ ├── react-native-safe-area-context
│ ├── react-native-screens
│ ├── react-native-shimmer-placeholder
│ ├── react-native-svg
│ ├── react-native-toast-message
│ ├── react-redux
│ ├── react-refresh
│ ├── react-shallow-renderer
│ ├── react-test-renderer
│ ├── readable-stream
│ ├── readline
│ ├── recast
│ ├── redux
│ ├── redux-thunk
│ ├── reflect.getprototypeof
│ ├── regenerate
│ ├── regenerate-unicode-properties
│ ├── regenerator-runtime
│ ├── regenerator-transform
│ ├── regexp.prototype.flags
│ ├── regexpu-core
│ ├── regjsgen
│ ├── regjsparser
│ ├── require-directory
│ ├── require-main-filename
│ ├── reselect
│ ├── resolve
│ ├── resolve-cwd
│ ├── resolve-from
│ ├── resolve.exports
│ ├── restore-cursor
│ ├── reusify
│ ├── rimraf
│ ├── run-parallel
│ ├── safe-array-concat
│ ├── safe-buffer
│ ├── safe-push-apply
│ ├── safe-regex-test
│ ├── scheduler
│ ├── semver
│ ├── send
│ ├── serialize-error
│ ├── serve-static
│ ├── set-blocking
│ ├── set-function-length
│ ├── set-function-name
│ ├── set-proto
│ ├── setprototypeof
│ ├── shallow-clone
│ ├── shebang-command
│ ├── shebang-regex
│ ├── shell-quote
│ ├── side-channel
│ ├── side-channel-list
│ ├── side-channel-map
│ ├── side-channel-weakmap
│ ├── signal-exit
│ ├── simple-swizzle
│ ├── sisteransi
│ ├── slash
│ ├── slice-ansi
│ ├── source-map
│ ├── source-map-support
│ ├── split-on-first
│ ├── sprintf-js
│ ├── stack-utils
│ ├── stackframe
│ ├── stacktrace-parser
│ ├── statuses
│ ├── stream-consume
│ ├── strict-uri-encode
│ ├── string-length
│ ├── string-natural-compare
│ ├── string-width
│ ├── string.prototype.matchall
│ ├── string.prototype.repeat
│ ├── string.prototype.trim
│ ├── string.prototype.trimend
│ ├── string.prototype.trimstart
│ ├── string_decoder
│ ├── strip-ansi
│ ├── strip-bom
│ ├── strip-final-newline
│ ├── strip-json-comments
│ ├── strnum
│ ├── sudo-prompt
│ ├── supports-color
│ ├── supports-preserve-symlinks-flag
│ ├── temp
│ ├── temp-dir
│ ├── terser
│ ├── test-exclude
│ ├── text-table
│ ├── throat
│ ├── through2
│ ├── tmpl
│ ├── to-regex-range
│ ├── toidentifier
│ ├── tr46
│ ├── tslib
│ ├── tsutils
│ ├── type-check
│ ├── type-detect
│ ├── type-fest
│ ├── typed-array-buffer
│ ├── typed-array-byte-length
│ ├── typed-array-byte-offset
│ ├── typed-array-length
│ ├── typescript
│ ├── unbox-primitive
│ ├── undici-types
│ ├── unicode-canonical-property-names-ecmascript
│ ├── unicode-match-property-ecmascript
│ ├── unicode-match-property-value-ecmascript
│ ├── unicode-property-aliases-ecmascript
│ ├── universalify
│ ├── unpipe
│ ├── update-browserslist-db
│ ├── uri-js
│ ├── use-latest-callback
│ ├── use-sync-external-store
│ ├── util-deprecate
│ ├── utils-merge
│ ├── v8-to-istanbul
│ ├── vary
│ ├── vlq
│ ├── walker
│ ├── warn-once
│ ├── wcwidth
│ ├── webidl-conversions
│ ├── whatwg-fetch
│ ├── whatwg-url
│ ├── which
│ ├── which-boxed-primitive
│ ├── which-builtin-type
│ ├── which-collection
│ ├── which-module
│ ├── which-typed-array
│ ├── word-wrap
│ ├── wrap-ansi
│ ├── wrappy
│ ├── write-file-atomic
│ ├── ws
│ ├── xtend
│ ├── y18n
│ ├── yallist
│ ├── yaml
│ ├── yargs
│ ├── yargs-parser
│ └── yocto-queue
├── package-lock.json
├── package.json
├── react-native.config.js
├── src
│ ├── assets
│ ├── component
│ ├── helpers
│ ├── navigators
│ ├── page
│ └── redux
├── tsconfig.json
└── yarn.lock

# Library

- react-native-async-storage/async-storage 2.1.1 -> untuk kebutuhan penyimpan data local seperti login dan lain-lain dapat digunakan sesuai kebutuhan

- @react-navigation/bottom-tabs: "^6.6.0" -> untuk kebutuhan navigasi dan compabilitas dengan versi project react native 0.73.4 menurut saya masih stable

- @react-navigation/native: "^6.1.17" -> untuk kebutuhan navigasi dan compabilitas dengan versi project react native 0.73.4 menurut saya masih stable

- @react-navigation/native-stack: "^6.9.17" -> untuk kebutuhan navigasi dan compabilitas dengan versi project react native 0.73.4 menurut saya masih stable

- @reduxjs/toolkit: "^2.5.1",-> untuk kebutuhan managemen state

- axios": "^1.7.9", -> memudahkan fetch API dengan configurasi yang dinamis

- lucide-react-native": "^0.474.0" -> untuk kebutuhan icon agar project tidak menyimpan banyak assets

- react-native-linear-gradient: "^2.8.3", -> ada dependency dengan library lain seperti shimmer

- react-native-safe-area-context": "^4.10.5", -> ada dependency dengan library lain seperti navigator

- "react-native-screens": "^3.32.0", -> ada dependency dengan library lain seperti navigator

- "react-native-shimmer-placeholder": "^2.0.9", -> penggunaan yang simple untuk kebutuhan loading data

- "react-native-svg": "^15.11.1", -> ada dependency dengan library lain seperti lucide-icon

- "react-native-toast-message": "^2.2.1", -> penggunaan yang simple untuk menampilkan informasi error atau sukses dari API

- "react-redux": "^9.2.0" -> untuk kebutuhan management state

# Chalange

- masalah redux yang harus saya perlajari kembali karena sudah termasuk lama saya tidak mengimplentasikan redux, tetapi tidak ada masalah dalam project ini dengan penggunan redux yang mungkin dari sisi fitur masih belum terlalu kompleks hanya saja bahasa atau syntax redux yang saya harus pahami lagi.

- UI/UX sulit untuk membuat App tanpa ada acuan design dengan waktu yang lumayan singkat, tetapi saya usahakan agar UI tampak lebih simple dan mudah digunakan

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
