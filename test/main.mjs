import { statement } from "../src/main";

const plays = {
  "hamlet": { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  "othello": { name: "Othello", type: "tragedy" }
}

// FIXME: TypeError: invoice.performances is not iterable
const invoice = {
  customer: "BigCo",
  performances: [
    {
      playID: "hamlet",
      audience: 55
    },
    {
      playID: "as-like",
      audience: 35
    },
    {
      playID: "othello",
      audience: 40
    }
  ]
}


function testStatement() {
  const result = statement(plays, invoice);
  console.log(result);
}

testStatement();
