const assert = require('assert').strict;
const fs = require("fs");
const path = require("path");
const statement = require("../src/statement");

const srcPath = path.join(__dirname, "../src");

const playsJson = fs.readFileSync(path.join(srcPath, "plays.json"), { encoding: "utf8" });
const plays = JSON.parse(playsJson);

const invoicesJson = fs.readFileSync(path.join(srcPath, "invoices.json"), { encoding: "utf8" });
const invoices = JSON.parse(invoicesJson);
const invoice = invoices[0];


function testStatement() {
  const result = statement(invoice, plays);
  const expect =
    `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;
  assert.equal(result, expect);
}

testStatement();
