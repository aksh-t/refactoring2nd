module.exports = function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // 未払い金の計算(calculate outstanding)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記録(record due date)
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  printDatails(invoice.customer, outstanding, invoice.dueDate);
};

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function printDatails(customer, outstanding, dueDate) {
  console.log(`name: ${customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${dueDate.toLocaleDateString()}`);
}

// see: https://martinfowler.com/bliki/ClockWrapper.html
class Clock {
  static get today() {
    return new Date();
  }
}