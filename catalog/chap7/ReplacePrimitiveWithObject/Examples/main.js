class Order {
  constructor(data) {
    this.priority = data.priority;
    // 初期化が続く
  }

  get priority() { return this._priority; }
  get priorityString() { return this._priority.toString(); }
  set priority(aString) { this._priority = new Priority(aString); }
}

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value))
      this._value = value;
    else
      throw new Error(`<${value}> is invalid for Priority`);
  }
  toString() { return this._value; }

  static legalValues() { return ['low', 'normal', 'high', 'rush']; }
}

// Orderクラスを利用する側のコード（クライアントコード）
function getHighPriorityCount(orders) {
  highPriorityCount = orders.filter(
    o => "high" === o.priority.toString()
      || "rush" === o.priority.toString()
  ).length;
  return highPriorityCount;
}

exports.Order = Order;
exports.Priority = Priority;
exports.getHighPriorityCount = getHighPriorityCount;