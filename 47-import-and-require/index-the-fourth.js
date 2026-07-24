// Import a Default Export
// Pretend we have a file called "math_functions.js" that has a default export named "subtract".
// If it's not a default export you would put curly braces around subtract, like import { subtract }
// But since it is a default export, you don't use the { }
import subtract from "./math_functions.js";
subtract(7, 4);