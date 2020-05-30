let tpHd = "untitled";

exports.titleElement = function titleElement() {
  let result = "";
  result += `<h1>${tpHd}</h1>`;
  return result;
};

exports.setTitleFromObj = function setTitleFromObj(obj) {
  tpHd = obj['articleTitle'];
};

