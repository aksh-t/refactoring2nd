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
  const result = statement.statement(invoice, plays);
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

function testHtmlStatement() {
  const result = statement.htmlStatement(invoice, plays);
  const expect =
    `<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seats</th><th>cost</th></tr>  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,730.00</em></p>
<p>You earned <em>47</em> credits</p>
`;
  assert.equal(result, expect);
}

testStatement();
testHtmlStatement();
