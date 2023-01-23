var gameArea = document.getElementById("gameArea");
var questionArea = document.getElementById("questionArea");
var answerArea = document.getElementById("answerArea");
var correctSpan = document.getElementById("correctSpan");
var incorrectSpan = document.getElementById("incorrectSpan");
var timerSpan = document.getElementById("timerSpan");
var startButton = document.getElementById("startButton");
var interval = 0;
var wins = 0;
var loss = 0;
var timer = 0;
var index = 0;

var questionArray = [
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: {
      var: false,
      let: false,
      "var and let": true,
      "None of the above": false,
    },
  },
  {
    question: "Javascript is an _______ language?",
    answers: {
      "Object-Oriented": true,
      "Object-Based": false,
      Procedural: false,
      "None of the above": false,
    },
  },
  {
    question:
      "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    answers: {
      Boolean: false,
      undefined: false,
      Object: true,
      Integer: false,
    },
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: {
      const: true,
      var: false,
      let: false,
      constant: false,
    },
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    answers: {
      lies: false,
      "is in": false,
      exists: false,
      in: true,
    },
  },
];

//This function is the function that starts the game.  When the user clicks the start button we we start runing this code/functions
startButton.addEventListener("click", timerFunction);
function timerFunction() {
  reset();
  renderQuestion(questionArray, index);
  changeSectionVisibility(gameArea, "visible");
  changeSectionVisibility(startButton, "hidden");
  timer = 60;
  interval = setInterval(function startTimer() {
    if (timer > 0) {
      timer--;
      timerSpan.textContent = timer;
    }
    if (timer == 0) {
      clearInterval(interval);
      gameOver();
    }
  }, 1000);
}

// This function will take an array name and index and display the question and answers for that index on the DOM
var renderQuestion = function (array, index) {
  var questionH1 = document.createElement("h1");
  questionH1.textContent = questionArray[index].question;
  questionArea.appendChild(questionH1);

  for (var key in array[index].answers) {
    //console.log(key);
    var newButton = document.createElement("button");
    newButton.textContent = key;
    newButton.setAttribute("class", "answerButton");
    newButton.setAttribute("data-correct", array[index].answers[key]);
    answerArea.appendChild(newButton);
    //console.log(array[index].answers[key])
  }
};

//This function is used each time an answer is clicked on to check if the answer is correct.
answerArea.addEventListener("click", function (event) {
  var validClick = event.target.getAttribute("class");
  var answerCorrect = event.target.getAttribute("data-correct");
  console.log(
    "The target class attribute is:",
    validClick,
    "and the answer is:",
    answerCorrect
  );
  if (validClick !== "answerButton") {
    return;
  } else {
    updateScore(answerCorrect);
    removeAllChildNodes(questionArea);
    removeAllChildNodes(answerArea);
    index++;
    if (index < questionArray.length) {
      renderQuestion(questionArray, index);
    } else {
      gameOver();
    }
  }
});

//This function is used to update the score variables
function updateScore(text) {
  if (text === "true") {
    wins++;
    correctSpan.textContent = wins;
    // alert("Correct!");
  } else {
    loss++;
    incorrectSpan.textContent = loss;
    // alert("Incorrect");
  }
}

//Use this function to clear out the current question and answer, so we can replace the area with the new question and answers
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//This function is used to show/hide elements
function changeSectionVisibility(section, visibility) {
  section.style.visibility = visibility;
}

//Use this function when the users runs out of time or questions
function gameOver() {
  removeAllChildNodes(questionArea);
  removeAllChildNodes(answerArea);
  clearInterval(interval);
  changeSectionVisibility(gameArea, "hidden");
  changeSectionVisibility(startButton, "visible");
}

//This function is used to reset the variable values when the user tries to start a new game.
function reset() {
  interval = 0;
  wins = 0;
  loss = 0;
  timer = 0;
  index = 0;
  correctSpan.textContent = wins;
  incorrectSpan.textContent = loss;
}
