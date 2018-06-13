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
                [{choice: "Detroit Lions",
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


        random: function () {

            if (newArray.length === this.questions.length) {
                alert("GAME OVER")
                $('#start').show()
            }
            
           
            $('#answer1').hide()
            $('#answer2').hide()
            $('#answer3').hide()
            $('#answer4').hide()
            $('#start').hide()
            $('#incorrect-message').hide()
            $('#correct-message').hide()
            randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
            indOfQuestion = this.questions.indexOf(randomQuestion)
            this.questions[indOfQuestion].selected = true
            newArray.push(this.questions[indOfQuestion])
            $('#answer1').show()
            $('#answer2').show()
            $('#answer3').show()
            $('#answer4').show()
            $('#question').html(this.questions[indOfQuestion].q)
            $('#answer1').html(this.questions[indOfQuestion].options[0].choice)
            $('#answer2').html(this.questions[indOfQuestion].options[1].choice)
            $('#answer3').html(this.questions[indOfQuestion].options[2].choice)
            $('#answer4').html(this.questions[indOfQuestion].options[3].choice)

            
            run()
      

            console.log(this.questions)
        },

     checkCorrect: function () {
         

        if (indOfQuestion === 0 ) {
          
          if (this.getAttribute("data-name") == 4) {
            $('#correct-message').show()
            stop()
            
          }
         
        } 

        if (indOfQuestion === 1 ) {
            if (this.getAttribute("data-name") == 2) {
                $('#correct-message').show()
            stop()
          
            }
            
        }
        if (indOfQuestion === 2 ) {
            if (this.getAttribute("data-name") == 1) {
                $('#correct-message').show()
            stop()
            
            }
            
        }
        if (indOfQuestion === 3) {
            if (this.getAttribute("data-name") == 3) {
                $('#correct-message').show()
            stop()
            
            }
           
        }
        if (indOfQuestion === 4 ) {
            if (this.getAttribute("data-name") == 3) {
                $('#correct-message').show()
            stop()
            
            }
        
        }
       
     }
     
    };

    var newArray = [];

    function run() {
        number = 15;
        intervalId = ''

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
  
      //  The decrement function.
      function decrement() {
  
        //  Decrease number by one.
        number--;
  
        //  Show the number in the #show-number tag.
        $("#show-number").html("<h2>" + number + "</h2>");
  
  
        //  Once number hits zero...
        if (number === 0) {
  
          //  ...run the stop function.
          stop();
  
          //  Alert the user that time is up.
          alert("Time Up!");
         
          trivia.random()
        }
      }
  
      //  The stop function
      function stop() {
  
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      }


 

    $(document).on("click", ".btn-primary", trivia.checkCorrect);


    trivia.random();


    console.log(randomQuestion)


    $('#start').click(function () {
        trivia.random()
    })

    $('#next-question').click(function () {
        trivia.random()
    })
  

})