class InfoCentre {

    toast(type, title, text, timer) {
        Swal.fire({
            toast: true,
            type: type,
            position: 'top-end',
            title: title,
            text: text,
            showConfirmButton: false,
            timer: timer
        })
    }

    achievementUnlock(title, text, timer) {

        Swal.fire({
            animation: false,
            height: 100,
            toast: true,
            position: 'top-end',
            title: title,
            imageUrl: 'public/images/achievement.png',
            text: text,
            showConfirmButton: false,
            timer: timer,
            customClass: {
                popup: 'animated bounceIn'
            },
        })
    }

    setUp() {
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
            this.uploadPlayerInfo()
        })
    }

    uploadPlayerInfo() {
        Swal.fire({
            toast: true,
            position: 'top-end',
            title: 'Contacting Server',
            showConfirmButton: false,
            timer: 1000,
            onOpen: () => {
                Swal.stopTimer();
                Swal.showLoading();

                let data = {
                    users: [
                        {
                            forename: localStorage.getItem("player_1"),
                            surname: ""
                        }, {
                            forename: localStorage.getItem("player_2"),
                            surname: ""
                        }
                    ]
                };
                RequestCentre.jsonRequest('POST','#######',data);
                Swal.resumeTimer();
            },
            onClose: () => {

                infoCentre.toast('success','Success','Team ' + localStorage.getItem('team_name') + ' created', 4000 );
            }
        })
    }

}
