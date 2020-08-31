const express = require("express");
const request = require("request");

const app = express();

// $("#searchBtn").on("click", (event) => {
//   event.preventDefault();
//   // console.log("searchBtn clicked: ", this.event);
//   var supeName = $("#superheroSearch").val().trim().toLowerCase().split(" ");
//   var superFinal = "";
//   var baseUrl = "http://superheroapi.com/api/";
//   var volonnninoToken = "10223684788131570";
//   var searchParam = "/search/" + superFinal;

//   if (supeName.length === 1) {
//     superFinal = supeName;
//   } else if (supeName.length === 2) {
//     superFinal += supeName[0] + "%20" + supeName[1];
//   } else if (supeName.length === 3) {
//     superFinal += supeName[0] + "%20" + supeName[1] + "%20" + supeName[2];
//   }
//   console.log("superFinal: ", superFinal);

//   console.log("spacedNameArr:", spacedNameArr);
//   console.log("supeName:", supeName);
//   // getSuperHero(superFinal);
// });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get(searchParam, (req, res) => {
  request(
    { url: baseUrl + volonnninoToken + searchParam },
    (error, res, body) => {
      if (error || response.statusCode !== 200) {
        return res
          .statusCode(500)
          .json({ type: "error", message: err.message });
      }
      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`LISTENING ON ${PORT}`));

// function getSuperHero(superFinal) {
//   var baseUrl = "http://superheroapi.com/api/";
//   var volonnninoToken = "10223684788131570";

//   var superheroQuery = baseUrl + volonnninoToken + searchParam;
//   console.log("supeheroQuery: ", superheroQuery);

//   $.ajax({
//     url: superheroQuery,
//     method: "GET",
//   }).then(function (res) {
//     console.log(("res: ", res));
//   });
// }
