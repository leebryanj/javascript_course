// Use export to Reuse a Code Block
// For example:
const capitalizeStringExport = (string) => {
    return string.charAt(0).toUpperCase() + string.slize(1);
}

export { capitalizeStringExport }; // Another way to export a function

// exporting 2 variables
export const foo = "bar";
export const bar = "foo";