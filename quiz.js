(function(){

    var data = {
        quizContent: [
            {
                question: "Qn.1] Inside which HTML element do we put the JavaScript?",
                answer1: "js",
                answer2: "jScript",
                answer3: "scripting",
				answer4: "script",
                correctAnswer: 4
            },
            {
                question: " Qn.2] What is the correct JavaScript syntax to write 'Hello World'?",
                answer1: "System.out.println('Hello World')",
                answer2: "println ('Hello World')",
                answer3: "document.write('Hello World')",
				answer4: "Console.Log('hello world')",
                correctAnswer: 3
            },
            {
                question: " Qn.3] ++ operator in Java Script is ____ Operator.",
                answer1: "Unary",
                answer2: "Positive",
                answer3: "Increment",
				answer4: "Addition",
                correctAnswer: 1
            },
            {
                question: "Qn.4] Live wire java script is also called _________side Java Script.",
                answer1: "client",
                answer2: "Server",
                answer3: "Website",
                answer4: "Live wire",
                correctAnswer: 2
            },
            {
                question: " Qn.5] ______event gets activated when a component looses focus.",
                answer1: "onfocus",
                answer2: "onblur",
                answer3: "onabort",
				answer4: "onclose",
                correctAnswer: 1
            },
            {
                question: " Qn.6] JavaScript is which type of language?",
                answer1: "High-level",
                answer2: "Assembly-language",
                answer3: "Object-Based",
				answer4: "Object-Oriented",
                correctAnswer: 3
            },
            {
                question: " Qn.7]  Which of the following is not considered a JavaScript operator?  ?",
                answer1: "new",
                answer2: "typedef",
                answer3: "delete",
				answer4: "this",
                correctAnswer: 1
            },
            {
                question: " Qn.8] Which of the following are the errors in JavaScript ?",
                answer1: "Load time errors",
                answer2: "Logical Errors",
                answer3: "Run time errors",
				answer4: "All of the above",
                correctAnswer: 4
            },
            {
                question: " Qn.9] Local Browser used for validations on the Web Pages uses ?",
                answer1: "Html",
                answer2: "js",
                answer3: "css",
                answer4: "java",
                correctAnswer: 2
            },
            {
                question: "Qn.10] Javascript is interpreted by ",
                answer1: "server",
                answer2: "object",
                answer3: "client",
				answer4: "None of the above",
                correctAnswer: 3
            },
            {
                question: " Qn.11]  JavaScript can be written ",
                answer1: "Directy into JS File and included into Html",
                answer2: "Directly on the server page",
                answer3: "Directly into Html pages",
				answer4: "directly into the css file",
                correctAnswer: 1
            },
            {
                question: " Qn.12]  JavaScript Code can be called by using",
                answer1: "RMI",
                answer2: "Preprocessor",
                answer3: "Triggered Event",
				answer4: "function/method",
                correctAnswer: 4
            },
            {
                question: " Qn.13]  JavaScript Code can be called by using",
                answer1: "the head tag",
                answer2: "the head or body",
                answer3: "the title or head",
                answer4: "after the body tag",
                correctAnswer: 2
            },
            {
                question: "Qn.14] The ‘$’ present in the RegExp object is called a ____________ ",
                answer1: "character",
                answer2: "matcher",
                answer3: "metadata",
				answer4: "metacharacter",
                correctAnswer: 4
            },
            {
                question: " Qn.15] The regular expression to match any one character not between the brackets is __________?",
                answer1: "[..]",
                answer2: "[^..]",
                answer3: "[^]",
				answer4: "[\D]",
                correctAnswer: 2
            },
            {
                question: " Qn.16] Which company developed JavaScript? ",
                answer1: "Sun Microsystems",
                answer2: "IBM",
                answer3: "Bell lab",
				answer4: "Netscape",
                correctAnswer: 1
            },
            {
                question: " Qn.17] JavaScript is which type of scripting language ",
                answer1: "client",
                answer2: "Server",
                answer3: "Website",
                answer4: "Live wire",
                correctAnswer: 2
            },
            {
                question: "Qn.18] Which of the following is type of Cookie ",
                answer1: "Sesssion and persistantant",
                answer2: "session and  cookie",
                answer3: "Persistent and session",
				answer4: "client and sever",
                correctAnswer: 3
            },
            {
                question: " Qn.19]which method is used for opening window in javascript ",
                answer1: "window.open()",
                answer2: "Window.opens()",
                answer3: "Windows.open()",
				answer4: "windows.opens()",
                correctAnswer: 1
            },
            {
                question: " Qn.20] which of the following is not a object of window ",
                answer1: "Location",
                answer2: "History",
                answer3: "document",
				answer4: "option",
                correctAnswer: 4
            },
            {
                question: " Qn.21]Javascript is is server side scripting language ",
                answer1: "true",
                answer2: "false",
               
                correctAnswer: 2
            },
{
                question: " Qn.21] The ‘[abc]’ present in the RegExp object is called a ____________ ",
                answer1: "metacharacter",
                answer2: "character classes",
                answer3: "quantifires",
                answer4: "Live wire",
                correctAnswer: 2
            },
            {
                question: " Qn.23] What is the most essential purpose of parentheses in regular expressions? ",
                answer1: " Define pattern matching techniques",
                answer2: " Define subpatterns within the complete pattern",
                answer3: "Define portion of strings in the regular expression",
                answer4: "matching the complete string",
                correctAnswer: 2
            },
            {
                question: "Qn.24] The method that performs the search-and-replace operation to strings for pattern matching is _______",
                answer1: " search and replace()",
                answer2: "add()",
                answer3: "edit()",
				answer4: "replace",
                correctAnswer: 4
            },
            {
                question: "Qn.25 What does /[^(]* regular expression indicate",
                answer1: "Match one or more characters that are not open parenthesis",
                answer2: "Match zero or more characters that are open parenthesis",
                answer3: "Match zero or more characters that are not open parenthesis",
				answer4: "Match one or more characters that are open parenthesis",
                correctAnswer: 3
            }
        ],
        points: 0
    };
    
    var display = {
        getApp: document.getElementById('app'),

        // Updates DOM on start/restart of the quiz
        mainPage: function() {
            var newEl = '<div class="quest-number"><p id="questNumber"></p></div><h1 id="questionDisplay" class="h3"></h1>';
                newEl += '<ul><li><label><input type="radio" name="answers" id="input1" value="1"><span class="outer"><span class="inner"></span></span><div id="answerDisplay1"></div></label></li>';
                newEl += '<li><label><input type="radio" name="answers" id="input2" value="2"><span class="outer"><span class="inner"></span></span><div id="answerDisplay2"></div></label></li>';       
                newEl += '<li><label><input type="radio" name="answers" id="input3" value="3"><span class="outer"><span class="inner"></span></span><div id="answerDisplay3"></div></label></li>';
                newEl += '<li><label><input type="radio" name="answers" id="input4" value="4"><span class="outer"><span class="inner"></span></span><div id="answerDisplay4"></div></label></li></ul>';
                newEl += '<div class="points-wrap"><p id="currentPoints"></p></div>';

            this.getApp.innerHTML = newEl;
        },

        // Updates DOM with each question
        updateMainPage: function() {
            var getQuestNumber = document.getElementById('questNumber'),
                getQuestion = document.getElementById('questionDisplay'),
                getAnswer1 = document.getElementById('answerDisplay1'),
                getAnswer2 = document.getElementById('answerDisplay2'),
                getAnswer3 = document.getElementById('answerDisplay3'),
                getAnswer4 = document.getElementById('answerDisplay4'),
                getCurrentPoints = document.getElementById('currentPoints'),
                sumOfQuestions = data.quizContent.length;
                
            getQuestNumber.innerHTML = control.count + 1 + '/' + sumOfQuestions;
            getQuestion.innerHTML = data.quizContent[control.count].question;
            getAnswer1.innerHTML = data.quizContent[control.count].answer1;
            getAnswer2.innerHTML = data.quizContent[control.count].answer2; 
            getAnswer3.innerHTML = data.quizContent[control.count].answer3;           
            getAnswer4.innerHTML = data.quizContent[control.count].answer4;
            getCurrentPoints.innerHTML = 'Points:' + ' ' + data.points;
            this.newElement('button', 'submit', 'Submit Answer');
        },
        addAnswer: function(showMessage) {
            var sumOfQuestions = data.quizContent.length;

            if(showMessage === 'correct') {
                this.newElement('p', 'showAnswer', 'Correct Answer!');
            } else {
                this.newElement('p', 'showAnswer', 'Incorrect Answer!');
            }

            if (control.count < sumOfQuestions-1) {
                this.newElement('button', 'nextQuest', 'Next question');
            } else {
                this.newElement('button', 'result', 'See your result');
            }
        },
        removeAnswer: function(event) 
         {
            var getShowAnswer = document.getElementById('showAnswer');
            var getShowAnswerParent = getShowAnswer.parentNode;
            getShowAnswerParent.removeChild(getShowAnswer);
            var clickedEl = event.target;
            var clickedElParent = clickedEl.parentNode;
            clickedElParent.removeChild(clickedEl);
            var radioButtons = document.getElementsByName('answers');
            var allRadioButtons = radioButtons.length;
            var i;

            for(i = 0; i < allRadioButtons; i++) {
                radioButtons[i].checked = false;
            }
        },

        // Displays final page of the quiz
        resultPage: function() {
            this.getApp.innerHTML = '<h1 class="h3">You have ' + data.points +'/'+data.quizContent.length+ ' question(s) answered correctly</h1>';
            this.newElement('button', 'restart', 'Restart Quiz');
        },
        newElement: function(elem, elemId, elemText) {
            var newElem = document.createElement(elem);
            var newElemText = document.createTextNode(elemText);
            newElem.appendChild(newElemText);
            newElem.id = elemId;
            this.getApp.appendChild(newElem);
        }
    };

    var control = {
        init: function() {
            var start = document.getElementById('start') || document.getElementById('restart');
            start.addEventListener('click', function() {
                display.mainPage();
                control.update();
            }, false);
        },
        update: function() {
            display.updateMainPage();
            var submit = document.getElementById('submit');
            submit.addEventListener('click', this.checkAnswer, false);
        },

        /**
        * Alerts if none of the radios is checked on submit 
        * Verifies correct/incorrect answer
        * Directs quiz to the next question or to the final page
        */
        checkAnswer: function(event) {
            var radioButtons = document.getElementsByName('answers'),
                allRadioButtons = radioButtons.length,
                isChecked = false,
                checkedRadio,
                clickedEl = event.target,
                clickedElParent = clickedEl.parentNode,
                i;

            for (i = 0; i < allRadioButtons; i++) {
                if (radioButtons[i].checked) {
                    isChecked = true;
                    checkedRadio = +radioButtons[i].value;
                }
            }

            if (isChecked === false) {
                alert('Please choose the answer!');
            } else {
                clickedElParent.removeChild(clickedEl);
                if (checkedRadio === data.quizContent[control.count].correctAnswer) {
                    display.addAnswer('correct');
                    data.points++;
                } else {
                    display.addAnswer();
                }

                var nextQuestion = document.getElementById('nextQuest'),
                    result = document.getElementById('result');

                if (nextQuestion) {
                    nextQuestion.addEventListener('click', function(event) {
                        control.count++;
                        display.removeAnswer(event);
                        control.update();
                    }, false);
                } else {
                    result.addEventListener('click', function() {
                        display.resultPage();
                        control.init();
                        control.count = 0;
                        data.points = 0;
                    }, false);
                }
            }
        },

        // Used for incrementing/looping through the quiz questions and answers
        count: 0
    };

    control.init();

})();