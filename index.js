const _ = require("lodash");
const testIt = require("./test");
const test = require("./test");
const os = require("os");
const fs = require("fs");

// let a = [40, 45, 2, 34, 0, 56];
// console.log(_.first(a));
// console.log(_.findLastIndex(a));
// console.log(global);

// testIt();
// console.log(os.memory());

fs.writeFile("write.txt", "test write file", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("text write into write.txt");
  }
});
console.log("print done");

fs.readFile("./write.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
