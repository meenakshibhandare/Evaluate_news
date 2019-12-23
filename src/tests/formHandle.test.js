//testing for formHandler
//test that get response occurs
const formUrlTest = require("../client/js/formHandler.js");

test("get api testing", done => {
  formUrlTest.updateUI("/test").then(response => {
    expect(response.polarity).toBe("positive");
    expect(response.subjectivity).toBe("Objective");
    done();
  });
});
