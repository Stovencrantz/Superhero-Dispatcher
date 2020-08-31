const router = require("express").Router();
const request = require("request");

// const app = express();


// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });


router.get("/hero/:name", (req, res) => {

    var baseUrl = "http://superheroapi.com/api/";
    var volonnninoToken = "10223684788131570";
    var searchParam = "/search/" + req.params.name;
    var superheroQuery = baseUrl + volonnninoToken + searchParam;
    console.log("supeheroQuery: ", superheroQuery);

  request(
    { url: superheroQuery },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res
          .statusCode(500)
          .json({ type: "error", message: err.message });
      }
      body = JSON.parse(body);


      var results = body.results.filter(hero => {
        return hero.name.toLowerCase() === req.params.name.toLowerCase();    
      })
      
      res.json(results);
    }
  );
});

// const PORT = process.env.PORT || 3030;

// app.listen(PORT, () => console.log(`LISTENING ON ${PORT}`));

module.exports = router;
