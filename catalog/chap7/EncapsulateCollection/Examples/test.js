const expect = require('chai').expect;
const { Person, Course, client, clientCode2 } = require('./main');


function createPerson() {
  // 適当なPersonオブジェクトを作成して返す
  const aPerson = new Person("Martin");
  const courseOfEnglish = new Course("English", false);
  const courseOfScience = new Course("Science", true);
  aPerson.courses = [courseOfEnglish, courseOfScience];

  // debug用
  // console.log(aPerson);

  return aPerson;
}

describe('client', () => {
  it('', () => {
    const aPerson = createPerson();
    const numAdvancedCourses = client(aPerson);
    expect(numAdvancedCourses).to.equal(1);
  });
});

describe("clientCode2", () => {
  it('aPersonのcoursesが更新されることを確認', () => {
    const aPerson = createPerson();
    // 実際のファイル読み出しは端折っているので、ファイル名はなんでも良い
    clientCode2(aPerson, "hoge.txt");
    expect(aPerson.courses).to.deep.equal([
      new Course("Biology", false),
      new Course("Art", false)
    ]);
  });
});