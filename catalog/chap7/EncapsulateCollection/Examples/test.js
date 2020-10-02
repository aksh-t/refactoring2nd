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
});
// TODO: 全体的に正しくカプセル化できているかのテストが足りてない気がする
//       時間があったらもう少しテストを拡充させる