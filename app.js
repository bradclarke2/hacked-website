let buttonMoved = false;
let serverResponse = "";

$(document).ready(function () {
    // init();
    intro();


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
    console.log("button clicked")
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
    if (localStorage.getItem("antiHackerName") === null) {
       // localStorage.setItem("antiHackerName", prompt("Before we begin, Whats your name?"))
        intro();
    }
    if (localStorage.getItem("pageStyle") === "hacked") {
        styleSwap("hacked");
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

function intro () {

    let player_1 = "";
    let player_2 = "";

    Swal.mixin({
        confirmButtonText: 'Next &rarr;',
        allowOutsideClick: false,
        showCancelButton: false,
        progressSteps: ['1', '2', '3', '4']
    }).queue([
        {
            input: 'text',
            type: 'question',
            title: 'Before we start...',
            text: "What is Player 1's first name?"
        },
        {
            input: 'text',
            type: 'question',
            title: 'Thanks',
            text: "Now, what is Player 2's first name?"
        },
        {
            input: 'text',
            type: 'question',
            title: 'Team Name',
            text: "Now, what is your cool team name?"
        },
        {
            type:'warning',
            title: 'Cookies!',
            text: "Don't clear any of your cookies or local storage during the game!",
            confirmButtonText: 'OK I promise'
        }
    ]).then((result) => {
        if (result.value) {
            Swal.fire({
                type: 'success',
                title: 'All done!',
                html:
                    'Thanks ' +
                    result.value[0].capitalize() +
                    ' & ' +
                    result.value[1].capitalize() +
                    ' your settings have been saved.',
                confirmButtonText: 'Start!'
            });
            localStorage.setItem("player_1", result.value[0].capitalize());
            localStorage.setItem("player_2", result.value[1].capitalize());
            localStorage.setItem("team_name", result.value[2].capitalize());
        }
        uploadPlayerInfo();
    })


}

function uploadPlayerInfo() {
    Swal.fire({
        position: 'top-end',
        title: 'Contacting Server',
        showConfirmButton: false,
        timer: 1000,
        onOpen: () => {
            Swal.stopTimer();
            Swal.showLoading();
            let request = new XMLHttpRequest();
            request.open("GET", "URL/hello", false);
            request.send();
            //serverResponse = request.status + " " + request.statusText;
            serverResponse = request.responseText;
            //localStorage.setItem("serverResponse", request.responseText);
            Swal.resumeTimer();
        },
        onClose: () => {
            uploadSuccess();
        }
    })
}

function uploadSuccess() {
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Success',
        text: serverResponse,
        showConfirmButton: false,
        timer: 1500
    })
}
