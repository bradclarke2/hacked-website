let buttonMoved = false;
let serverResponse = "";
let serverResponseStatusCode = "";
let serverResponceStatusText = "";

let infoCentre = new InfoCentre();
let requestCentre = new RequestCentre();
let scoreCentre = new ScoreCentre();

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
});

function checkUserName() {

    if (document.getElementById("exampleInputEmail1").value === "connectadmin@tesco.com" && checkPassword(document.getElementById("exampleInputPassword1").value) === true) {
        scoreCentre.scoreForAnswer(document.getElementById("exampleInputEmail1").value);
        infoCentre.achievementUnlock("Achievement Unlocked", "You logged in!",4000);
        localStorage.setItem("loggedIn", "true");
    } else {
        infoCentre.toast("error","Error","Incorrect Login Credentials",2000)
    }

    buttonFixed();

}

function checkPassword(password = "empty") {

    let data = {
        username: "does not matter",
        password : password
    };
    requestCentre.jsonRequest("Post", "http://51.143.154.149:8080/code-group/5d64ffb094fc6a023fd700a6/login", data);

    if (localStorage.getItem("serverResponse") === "success") {
        return true
    }
}

function buttonFixed() {
     if (localStorage.getItem("button") !== "fixed") {
         localStorage.setItem("button", "fixed");
         scoreCentre.scoreForRogueButton();
         achievementUnlock("Achievement Unlocked!", "You fixed the rogue button", 4000);
     }
}

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

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
    }
}

function init() {
    if (localStorage.getItem("pageStyle") === "hacked") {
        styleSwap("hacked");
    } else {
       //intro(); //TODO remove this before launch
    }
    console.log("It looks like you've been hacked, Dont worry, the Hacker has left a trail\n\ncall clue1(); to begin getting your site back!\n\n- Not the Hacker... promise!");
}

$(function () {
    $(".glitch-img").mgGlitch({
        destroy: false,
        glitch: true,
        scale: true,
        blend: true,
        blendModeType: 'hue',
        glitch1TimeMin: 200,
        glitch1TimeMax: 400,
        glitch2TimeMin: 10,
        glitch2TimeMax: 100,

    });
});

function intro() {
    infoCentre.setUp();
}

function achievementUnlock(title, text, timer) {
    infoCentre.achievementUnlock(title, text, timer);
}

function testhttp() {
    requestCentre.httpRequest("get","/hello");
}

function forgotPassword() {
    infoCentre.toast("info","Hint","I wonder if any requests are being made when logging in? 🤔", 3000);
}

function forgotEmail() {
    infoCentre.toast("info", "Hint", "I wonder if there is any email validation in the code.. 🤔")
}

function loggedIn() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.replace("index.html")
    }
}
