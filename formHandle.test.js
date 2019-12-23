//testing for formHandler
//test that get response occurs
import { updateUI } from '../client/js/formHandler.js';

test("get api testing", done => {
  updateUI("/test").then(response => {
    expect(response.polarity).toBe("positive");
    expect(response.subjectivity).toBe("Objective");
    done();
  });
});
