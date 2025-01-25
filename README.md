# Unhandled Async Errors in Express.js Route Handlers

This repository demonstrates a common error in Express.js applications: inadequate error handling within asynchronous route handlers.  The `bug.js` file showcases a scenario where an asynchronous operation might throw an error, but the error handling is insufficient, leading to a generic 500 error.

The `bugSolution.js` file provides a corrected version with improved error handling. This improved solution utilizes a centralized error handling middleware which provides more informative error responses to the client and logs errors for debugging purposes.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `node bug.js`.
5. Refresh the page several times to observe the inconsistent behavior.
6. Compare with `node bugSolution.js` for the corrected functionality.

## Solution

The solution demonstrates the use of a centralized error-handling middleware. This enhances the application's robustness and provides more context regarding errors encountered during request processing.