const expect = require('chai').expect;
const { Person, TelephoneNumber } = require('./main');

function getPersonData() {
  return { name: "Martin", officeAreaCode: "03", officeNumber: "12345678" };
}

function createPerosn() {
  return new Person(getPersonData());
}

// フィールドの移動を施しても、外から見た振る舞いは変わらないので、
// テストを変更する必要はない
describe('Person', () => {
  it('create instance', () => {
    // コンストラクタの動きをテストする意図を伝えるため、
    // あえてcreatePerosn()を使わない
    const data = getPersonData();
    const aPerson = new Person(data);
    expect(aPerson).to.be.an.instanceof(Person);
  });
  describe('officeAreaCode', () => {
    it('getter', () => {
      const aPerson = createPerosn();
      expect(aPerson.officeAreaCode).to.equal("03");
    });
    it('setter', () => {
      const aPerson = createPerosn();
      aPerson.officeAreaCode = '30';
      expect(aPerson.officeAreaCode).to.equal("30");
    });
  });
  describe('officeNumber', () => {
    it('getter', () => {
      const aPerson = createPerosn();
      expect(aPerson.officeNumber).to.equal("12345678");
    });
    it('setter', () => {
      const aPerson = createPerosn();
      aPerson.officeNumber = '23456789';
      expect(aPerson.officeNumber).to.equal("23456789");
    });
  });
  it('has TelephoneNumber instance', () => {
    const aPerson = createPerosn();
    expect(aPerson._telephoneNumber).to.be.an.instanceof(TelephoneNumber);
  });
});
