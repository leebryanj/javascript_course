// Use * to Import Everything from a File
// If a file exports multiple different things, you can import each thing individually, or you can import everything.

// import *, then create an object to store eveyrthing in, then filename
// In this example, capitalizeStrings is the object
import * as capitalizeStrings from "./capitalize_strings.js";

// Create an Export Fallback with export default
// Before, we were looking at named exports. There is also something called an export default.
// This is a fallback export, and it is often used when you only want to export 1 thing from a file.

// Let's say we want this function to be our fallback export
export default function subtract(x, y) {
    return x - y;
}