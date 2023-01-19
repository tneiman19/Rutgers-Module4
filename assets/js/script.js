var questionArea = document.getElementById("questionArea");
var answerArea = document.getElementById("answerArea");

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

renderQuestion(questionArray, index);


//We may use this in a later function to clear out the current children and replace with the new questions children
// function removeAllChildNodes(parent) {
//     while (parent.firstChild) {
//         parent.removeChild(parent.firstChild);
//     }
// }

// removeAllChildNodes(questionArea)
// removeAllChildNodes(answerArea)
