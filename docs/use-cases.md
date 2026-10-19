# Use cases

| UC | Need | Class | ADRs | Tests | Status |
|---|---|---|---|---|---|
| UC-1 | Subtract two numbers | must | | | accepted |

## UC-1. Subtract two numbers

**Goal:** the library subtracts as it adds: `sub(a, b)` is `a - b`, in `src/sub.js`. No new decision is needed: it follows `src/add.js`.

**Done when:** tests show sub(5, 3) is 2, sub(3, 5) is -2 and sub(0, 0) is 0, each in its own test, and the gate passes.

For #1.
