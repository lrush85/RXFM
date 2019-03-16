// var userSearch = "";

$("#submit").on("click", function(event) {
  event.preventDefault();

  var userSearch = $("#drug-search").val().trim();

  console.log(userSearch);

  $.get("/medication/" + userSearch, function(data) {
    console.log(data.medication[0]);
    console.log(data.medication[0].Generic_Name);

    $("#generic-name-content").text(data.medication[0].Generic_Name);
    $("#brand-name-content").text(data.medication[0].Brand_Name);
    $("#class-content").text(data.medication[0].Class);
    $("#uses-content").text(data.medication[0].Uses);
    $("#side-effects-content").text(data.medication[0].Side_Effects);
    $("#rationale-content").text(data.medication[0].Rationale);
    $("#dc-plan-content").text(data.medication[0].DC_Plan);
    $("#withdrawal-content").text(data.medication[0].Withdrawal);
  });
});