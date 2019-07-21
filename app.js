$(document).ready(function () {
    var troll = `instructions go here`;
    console.log(troll);
});

$(function () {
    $("#submitButton").on({
        mouseover: function () {
            $(this).css({
                left: (Math.random() * $(window).width()) + "px",
                top: (Math.random() * $(window).width()) + "px",
            });
        }
    });
});

$(function () {
    $("form").submit(function () {
        console.log("i have been clicked")
        //TODO add some complicated validation check here
    });
})
