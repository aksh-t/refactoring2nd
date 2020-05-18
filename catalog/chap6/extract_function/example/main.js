module.exports = function printOwing(invoice) {
  printBanner();

  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDatails(invoice, outstanding);
};

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function printDatails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding;
}

// see: https://martinfowler.com/bliki/ClockWrapper.html
class Clock {
  static get today() {
    return new Date();
  }
}