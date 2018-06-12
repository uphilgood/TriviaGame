$(document).ready(function () {

    var trivia = {
        questions: [
            {
                q: "Who won the 2017 NFL SuperBowl?",
                selected: false,
                options: 
                [{choice: "redskins",
                answer: false},
                {choice: "49ers",
                answer: false},
                {choice: "Patriots",
                answer: false},
                {choice: "Eagles",
                answer: true}]
            },

            {
                q: "What country hosted this year's Winter Olympics?",
                selected: false,
                options: 
                [{choice: "Germany",
                answer: false},
                {choice: "Korea",
                answer: true},
                {choice: "Russia",
                answer: false},
                {choice: "USA",
                answer: false}]
            },

            {
                q: "What team won the 2018 Stanley Cup?",
                selected: false,
                options: 
                [{choice: "Washington Capitals",
                answer: true},
                {choice: "Pittsburg Pengiuns",
                answer: false},
                {choice: "Las Vegas Golden Knights",
                answer: false},
                {choice: "San Jose Sharks",
                answer: false}]
            },

            {
                q: "What team did former Washington Redskins quarterback, Kirk Cousins, go to?",
                selected: false,
                options: 
                [{choice: "Detriot Lions",
                answer: false},
                {choice: "LA Rams",
                answer: false},
                {choice: "Minnesota Vikings",
                answer: true},
                {choice: "New York Giants",
                answer: false}]
               
            },

            {
                q: "What country is hosting this year's Fifa World Cup?",
                selected: false,
                options: 
                [{choice: "Germany",
                answer: false},
                {choice: "Korea",
                answer: false},
                {choice: "Russia",
                answer: true},
                {choice: "USA",
                answer: false}]
            }
        ],


        initialize: function () {
            $('#answer1').hide()
            $('#answer2').hide()
            $('#answer3').hide()
            $('#answer4').hide()
            $('#incorrect-message').hide()
            $('#correct-message').hide()
            randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
            indOfQuestion = this.questions.indexOf(randomQuestion)
            rightAnswer = '';
            $('#answer1').show()
            $('#answer2').show()
            $('#answer3').show()
            $('#answer4').show()
            $('#question').html(this.questions[indOfQuestion].q)
            $('#answer1').html(this.questions[indOfQuestion].options[0].choice)
            $('#answer2').html(this.questions[indOfQuestion].options[1].choice)
            $('#answer3').html(this.questions[indOfQuestion].options[2].choice)
            $('#answer4').html(this.questions[indOfQuestion].options[3].choice)

             if (indOfQuestion === 0) {
   
        $('#answer1').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer2').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer3').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer4').click(function () {
            $('#correct-message').show()
        })
    }  else if (indOfQuestion === 1) {
      
        $('#answer1').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer2').click(function () {
            $('#correct-message').show()
        })
        $('#answer3').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer4').click(function () {
            $('#incorrect-message').show()
        })
    }  else if (indOfQuestion === 2) {
     
        $('#answer1').click(function () {
            $('#correct-message').show()
        })
        $('#answer2').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer3').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer4').click(function () {
            $('#incorrect-message').show()
        })
    }  else if (indOfQuestion === 3) {
        
        $('#answer1').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer2').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer3').click(function () {
            $('#correct-message').show()
        })
        $('#answer4').click(function () {
            $('#incorrect-message').show()
        })
    }  else {
        
        $('#answer1').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer2').click(function () {
            $('#incorrect-message').show()
        })
        $('#answer3').click(function () {
            $('#correct-message').show()
        })
        $('#answer4').click(function () {
            $('#incorrect-message').show()
        })
    }
       
        },
            // $('#start').hide()

            // $("#answer4").click(function(){
            //     alert("Value: " + $("#answer4").html());
            // });
        
    };



    trivia.initialize();


    console.log(randomQuestion)


    $('#start').click(function () {
        trivia.initialize()
    })
  

})