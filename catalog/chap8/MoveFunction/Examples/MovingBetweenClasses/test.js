const expect = require('chai').expect;
const { Account } = require('./main');

describe('', () => {
  it('', () => {
    const daysOverdrawn = 5;
    const accountTypeCode = "09";
    const anAccount = new Account(daysOverdrawn, accountTypeCode);
    expect(anAccount.bankCharge).to.equal(14.5);
  });
});