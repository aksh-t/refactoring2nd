class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() { return this._name; }
  get courses() { return this._courses; }
  // addCourseがあれば不要なので、「setterの削除」を適用してもいいが、
  // ここではコピーを代入するようにする方法を適用する
  set courses(aList) { this._courses = aList; }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(
    aCourse,
    fnIfAbsent = () => { throw new RangeError(); }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
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

function clientCode3(aPerson, filename) {
  for (const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name, false));
  }
}

exports.Person = Person;
exports.Course = Course;
exports.client = client;
exports.clientCode2 = clientCode2;
exports.clientCode3 = clientCode3;