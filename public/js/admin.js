$(function () {
    $(".submit").on("click", function (event) {
        var id = $(this).data("id");
        var addedMedication = $(this).data("addedMedication");


        $(".add-medication").on("submit", function(event) {
            event.preventDefault();

            var newMedication = {
                Generic_Name: $("#generic-name").val().trim(),
                Brand_Name: $("#brand-name").val().trim(),
                Class: $("#class").val().trim(),
                Uses: $("#uses").val().trim(),
                Side_Effects: $("#side-effects").val().trim(),
                Rationale: $("#rational").val().trim(),
                DC_Plan: $("#dc-plan").val().trim(),
                Widthdrawl: $("#widthdrawl").val().trim(),
            };

            // Send the POST request.
        $.ajax("/api/amin", {
            type: "POST",
            data: newMedication
        }).then( function () {
            console.log("Created a new medication");
            location.reload();
            });
        });
    });