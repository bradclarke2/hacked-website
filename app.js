let buttonMoved = false;

$(document).ready(function () {
    init();
});

$(function () {
    $("#submitButton").on({
        mouseover: function () {
            if (buttonMoved === false) {
                $(this).css({
                    left: 300 + "px"
                });
                buttonMoved = true;
            } else {
                $(this).css({
                    left: 0 + "px"
                });
                buttonMoved = false;
            }
        }
    });
});

$(function () {
    $("form").submit(function () {
        console.log("i have been clicked")
        //TODO add some complicated validation check here
    });
})

function checkUserName() {
    let username = document.getElementById("exampleInputEmail1");
    if (username.value.toString() === "Steven@connect.com") {
        console.log("Correct")
    }
}

function trollFace() {
    console.log("░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄\n" +
        "░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄\n" +
        "░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█\n" +
        "░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█\n" +
        "░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█\n" +
        "█▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█\n" +
        "█▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█\n" +
        "░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█\n" +
        "░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█\n" +
        "░░░█░░██░░▀█▄▄▄█▄▄█▄████░█\n" +
        "░░░░█░░░▀▀▄░█░░░█░███████░█\n" +
        "░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█\n" +
        "░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█\n" +
        "░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█\n" +
        "░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█")
}

function clue1() {
    console.log("HA you thought it be that easy " + localStorage.getItem("antiHackerName") + "!?, fix it yourself!\n\n-SuperHACKERZZZZZZ2K19");
    trollFace();
}

function styleSwap(sheet) {
    if (sheet === "hacked") {
        document.getElementById("pageStyle").setAttribute("href", "public/styles/hacked.css");
        document.getElementById("tesco_logo").style.display = "none";
        document.getElementById("logo_text").style.display = "none";
        document.getElementById("home_icon").style.display = "none";
        document.getElementById("hacked_logo").style.display = "block";
        document.getElementById("video").style.display = "block";
    }
}

function init() {
    if (localStorage.getItem("antiHackerName") === null) {
        localStorage.setItem("antiHackerName", prompt("Before we begin, Whats your name?"))
    }
    if (localStorage.getItem("pageStyle") === "hacked") {
        styleSwap("hacked");
    }
    console.log("It looks like you've been hacked, Dont worry, the Hacker has left a trail\n\ncall clue1(); to begin getting your site back!\n\n- Not the Hacker... promise!");

}
