// // Enable Babel to transpile JSX
// require("ignore-styles"); // Ignore CSS imports
// require("@babel/register")({
//     presets: ["@babel/preset-env", "@babel/preset-react"],
// });

// const { renderToString } = require("react-dom/server");
// const fs = require("fs");
// const React = require("react");
// const App = require("./src/App").default; // Import App correctly

// // Render the App component to a string
// const htmlContent = renderToString(React.createElement(App));

// // Wrap the content inside a full HTML structure
// const fullHtml = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Pre-Rendered React</title>
// </head>
// <body>
//     <div id="root">${htmlContent}</div>
// </body>
// </html>`;

// // Ensure the "dist" directory exists
// if (!fs.existsSync("dist")) {
//     fs.mkdirSync("dist");
// }

// // Save the pre-rendered HTML to the dist folder
// fs.writeFileSync("dist/index.html", fullHtml);

// console.log("✅ Static HTML generated: dist/index.html");

// /////////////////////////////////////////////////////////////////////////////////////////////
// Enable Babel to transpile JSX
// Enable Babel to transpile JSX
require("ignore-styles"); // Ignore CSS imports
require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
});

const { renderToString } = require("react-dom/server");
const fs = require("fs");
const path = require("path");
const React = require("react");
const App = require("./src/App").default; // Import App correctly

// Render the App component to a string
const htmlContent = renderToString(React.createElement(App));

// Define the build directory where React will store assets
const buildDir = path.resolve(__dirname, "build");

// Ensure the "build" directory exists
if (!fs.existsSync(buildDir)) {
    console.error("❌ Error: 'build' folder not found. Run 'npm run build' first.");
    process.exit(1);
}

// Read the default React index.html template
const indexFile = path.join(buildDir, "index.html");

if (!fs.existsSync(indexFile)) {
    console.error("❌ Error: React's default 'index.html' not found in 'build/'. Ensure 'npm run build' was successful.");
    process.exit(1);
}

let defaultHtml = fs.readFileSync(indexFile, "utf-8");

// Inject pre-rendered content inside `<div id="root"></div>`
const updatedHtml = defaultHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${htmlContent}</div>`
);

// Write the modified HTML file back into the "build" directory
fs.writeFileSync(indexFile, updatedHtml);

console.log("✅ Successfully injected pre-rendered HTML into build/index.html.");
