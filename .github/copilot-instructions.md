# Copilot / AI agent instructions for javascript-scope-lab

This file contains concise, practical guidance for an AI coding agent working in this repository.

- **Big picture**: This is a small Learn.co JavaScript lab focused on scope. Student code lives in `index.js`; tests in `test/` assert very specific global variable names, declaration types, and function behaviors.

- **Key files**:
  - `index.js` — the student-facing file; edits should be applied here.
  - `test/indexTest.js` — authoritative spec: asserts declaration type (`const`/`let`), exact array contents, function names and behavior.
  - `test/helpers.js` — test harness: uses Babel to transform `index.js` and sets up a jsdom environment. Changes to global variables or wrapping the file may break tests.
  - `package.json` — run tests with `npm test` (runs Mocha with timeout and reporter options).

- **What tests expect (explicit examples you must preserve)**:
  - A `const` named `burgers` that is an array containing the strings `"Hamburger"` and `"Cheeseburger"`.
  - A `let` named `featuredDrink` set to the string `"Strawberry Milkshake"`.
  - A function `addBurger()` that, when called, creates a `const newBurger = 'Flatburger'` inside the function and pushes it onto `burgers`.
  - An `if(true)` block that declares `const anotherNewBurger = 'Maple Bacon Burger'` and pushes it onto `burgers`.
  - A function `changeFeaturedDrink()` that changes `featuredDrink` to `"The JavaShake"` when called.

- **Coding constraints & conventions (project-specific)**:
  - Tests assert exact declaration keywords (`const` / `let`) and global variable names — do not change those identifiers or convert globals into module exports/wrappers.
  - Keep the code in `index.js` at top-level (global scope) as the tests evaluate globals after Babel transforms the file.
  - Use exact string literals indicated in tests; small differences in spacing/casing will fail assertions.

- **Build / test / debugging**:
  - Install deps: `npm install`.
  - Run tests: `npm test` (Mocha runs the tests in `test/`).
  - Tests use Babel (see `test/helpers.js`) so modern JS is OK, but do not wrap code in modules or IIFEs that remove globals.

- **When proposing changes or fixes**:
  - Reference the exact test expectation from `test/indexTest.js` and the failing assertion when suggesting edits.
  - Prefer minimal edits that satisfy the test (e.g., add the missing variable or change a declaration keyword), avoid refactors that alter top-level names.

- **Common pitfalls to avoid**:
  - Moving globals into `module.exports` or wrapping the file; tests rely on global variables.
  - Using `var` where tests expect `let`/`const` or vice versa.
  - Changing the exact strings used for expected values (`'Flatburger'`, `'Maple Bacon Burger'`, `'The JavaShake'`, etc.).

- **If you need to run the app in-browser**:
  - `index.html` loads `index.js` and the browser Mocha harness. Serve the repo over a simple static server (or open `index.html` with correct node_modules relative paths) to view in-browser test UI.

If anything in these instructions is unclear or you want more specific examples, tell me which area to expand (tests, run steps, or common fixes) and I'll iterate.
