$(function () {
    $(".submit").on("click", function (event) {
        var id = $(this).data("id");
        var addedMedication = $(this).data("addedMedication");


        $(".add-medication").on("submit", function(event) {
            event.preventDefault();

            var newMedication = {
                genericName: $("#generic-name").val().trim(),
                brandName: $("#brand-name").val().trim(),
                class: $("#class").val().trim(),
                uses: $("#uses").val().trim(),
                sideEffects: $("#side-effects").val().trim(),
                rational: $("#rational").val().trim(),
                dcPlan: $("#dc-plan").val().trim(),
                widthdrawl: $("#widthdrawl").val().trim()
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