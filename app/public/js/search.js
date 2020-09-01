$("#searchBtn").on("click", (event) => {
  event.preventDefault();
  // console.log("searchBtn clicked: ", this.event);
  var supeName = $("#superheroSearch").val().trim().toLowerCase().split(" ");
  console.log("supeName:", supeName);
  var superFinal = "";

  if (supeName.length === 1) {
    superFinal = supeName;
  } else if (supeName.length === 2) {
    superFinal += supeName[0] + "%20" + supeName[1];
  } else if (supeName.length === 3) {
    superFinal += supeName[0] + "%20" + supeName[1] + "%20" + supeName[2];
  }
  console.log("superFinal: ", superFinal);
  getSuperHero(superFinal);

  function getSuperHero(superFinal) {
    var baseUrl = "http://localhost:8080/api/hero/";
    // var volonnninoToken = "10223684788131570";
    // var searchParam = "/search/" + superFinal;
    // var superheroQuery = baseUrl + volonnninoToken + searchParam;
    // console.log("supeheroQuery: ", superheroQuery);

    $.ajax({
      url: baseUrl + superFinal,
      method: "GET",
    }).then(function (res) {
      // console.log(("res: ", res));
    });
  }
});
