$(document).ready(function () {
    
    var trivia = {
        questions: ["Who won the 2017 NFL SuperBowl?", 
        "What country is hosting this year's Fifa World Cup?", 
        "What country hosted this year's Winter Olympics?"],

        possibleAnswers: [
            ["redskins", "49ers", "Patriots", "Eagles"], 
            ["Germany", "Korea", "Russia", "USA"], 
            ["Spain", "Canada", "Korea", "China"]
        ],

        answers: ["Eagles", "Russia", "Korea"],

        initialize: function () {
            $('#answer1').hide()
            $('#answer2').hide()
            $('#answer3').hide()
            $('#answer4').hide()
        },

        newQuestion: function() {
            $('#answer1').html('')
            randomQuestion = this.questions[Math.floor(Math.random()*this.questions.length)];
            indOfQuestion = this.questions.indexOf(randomQuestion)
            rightAnswer = '';
            $('#answer1').show()
            $('#answer2').show()
            $('#answer3').show()
            $('#answer4').show()
            $('#question').html(randomQuestion)
            $('#answer1').html(this.possibleAnswers[indOfQuestion][0])
            $('#answer2').html(this.possibleAnswers[indOfQuestion][1])
            $('#answer3').html(this.possibleAnswers[indOfQuestion][2])
            $('#answer4').html(this.possibleAnswers[indOfQuestion][3])



            
            
            console.log(indOfQuestion)
        }
    };

   trivia.initialize();

    $('#show-question').click(function () {
        trivia.newQuestion()
        if (indOfQuestion === 0) {
            rightAnswer = "Eagles";
            alert("question1")
            $('#answer4').click(function() {
                alert("You got it!")
            })
        } else if (indOfQuestion === 1) {
            alert('question2')
        }

    })



    // jQuery(function($) {
    //     $('input:radio[name="xx"][value="is"]').click();
    //   });



    // var filterDay = $('#filterDay label.active input').val()



    // function initialize() {
    //     yourFighter = {
    //         name: [],
    //         healthPoints: 0,
    //         attackPower: 0,
    //         id: '',
    //         enemyId: '',
    //         viewPoints: ''
    //     }
    //     enemy = {
    //         name: [],
    //         healthPoints: 0,
    //         counterAttackPower: 0,
    //         id: '',
    //         viewPoints: ''
    //     }
    //     enemiesArray = ["enemies1", "enemies2", "enemies3", "enemies4"]
    //     enemiesLeft = [];
    //     newEnemyArray = []
    //     newEnemyString = ""
    //     enemyChosen = false;
    //     $("#fighter-1, #fighter-2, #fighter-3, #fighter-4").show();
    //     $("#enemies1, #enemies2, #enemies3, #enemies4, #chosen, #chooseEnemy, #vs").hide();
    //     $("#player1points, #player2points, #player3points, #player4points, #enemy1points, #enemy2points, #enemy3points, #enemy4points").hide();
    //     $(".btn-danger").hide();
    // }

    // initialize();

    // $('.card').click(function () {
    //     // alert(this.id);
    //     if (this.id == "fighter-1") {
    //         yourFighter.name = "Obi";
    //         yourFighter.id = this.id;
    //         yourFighter.healthPoints = 200;
    //         yourFighter.attackPower = 18;
    //         yourFighter.enemyId = "enemies1"
    //         yourFighter.viewPoints = 'player1points'
    //         $("#fighter-2,#fighter-3,#fighter-4, #choose").hide();
    //         $("#enemies2, #enemies3, #enemies4, #chosen, #chooseEnemy").show();


    //     } else if (this.id == "fighter-2") {
    //         yourFighter.name = "Darth Maul"
    //         yourFighter.id = this.id
    //         yourFighter.healthPoints = 175;
    //         yourFighter.attackPower = 24;
    //         yourFighter.enemyId = "enemies2"
    //         yourFighter.viewPoints = 'player2points'
    //         $("#fighter-1,#fighter-3,#fighter-4, #choose").hide();
    //         $("#enemies1, #enemies3, #enemies4, #chosen, #chooseEnemy").show();

    //     } else if (this.id == "fighter-3") {
    //         yourFighter.name = "Han Solo"
    //         yourFighter.id = this.id
    //         yourFighter.healthPoints = 300;
    //         yourFighter.attackPower = 20;
    //         yourFighter.enemyId = "enemies3"
    //         yourFighter.viewPoints = 'player3points'
    //         $("#fighter-1,#fighter-2,#fighter-4, #choose").hide();
    //         $("#enemies1, #enemies2, #enemies4, #chosen, #chooseEnemy").show();

    //     } else if (this.id == "fighter-4") {
    //         yourFighter.name = "Darth Vadar"
    //         yourFighter.id = this.id
    //         yourFighter.healthPoints = 325;
    //         yourFighter.attackPower = 24;
    //         yourFighter.enemyId = "enemies4"
    //         yourFighter.viewPoints = 'player4points'
    //         $("#fighter-1,#fighter-2,#fighter-3, #choose").hide();
    //         $("#enemies1, #enemies2, #enemies3, #chosen, #chooseEnemy").show();

    //     }
    //     enemiesLeft = enemiesArray.filter(word => word != yourFighter.enemyId);
    //     $("#" + yourFighter.viewPoints).show();
    //     $("#" + yourFighter.viewPoints).text("HEALTH POINTS " + yourFighter.healthPoints);
    //     $("#" + yourFighter.viewPoints).css({
    //         'font-weight': 'bold'
    //     });
    //     console.log(enemiesLeft)
    //     console.log(yourFighter)
    //     // console.log(enemiesLeft)

    // }).click(function () {

    //     if (yourFighter.name && this.id == "enemies1") {

    //         enemy.name = "Obi"
    //         enemy.id = this.id
    //         enemy.healthPoints = 200;
    //         enemy.counterAttackPower = 16;
    //         enemy.viewPoints = 'enemy1points'
    //         $("#enemies2,#enemies3,#enemies4, #chooseEnemy").hide();
    //         $(".btn-danger, #vs").show();

    //     } else if (yourFighter.name && this.id == "enemies2") {

    //         enemy.name = "Darth Maul"
    //         enemy.id = this.id
    //         enemy.healthPoints = 175;
    //         enemy.counterAttackPower = 20;
    //         enemy.viewPoints = 'enemy2points'
    //         $("#enemies1,#enemies3,#enemies4, #chooseEnemy").hide();
    //         $(".btn-danger, #vs").show();

    //     } else if (yourFighter.name && this.id == "enemies3") {
    //         enemy.name = "Han Solo"
    //         enemy.id = this.id
    //         enemy.healthPoints = 300;
    //         enemy.counterAttackPower = 25;
    //         enemy.viewPoints = 'enemy3points'
    //         $("#enemies1,#enemies2,#enemies4, #chooseEnemy").hide();
    //         $(".btn-danger, #vs").show();

    //     } else if (yourFighter.name && this.id == "enemies4") {

    //         enemy.name = "Darth Vadar"
    //         enemy.id = this.id
    //         enemy.healthPoints = 275;
    //         enemy.counterAttackPower = 18;
    //         enemy.viewPoints = 'enemy4points'
    //         $("#enemies1,#enemies2,#enemies3, #chooseEnemy").hide();
    //         $(".btn-danger, #vs").show();

    //     }
    //     enemiesLeft = enemiesLeft.filter(word => word != this.id);
    //     $("#" + enemy.viewPoints).show();
    //     $("#" + enemy.viewPoints).text("HEALTH POINTS " + enemy.healthPoints);
    //     $("#" + enemy.viewPoints).css({
    //         'font-weight': 'bold'
    //     });
    //     console.log(enemiesLeft)

    // });

    // function attack() {
    //     yourFighter.healthPoints -= enemy.counterAttackPower
    //     enemy.healthPoints -= yourFighter.attackPower
    //     yourFighter.attackPower += 6
    //     $("#" + yourFighter.viewPoints).text("HEALTH POINTS " + yourFighter.healthPoints);
    //     $("#" + enemy.viewPoints).text("HEALTH POINTS " + enemy.healthPoints);

    //     if (yourFighter.healthPoints <= 0) {
    //         alert("you lose, game over")
    //         initialize();
    //     }
    //     if (enemy.healthPoints <= 0) {
    //         enemiesLeft.forEach(function (e) {
    //             newEnemyArray.push("#" + e)
    //         })

    //         newEnemyString = newEnemyArray.toString()

    //         $(newEnemyString).show()
    //         $("#" + enemy.id).hide()
    //         $("#chooseEnemy").show()
    //         $(".btn-danger, #vs").hide();
    //         enemiesArray.splice(enemiesArray.indexOf(enemy.id), 1)
    //         console.log(enemiesArray)

    //         if (enemiesLeft.length === 0 && yourFighter.healthPoints > 0) {
    //             alert("you win! game over")
    //             initialize();
    //         }
    //     }
    //     console.log(yourFighter)
    //     console.log(enemiesLeft)
    // }

    // $("button").click(function () {
    //     attack();
    // });
})

