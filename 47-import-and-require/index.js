// Understand the Differences Between import and require
// In the past, we would use the require function to import functions and code from other files.
// But now we have import and export.
// You could export code from one file, and then import it in another file. 
// It also allows you to import only certain functions or variables from a file.
import { capitalizeString } from "./string_function.js";

const cap = capitalizeString("hello!");
console.log(cap);