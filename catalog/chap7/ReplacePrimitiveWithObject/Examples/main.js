class Order {
  constructor(data) {
    this.priority = data.priority;
    // 初期化が続く
  }

  get priorityString() { return this._priority.toString(); }
  set priority(aString) { this._priority = new Priority(aString); }
}

class Priority {
  constructor(value) { this._value = value; }
  toString() { return this._value; }
}

// Orderクラスを利用する側のコード（クライアントコード）
function getHighPriorityCount(orders) {
  highPriorityCount = orders.filter(
    o => "high" === o.priorityString
      || "rush" === o.priorityString
  ).length;
  return highPriorityCount;
}

exports.Order = Order;
exports.getHighPriorityCount = getHighPriorityCount;