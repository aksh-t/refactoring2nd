let _title = "untitled";
function title() { return _title; }
function setTitle(arg) { _title = arg; }

exports.titleElement = function titleElement() {
  let result = "";
  result += `<h1>${title()}</h1>`;
  return result;
};

exports.setTitleFromObj = function setTitleFromObj(obj) {
  setTitle(obj['articleTitle']);
};

