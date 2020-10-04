const expect = require('chai').expect;
const _ = require('lodash');
const {
  Person, Course, client, clientCode2, clientCode3
} = require('./main');


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

describe("clientCode3", () => {
  it('setterを使わなくても、aPersonのcoursesが更新できてしまうことを確認', () => {
    const aPerson = createPerson();
    // 実際のファイル読み出しは端折っているので、ファイル名はなんでも良い
    clientCode3(aPerson, "hoge.txt");
    expect(aPerson.courses).to.deep.equal([
      new Course("English", false),
      new Course("Science", true),
      new Course("Biology", false),
      new Course("Art", false)
    ]);
  });
});

describe("Person", () => {
  it('addCourse', () => {
    const aPerson = createPerson();
    // 後で検証に使うので、ディープコピーしておく
    const beforeCourses = _.cloneDeep(aPerson.courses);

    aPerson.addCourse(new Course("Music", true));
    expect(aPerson.courses).to.deep.equal(
      beforeCourses.concat(new Course("Music", true))
    );
  });

  it('removeCourse', () => {
    const aPerson = createPerson();
    // 後で検証に使うので、ディープコピーしておく
    const beforeCourses = _.cloneDeep(aPerson.courses);

    const deleteTargetCourse = aPerson.courses[0];
    aPerson.removeCourse(deleteTargetCourse);
    // カプセル化のテストにしては、安易にdeepな比較をしすぎな気がする...
    // ちゃんとカプセル化できてるかの確認として、不適切かも？
    expect(aPerson.courses).to.deep.equal(
      beforeCourses.filter(c => !_.isEqual(c, deleteTargetCourse))
    );
  });

  it('removeCourseで存在しないコースを削除しようとすると例外がthrowされるテスト', () => {
    const aPerson = createPerson();

    expect(() => {
      aPerson.removeCourse(new Course("Psychology", false));
    }).to.throw(RangeError);
  });

  it('removeCourseで存在しないコースを削除しようとしたときの振る舞いを外から指定するテスト', () => {
    const aPerson = createPerson();

    // 何もしない関数を用意する
    const fnIfAbsent = () => { };

    expect(() => {
      aPerson.removeCourse(
        new Course("Psychology", false),
        fnIfAbsent
      );
    }).to.not.throw();
  });

  describe('カプセル化のテスト', () => {
    it('get courses', () => {
      const aPerson = createPerson();

      const courses = aPerson.courses;
      // 検証用にdeep copyをとっておく
      const originalCourses = _.cloneDeep(aPerson.courses);

      // getterを通して取得したcoursesに直接変更を加える
      courses.push(new Course("new", false));
      // 取得したcoursesを直接変更されても、元のPersonオブジェクトには影響がないことを確認する
      expect(aPerson.courses).to.deep.equal(originalCourses);
    });

    it('set courses', () => {
      const aPerson = createPerson();
      const newCourses = [new Course("new1", false), new Course("new2", false)];

      aPerson.courses = newCourses;
      // 検証用にdeep copyをとっておく
      const originalCourses = _.cloneDeep(aPerson.courses);
      // aPerson.coursesにsetした後、newCoursesを変更する
      newCourses.push(new Course("new3", false));

      expect(aPerson.courses).to.deep.equal(originalCourses);
    });
  });
});