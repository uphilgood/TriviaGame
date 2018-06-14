$(document).ready(function () {
    var newArray = [];
    var thisQuestionAnswer = '';
    var yourPoints = 0;
    var totalNumOfQuestions = 5
    var trivia = {
        questions: [{
                q: "Who won the 2017 NFL SuperBowl?",
                selected: false,
                options: [{
                        choice: "redskins",
                        answer: ''
                    },
                    {
                        choice: "49ers",
                        answer: ''
                    },
                    {
                        choice: "Patriots",
                        answer: ''
                    },
                    {
                        choice: "Eagles",
                        answer: "Eagles"
                    }
                ]
            },

            {
                q: "What country hosted this year's Winter Olympics?",
                selected: false,
                options: [{
                        choice: "Germany",
                        answer: ''
                    },
                    {
                        choice: "Korea",
                        answer: "Korea"
                    },
                    {
                        choice: "Russia",
                        answer: ''
                    },
                    {
                        choice: "USA",
                        answer: ''
                    }
                ]
            },

            {
                q: "What team won the 2018 Stanley Cup?",
                selected: false,
                options: [{
                        choice: "Washington Capitals",
                        answer: "Washington Capitals"
                    },
                    {
                        choice: "Pittsburg Pengiuns",
                        answer: ''
                    },
                    {
                        choice: "Las Vegas Golden Knights",
                        answer: ''
                    },
                    {
                        choice: "San Jose Sharks",
                        answer: ''
                    }
                ]
            },

            {
                q: "What team did former Washington Redskins quarterback, Kirk Cousins, go to?",
                selected: false,
                options: [{
                        choice: "Detroit Lions",
                        answer: ''
                    },
                    {
                        choice: "LA Rams",
                        answer: ''
                    },
                    {
                        choice: "Minnesota Vikings",
                        answer: "Minnesota Vikings"
                    },
                    {
                        choice: "New York Giants",
                        answer: ''
                    }
                ]

            },

            {
                q: "What country is hosting this year's Fifa World Cup?",
                selected: false,
                options: [{
                        choice: "Germany",
                        answer: ''
                    },
                    {
                        choice: "Korea",
                        answer: ''
                    },
                    {
                        choice: "Russia",
                        answer: "Russia"
                    },
                    {
                        choice: "USA",
                        answer: ''
                    }
                ]
            }
        ],
        random: function () {
            if (newArray.length === this.questions.length) {
                alert("GAME OVER")
                $('#start').show()
            }
            $('#buttons-view').empty()
            $('#right').hide()
            $('#start').hide()
            $("#points").html("<h2>" + "Correct Questions: " + yourPoints + "/" + totalNumOfQuestions +  "</h2>");
            thisQuestionAnswer = ''
            randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
            indOfQuestion = this.questions.indexOf(randomQuestion)

            this.questions[indOfQuestion].options.forEach(choice => {

                var a = $("<button>")
                a.addClass("btn btn-primary").attr

                ({
                    dataname: choice.answer,
                    id: choice.choice
                }).text(choice.choice)

                $('#buttons-view').append(a)
                console.log(choice)
            })

            console.log(randomQuestion)
            $('#question').html(this.questions[indOfQuestion].q)

            // this.questions[indOfQuestion].selected = true;
            newArray = this.questions.splice(indOfQuestion, 1)

            run()
        },

        checkCorrect: function () {

            if (this.getAttribute("dataname") == this.getAttribute("id")) {
                yourPoints++
                console.log(this.getAttribute("id"))
                $('#right').show()
                stop()
            } else {
                alert("wrong, keep trying")
            }
 
        }
    };

    function run() {
        number = 15;
        intervalId = ''

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {  //  The decrement function.
        
        number--;  //  Decrease number by one.
        $("#show-number").html("<h2>" + number + "</h2>"); //  Show the number in the #show-number tag.
        if (number === 0) {  //  Once number hits zero...
            stop(); //  ...run the stop function.
            alert("Time Up!"); //  Alert the user that time is up.
            trivia.random()
        }
    }
    
    function stop() {  //  The stop function
        clearInterval(intervalId);
    }

    $(document).on("click", ".btn", trivia.checkCorrect);

    trivia.random();

    $('#start').click(function () {
        trivia.random()
    })

    $('#next-question').click(function () {
        trivia.random()
    })

    $('#next-question2').click(function () {
        trivia.random()
    })

})