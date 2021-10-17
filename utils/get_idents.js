// @ts-check

const fs = require("fs");
const path = require("path");
const readline = require('readline');

/** @type {string[]} */
const matchedResults = [];
const identRule = /^ident\!\s*\{(.+)\}$/;
const libRl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, "..", "src", "lib.rs")),
});

libRl.on('line', function (line) {
    const matched = identRule.exec(line);
    if (matched && matched[1]) {
        matchedResults.push(matched[1]);
    }
});

libRl.on('close', () => {
    console.log("### available identifiers (`IDENT`)\n")
    console.log(matchedResults.map(e => `- ${e}`).join("\n"));
})
