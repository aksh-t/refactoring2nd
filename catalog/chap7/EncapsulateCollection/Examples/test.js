const expect = require('chai').expect;
const { Person, Course, client } = require('./main');


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