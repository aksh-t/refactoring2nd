class Order {
  constructor(data) {
    this.priority = data.priority;
    // 初期化が続く
  }

  get priority() { return this._priority; }
  set priority(aString) { this._priority = aString; }
}

// Orderクラスを利用する側のコード（クライアントコード）
function getHighPriorityCount(orders) {
  highPriorityCount = orders.filter(
    o => "high" === o.priority || "rush" === o.priority
  ).length;
  return highPriorityCount;
}

exports.Order = Order;
exports.getHighPriorityCount = getHighPriorityCount;