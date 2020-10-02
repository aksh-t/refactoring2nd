class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() { return this._name; }
  get courses() { return this._courses; }
  set courses(aList) { this._courses = aList; }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() { return this._name; }
  get isAdvanced() { return this._isAdvanced; }
}

function readBasicCourseNames(filename) {
  // 実際にファイルから読み出すのは本質ではないし、面倒なので
  // ハードコードした名前のリストを返す
  return ["Biology", "Art"];
}

function client(aPerson) {
  const numAdavncedCourses = aPerson.courses.filter(
    c => c.isAdvanced
  ).length;
  return numAdavncedCourses;
}

function clientCode2(aPerson, filename) {
  const basicCourseNames = readBasicCourseNames(filename);
  aPerson.courses = basicCourseNames.map(
    name => new Course(name, false)
  );
}

exports.Person = Person;
exports.Course = Course;
exports.client = client;
exports.clientCode2 = clientCode2;