//testing for nameUrl.js
//const nameUrlTest = require("../client/js/nameUrl");
import {checkForUrl} from '../client/js/nameUrl';
test("proper HTML", () => {
  expect(checkForUrl("https://google.com")).toBe(true);
});
test("No HTML case", () => {
  expect(checkForUrl("https://google")).toBe(false);
});
test("http case", () => {
  expect(checkForUrl("http://google.com")).toBe(true);
});
test("No HTML case2", () => {
  expect(checkForUrl("Any_random_value")).toBe(false);
});
