class Person {
  constructor(data) {
    this._department = new Department(data.department);
  }
  get department() { return this._department; }
}

class Department {
  constructor(data) {
    this._manager = data.manager;
  }
  get manager() { return this._manager; }
}

exports.Person = Person;
exports.Department = Department;