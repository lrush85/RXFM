$(document).ready(function() {
  $("#add-medication").hide();
  $("#delete-medication").hide();
  $("#update-medication").hide();
});

$("#add-button").on("click", function() {
  $("#add-medication").show();
});

$("#add-medication-submit").on("click", function(event) {
  event.preventDefault();

  var Medication = {
    Generic_Name: $("#Generic_Name")
      .val()
      .trim(),
    Brand_Name: $("#Brand_Name")
      .val()
      .trim(),
    Class: $("#Class")
      .val()
      .trim(),
    Uses: $("#Uses")
      .val()
      .trim(),
    Side_Effects: $("#Side-Effects")
      .val()
      .trim(),
    Rationale: $("#Rationale")
      .val()
      .trim(),
    DC_Plan: $("#DC_Plan")
      .val()
      .trim(),
    Withdrawal: $("#Withdrawal")
      .val()
      .trim()
  };

  $.post("/api/medication", Medication);

  $("#Generic_Name").val(""),
  $("#Brand_Name").val(""),
  $("#Class").val(""),
  $("#Uses").val(""),
  $("#Side-Effects").val(""),
  $("#Rationale").val(""),
  $("#DC_Plan").val(""),
  $("#Withdrawal").val("");
});

$("#delete-button").on("click", function() {
  $("#delete-medication").show();
});

var searchID = "";

$("#delete-search-submit").on("click", function() {
  userSearch = $("#drug-delete-search")
    .val()
    .trim();

  $.get("/medication/" + userSearch, function(data) {
    searchID = data.medication[0].id;

    console.log(userSearch);
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

  $("#delete-medication-submit").on("click", function() {
    $.ajax({
      url: "/api/medication/" + searchID,
      method: "DELETE"
    }).then(function() {
      console.log("medication deleted");

      $("#generic-name-content").text("");
      $("#brand-name-content").text("");
      $("#class-content").text("");
      $("#uses-content").text("");
      $("#side-effects-content").text("");
      $("#rationale-content").text("");
      $("#dc-plan-content").text("");
      $("#withdrawal-content").text("");
    });
  });
});

var idToUpdate;

$("#update-button").on("click", function() {
  $("#update-medication").show();

  $("#update-search-submit").on("click", function() {
    userSearch = $("#drug-update-search")
      .val()
      .trim();

    $.get("/medication/" + userSearch, function(data) {
      console.log(userSearch);
      console.log(data.medication[0]);
      console.log(data.medication[0].Generic_Name);

      idToUpdate = data.medication[0].id;
      $("#generic_name-update").val(data.medication[0].Generic_Name);
      $("#brand_name-update").val(data.medication[0].Brand_Name);
      $("#class-update").val(data.medication[0].Class);
      $("#uses-update").val(data.medication[0].Uses);
      $("#side_effects-update").val(data.medication[0].Side_Effects);
      $("#rationale-update").val(data.medication[0].Rationale);
      $("#dc_plan-update").val(data.medication[0].DC_Plan);
      $("#withdrawal-update").val(data.medication[0].Withdrawal);
    });
  });
});

$("#update-medication-submit").on("click", function(event) {
  event.preventDefault();

  var Medication = {
    id: idToUpdate,
    Generic_Name: $("#generic_name-update")
      .val()
      .trim(),
    Brand_Name: $("#brand_name-update")
      .val()
      .trim(),
    Class: $("#class-update")
      .val()
      .trim(),
    Uses: $("#uses-update")
      .val()
      .trim(),
    Side_Effects: $("#side_effects-update")
      .val()
      .trim(),
    Rationale: $("#rationale-update")
      .val()
      .trim(),
    DC_Plan: $("#dc_plan-update")
      .val()
      .trim(),
    Withdrawal: $("#withdrawal-update")
      .val()
      .trim()
  };

  $.ajax({
    url: "/api/medication",
    method: "PUT",
    data: Medication
  }).then(function() {
    console.log("This worked");
    $("#Generic_Name").val(""),
    $("#Brand_Name").val(""),
    $("#Class").val(""),
    $("#Uses").val(""),
    $("#Side-Effects").val(""),
    $("#Rationale").val(""),
    $("#DC_Plan").val(""),
    $("#Withdrawal").val("");
    window.location.href = "/admin";
  });
});

var medsArray = [];
$.get("/api/medication", function(data) {
  console.log(data[0]);
  medsArray.push(data[0].Generic_Name);
  medsArray.push(data[0].Brand_Name);
  console.log(medsArray);
  $(function() {
    $("#drug-update-search").autocomplete({
      source: medsArray
    });

    $(function() {
      $("#drug-delete-search").autocomplete({
        source: medsArray
      });
    });
  });
});
