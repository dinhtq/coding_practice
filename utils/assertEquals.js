const _ = require('lodash')
module.exports = (a, b, desc) => {
  if (a === b || _.isEqual(a, b)) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
