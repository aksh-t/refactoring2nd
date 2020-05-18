const printOwing = require("./main");

describe('printOwing', function () {
  it('', function () {
    const invoice = { customer: "BigCo", orders: [{ amount: 5 }, { amount: 10 }] };

    // consoleに出力される結果を自己テストで確認するのは大変なので、まずは目視でチェックすることにした
    printOwing(invoice);
  });
});


