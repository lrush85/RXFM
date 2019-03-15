$(function () {
    $(".submit").on("click", function (event) {
        var id = $(this).data("id");
        var dbAdmin = $(this).data("admin");

        // Send the POST request.
        $.ajax("/api/amin", {
            type: "POST",
            data: data
        }).then(
            function () {
                console.log("admin");
                location.reload();
            });
    }
    });