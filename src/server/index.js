projectData = [];
var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
dotenv.config();
var aylien = require("aylien_textapi");

const app = express();
app.use(express.static("dist"));
// parse an HTML body into a string
app.use(bodyParser.text({ type: "text/html" }));

console.log(__dirname);

app.get("/", function(req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function(req, res) {
  res.send(mockAPIResponse);
});

//set aylien API credentials
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.post("/sentiment", sentimentAnalysis);

app.get("/all", dataReturn);
function dataReturn(req, res) {
  console.log(projectData);
  res.send(projectData);
}

function sentimentAnalysis(req, res) {
  console.log(req.body);
  textapi.sentiment(
    {
      url: req.body,
      mode: "document"
    },
    function(error, response) {
      if (error == null) {
        let newEntry = {
          polarity: response.polarity,
          subjectivity: response.subjectivity
        };
        console.log(newEntry);
        projectData.push(newEntry);
        res.send(newEntry);
      }
    }
  );
}
