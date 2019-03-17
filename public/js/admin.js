$(document).ready(function () {
   $("#add-medication").hide();
   $("#delete-medication").hide();
   $("#update-medication").hide();
});

$("#add-button").on("click", function () {
   $("#add-medication").show();
});

$("#add-medication-submit").on("click", function (event) {
   event.preventDefault();

   $.post("/api/medication", function (data) {
      var Medication = {
         Generic_Name: $("#generic-name").val().trim(),
         Brand_Name: $("#brand-name").val().trim(),
         Class: $("#class").val().trim(),
         Uses: $("#uses").val().trim(),
         Side_Effects: $("#side-effects").val().trim(),
         Rationale: $("#rationale").val().trim(),
         DC_Plan: $("#dc-plan").val().trim(),
         Withdrawal: $("#withdrawal").val().trim()
      }

      console.log(Medication);
   });
});

$("#delete-button").on("click", function () {
   $("#delete-medication").show();
});

var searchID = "";

$("#delete-search-submit").on("click", function () {

   userSearch = $("#drug-delete-search").val().trim();

   $.get("/medication/" + userSearch, function (data) {

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

   $("#delete-medication-submit").on("click", function () {
      $.ajax({
         url: "/api/medication/" + searchID,
         method: "DELETE"
      }).then(function () {
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

$("#update-button").on("click", function () {
   $("#update-medication").show();

   $("#update-search-submit").on("click", function () {

      userSearch = $("#drug-update-search").val().trim();

      $.get("/medication/" + userSearch, function (data) {

         console.log(userSearch);
         console.log(data.medication[0]);
         console.log(data.medication[0].Generic_Name);

      //    function populate(frm, data) {
      //       $.each(data, function(key, value){
      //          $('[name='+key+']', frm).val(value);
      //       });
      //    }
       

      // populate('#MyForm', data);

         $("#generic-name").val("value"(data.medication[0].Generic_Name));
         $("#brand-name").text(data.medication[0].Brand_Name);
         $("#class").text(data.medication[0].Class);
         $("#uses").text(data.medication[0].Uses);
         $("#side-effects").text(data.medication[0].Side_Effects);
         $("#rationale").text(data.medication[0].Rationale);
         $("#dc-plan").text(data.medication[0].DC_Plan);
         $("#withdrawal").text(data.medication[0].Withdrawal);
      });
   });
});