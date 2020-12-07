class Account {
  constructor(daysOverdrawn, typeCode) {
    this._daysOverdrawn = daysOverdrawn;
    this._type = new AccountType(typeCode);
  }
  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
  get type() {
    return this._type;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharege = 10;
      if (this.daysOverdrawn <= 7)
        return baseCharege;
      else
        return baseCharege + (this.daysOverdrawn - 7) * 0.85;
    }
    else
      return this.daysOverdrawn * 1.75;
  }
}

class AccountType {
  constructor(code) {
    this._code = code;
  }
  get code() {
    return this._code;
  }
  get isPremium() {
    return this.code === "09";
  }
}

exports.Account = Account;