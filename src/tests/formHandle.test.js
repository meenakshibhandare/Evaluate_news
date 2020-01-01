
import {sentimentDetails} from '../client/js/formHandler';
//import { exportAllDeclaration } from '@babel/types';


//Testing function for sentimentDetails() fn 
//Using fetch-mock to mock the response from the server
test("testomg sentimentDetails function", () => {
  beforeEach(()=>{
    fetch.resetMocks()
  });
  fetch.mockResponseOnce(JSON.stringify({ polarity: 'positive' , subjectivity: "objective"}));

  expect.hasAssertions();
  return sentimentDetails().then(data => {
    const result = JSON.parse(data);
    console.log(result);
    expect(result.polarity).toEqual('positive');
    expect(result.subjectivity).toEqual('objective');
  });
});
