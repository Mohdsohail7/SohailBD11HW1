let express = require("express");
let app = express();
let port = 8000;

// Exercise 1:
// Create an endpoint that takes a name as a query parameter and returns it in lowercase.
app.get("/whisper", (req, res) => {
  let name = req.query.name;
  let convertToLowerCase = name.toLowerCase();
  res.send(convertToLowerCase);
});

// Question 2:
// Create an endpoint that takes companyName and productName as query parameters and returns the full product name.
app.get("/full-product-name", (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;

  let fullProductName = companyName + " " + productName;
  res.send(fullProductName);
});

// Question 3:
// Create an endpoint that takes month and year as query parameters and returns a concatenated date in the format 'Month/Year'.
app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + "/" + year;
  res.send(formattedDate);
});

// Questions 4:
// Create an endpoint that takes your home city as a query parameter and returns a greeting in the format 'You live in <city name>'.
app.get("/greet", (req, res) => {
  let city = req.query.city;

  let greeting = "you live in " + city;
  res.send(greeting);
});

//Exercise 5:
// Create an endpoint that takes capital, and country as query parameters and returns a formatted sentence in the format “[capital] is the capital of [country].”
app.get("/capital", (req, res) => {
  let capital = req.query.capital;
  let country = req.query.country;

  let countryCapital = `${capital} is the capital of ${country}`;
  res.send(countryCapital);
});

// Exercise 6:
// Create an endpoint that takes firstName, lastName, and domain as query parameters and returns a formatted office email address.
app.get("/email", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let domain = req.query.domain;

  let email = firstName + "." + lastName + "@" + domain;
  res.send(email);
});

// server start here
app.listen(port, () => {
  console.log("server start port number on ", port);
});
