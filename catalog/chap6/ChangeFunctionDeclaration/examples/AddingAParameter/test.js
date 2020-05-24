const expect = require('chai').expect;
const Book = require('./main');

describe('Book', () => {
  it('', () => {
    const book = new Book();
    const customer = { name: "Peter" };
    book.zz_addReservation(customer, true);
    expect(book.reservations).to.deep.equal([customer]);
  });
});