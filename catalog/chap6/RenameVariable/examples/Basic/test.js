const expect = require('chai').expect;
const { titleElement, setTitleFromObj } = require('./main');

describe('titleElement', () => {
  it('', () => {
    expect(titleElement()).to.equal("<h1>untitled</h1>");
  });
});

describe('setTitleFromObj', () => {
  it('', () => {
    setTitleFromObj({ articleTitle: 'Refactoring' });
    expect(titleElement()).to.equal("<h1>Refactoring</h1>");
  });
});