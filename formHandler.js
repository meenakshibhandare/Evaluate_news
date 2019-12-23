function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formUrl = document.getElementById("name").value;
  var validateResult = Client.checkForUrl(formUrl);
  if (validateResult) {
    console.log("::: Form Submitted :::");
    sentimentDetails("http://localhost:8080/sentiment", formUrl).then(function(data) {
      console.log(data);
      updateUI("/all");
    });
  } else {
    document.getElementById("results").innerHTML =
      "Please Enter a proper HTML!!";
  }
}

const updateUI = async (url = "") => {
  const request = await fetch(url);
  try {
    const allData = await request.json();
    document.getElementById("results").innerHTML =
      "POLAIRTY is " + allData[allData.length - 1].polarity;
    document.getElementById("results").innerHTML +=
      " <br /> Subjectivity is " + allData[allData.length - 1].subjectivity;
  } catch (error) {
    console.log("error", error);
  }
};

const sentimentDetails = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "text/html"
    },
    //Body data tye must match 'Contect-Type' header
    body: data
  });
  try {
    const newData = await response.text();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

export { handleSubmit, updateUI };
