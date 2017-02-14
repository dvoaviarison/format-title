// CAPITALIZE
module.exports.capAll = function (string) {
  return string.toUpperCase();
}

module.exports.capFirstWord = function (string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

module.exports.capWords = function (string) {
  return string.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (m) {
    return m.toUpperCase();
  });
}

// TO LOWER CASE
module.exports.lowAll = function (string) {
  return string.toLowerCase();
}

module.exports.lowFirstWord = function (string) {
  return string.charAt(0).toLowerCase() + string.substring(1);
}

module.exports.lowWords = function (string) {
  return string.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (m) {
    return m.toLowerCase();
  });
}