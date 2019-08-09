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

function intro() {

    let player_1 = "";
    let player_2 = "";

    Swal.mixin({
        confirmButtonText: 'Next &rarr;',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showCancelButton: false,
        progressSteps: ['1', '2', '3', '4', '5', '!!!']
    }).queue([
        {
            type: 'info',
            title: 'Before we start...',
            text: "There is a few things we need to get set up..."
        },
        {
            input: 'text',
            type: 'question',
            title: 'Player 1 Name',
            inputPlaceholder: 'Player 1 Name',
            text: "What is Player 1's first name?",
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to enter a name!'
                }
            }
        },
        {
            animation: false,
            input: 'text',
            type: 'question',
            title: 'Player 2 Name',
            inputPlaceholder: 'Player 2 Name',
            text: "Now, what is Player 2's first name?",
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to enter a name!'
                }
            }
        },
        {
            animation: false,
            input: 'text',
            type: 'question',
            title: 'Team Name',
            inputPlaceholder: 'Team Name',
            text: "Now, what is your cool team name?",
            inputValidator: (value) => {
                if (!value) {
                    return "Oh come on, i'm sure you can think of one!"
                }
            }
        },
        {
            animation: false,
            type: 'warning',
            title: 'Cookies!',
            text: "Don't clear any of your cookies or local storage during the game!",
            confirmButtonText: 'OK'
        },
        {
            animation: false,
            type: 'error',
            title: 'SERIOUSLY THO!',
            text: "Don't do it, it will break the game, we didnt have long to make this!",
            input: 'checkbox',
            inputValue: 0,
            inputPlaceholder:
                'I Promise',
            confirmButtonText:
                'Continue <i class="fa fa-arrow-right></i>',
            inputValidator: (result) => {
                return !result && 'You need to promise!'
            }
        }
    ]).then((result) => {
        if (result.value) {
            localStorage.setItem("player_1", result.value[1].capitalize());
            localStorage.setItem("player_2", result.value[2].capitalize());
            localStorage.setItem("team_name", result.value[3].capitalize());
        }
        uploadPlayerInfo();
    })


}

function uploadPlayerInfo() {
    Swal.fire({
        toast: true,
        position: 'top-end',
        title: 'Contacting Server',
        showConfirmButton: false,
        timer: 1000,
        onOpen: () => {
            Swal.stopTimer();
            Swal.showLoading();

            // let data = {
            //     users: [
            //         {
            //             forename: localStorage.getItem("player_1"),
            //             surname: ""
            //         }, {
            //             forename: localStorage.getItem("player_2"),
            //             surname: ""
            //         }
            //     ]
            // };
            // let request = new XMLHttpRequest();
            // request.open("POST", "URL:8080/code-group", false);
            // request.setRequestHeader("Content-type", "application/json");
            // request.send(JSON.stringify(data));
            // //serverResponse = request.status + " " + request.statusText;
            // serverResponse = request.responseText;
            //localStorage.setItem("serverResponse", request.responseText);
            Swal.resumeTimer();
        },
        onClose: () => {
            uploadSuccess(localStorage.getItem('team_name'));
        }
    })
}

function uploadSuccess(teamname) {
    Swal.fire({
        toast: true,
        type: 'success',
        position: 'top-end',
        title: 'Success',
        text: 'Team "' + teamname + '" created',
        showConfirmButton: false,
        timer: 4000
    })
}

function achievementUnlocked(reason) {
    Swal.fire({
        animation: false,
        toast: true,
        position: 'top-end',
        title: 'Achievement Unlocked!',
        imageUrl: 'public/images/achievement.png',
        text: reason,
        showConfirmButton: false,
        timer: 3000,
        customClass: {
            popup: 'animated bounceIn'
        },
    })
}
