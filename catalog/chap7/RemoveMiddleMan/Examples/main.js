class Person {
  constructor(data) {
    this._department = new Department(data.department);
  }
  get manager() { return this._department.manager; }
}

class Department {
  constructor(data) {
    this._manager = data.manager;
  }
  get manager() { return this._manager; }
}

