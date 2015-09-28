

var escape = module.exports = function escape(string) {
  if (string === null || string === undefined) return;
  return string.replace(/([&"<>'])/g, function(str, item) {
            return escape.map[item];
          })
}

var map = escape.map = {
    '>': '&gt;'
  , '<': '&lt;'
  , "'": '&apos;'
  , '"': '&quot;'
  , '&': '&amp;'
}