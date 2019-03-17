$(document).ready(function () {
    $("#add-medication").hide();
    $("#delete-medication").hide();
    $("#update-medication").hide();
});

$("#add-button").on("click", function () {
    $("#add-medication").show();
});

$("#add-submit").on("click", function (event) {
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

$("#update-button").on("click", function () {
    $("#update-medication").show();
});

