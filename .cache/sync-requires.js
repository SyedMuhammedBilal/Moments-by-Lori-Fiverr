const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/syed_.bilal/Desktop/Moments-by-Lori-Fiverr/src/pages/index.js")))
}

