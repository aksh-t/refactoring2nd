let tpHd = "untitled";
function title() { return tpHd; }
function setTitle(arg) { tpHd = arg; }

exports.titleElement = function titleElement() {
  let result = "";
  result += `<h1>${title()}</h1>`;
  return result;
};

exports.setTitleFromObj = function setTitleFromObj(obj) {
  setTitle(obj['articleTitle']);
};

