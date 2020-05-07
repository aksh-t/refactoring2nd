const fs = require("fs");
const path = require("path");
const statement = require("../src/main");

const srcPath = path.join(__dirname, "../src");

const playsJson = fs.readFileSync(path.join(srcPath, "plays.json"), { encoding: "utf8" });
const plays = JSON.parse(playsJson);

const invoicesJson = fs.readFileSync(path.join(srcPath, "invoices.json"), { encoding: "utf8" });
const invoices = JSON.parse(invoicesJson);
const invoice = invoices[0];


function testStatement() {
  const result = statement(invoice, plays);
  console.log(result);
}

testStatement();
