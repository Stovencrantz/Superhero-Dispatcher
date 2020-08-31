$(document).ready(() => {
  $("#searchBtn").on("click", (event) => {
    event.preventDefault();
    // console.log("searchBtn clicked: ", this.event);
    var supeName = $("#superheroSearch").val().trim().toLowerCase().split(" ");
    var spacedNameArr = [];
    if (supeName.length > 0) {
      console.log("supeName 0", supeName[0]);
      console.log("supeName 1", supeName[1]);
      for (var i = 0; i < supeName.length; i++) {
        spacedNameArr.push(supeName[supeName.length - 1] + "%20");

      }
    }
    console.log("spacedNameArr:", spacedNameArr);
    console.log("supeName:", supeName);
    getSuperHero(supeName);
  });

  function getSuperHero(supeName) {
    var baseUrl = "https://superheroapi.com/api/";
    var volonnninoToken = "10223684788131570";
    var searchParam = "/search/" + supeName;

    var superheroQuery = baseUrl + volonnninoToken + searchParam;
    console.log("supeheroQuery: ", superheroQuery);
  }
});
