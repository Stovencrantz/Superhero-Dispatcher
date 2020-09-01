const router = require("express").Router();
const request = require("request");
const connection = require("../config/connectmySQL");

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

  request({ url: superheroQuery }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.statusCode(500).json({ type: "error", message: err.message });
    }
    body = JSON.parse(body);

    var results = body.results.filter((hero) => {
      return hero.name.toLowerCase() === req.params.name.toLowerCase();
    });
    // grabbing information on the hero searched
    res.json(results);
    console.log("hero: ", results);
    var heroName = results[0].name;
    console.log("heroName: ", heroName);
    var alignment = results[0].biography.alignment;
    var hero_id = results[0].id;
    var imageURL = results[0].image.url;
    console.log("imageURL: ", imageURL);
    var powerstats = results[0].powerstats;
    console.log("powerstats: ", powerstats);
    const stats = powerstats;
    const keys = Object.keys(stats);
    const values = Object.values(stats);
    const entries = Object.entries(stats);
    console.log("keys:", keys);
    console.log("values:", values);
    console.log("entries:", entries);
    var query = "INSERT INTO heroes SET ?";
    connection.query(
      query,
      {
        name: heroName,
        hero_id: parseInt(hero_id),
        intel: parseInt(results[0].powerstats.intelligence),
        strength: parseInt(results[0].powerstats.strength),
        speed: parseInt(results[0].powerstats.speed),
        durability: parseInt(results[0].powerstats.durability),
        power: parseInt(results[0].powerstats.power),
        combat: parseInt(results[0].powerstats.combat),
        alignment: alignment,
        img_url: imageURL,
      },
      function (err, res) {
        if (err) throw err;
        console.log("you are a fuckin boss");
        connection.query("SELECT * FROM heroes", function (err, res) {
          if (err) throw err;
          console.table(res);
        });
      }
    );
  });
});

// const PORT = process.env.PORT || 3030;

// app.listen(PORT, () => console.log(`LISTENING ON ${PORT}`));

module.exports = router;
