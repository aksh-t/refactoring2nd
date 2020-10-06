const expect = require('chai').expect;
const { Order, Priority, getHighPriorityCount } = require('./main');


// 適当なOrderオブジェクトの配列を作成して返す
function createOrders() {
  const highOrder = new Order({ priority: "high" });
  const rushOrder = new Order({ priority: "rush" });
  const lowOrder = new Order({ priority: "low" });
  const orders = [highOrder, rushOrder, lowOrder];
  return orders;
}

describe('getHighPriorityCount', () => {
  it('', () => {
    const orders = createOrders();
    expect(getHighPriorityCount(orders)).to.equal(2);
  });
});

describe('Priority', () => {
  describe('constructor', () => {
    it('valid value', () => {
      expect(() => new Priority('normal')).to.not.throw();
      // Priorityオブジェクトが正しく生成されることを確認するべきな気がする
    });
    it('invalid value', () => {
      expect(() => new Priority('invalid')).to.throw(Error);
      // FIXME: messageまで検証しようと思ったらどうすればいいんだろう？
    });
  });
});;
