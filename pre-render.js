// Enable Babel to transpile JSX
require("ignore-styles"); // Ignore CSS imports
require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
});

const { renderToString } = require("react-dom/server");
const fs = require("fs");
const React = require("react");
const App = require("./src/App").default; // Import App correctly

// Render the App component to a string
const htmlContent = renderToString(React.createElement(App));

// Wrap the content inside a full HTML structure
const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pre-Rendered React</title>
</head>
<body>
    <div id="root">${htmlContent}</div>
</body>
</html>`;

// Ensure the "dist" directory exists
if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

// Save the pre-rendered HTML to the dist folder
fs.writeFileSync("dist/index.html", fullHtml);

console.log("✅ Static HTML generated: dist/index.html");
