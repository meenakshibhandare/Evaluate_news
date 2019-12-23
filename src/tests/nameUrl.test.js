//testing for nameUrl.js
const nameUrlTest = require("../client/js/nameUrl");

test("proper HTML", () => {
  expect(nameUrlTest.checkForUrl("https://google.com")).toBe(true);
});
test("No HTML case", () => {
  expect(nameUrlTest.checkForUrl("https://google")).toBe(false);
});
test("http case", () => {
  expect(nameUrlTest.checkForUrl("http://google.com")).toBe(true);
});
test("No HTML case2", () => {
  expect(nameUrlTest.checkForUrl("Any_random_value")).toBe(false);
});
