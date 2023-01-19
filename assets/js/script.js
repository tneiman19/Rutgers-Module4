var answerArea = document.getElementById('answerArea')

var questionNumber = 1;
var currentQuestion = 'question' + questionNumber

console.log(currentQuestion)

var question1 = {
  question: "What color is the Sky?",
  answers: {
    Green: false,
    Blue: true,
    Purple: false,
    "None of the above": false,
  },
};




function answerObject(obj){
    for (const key in obj.answers) {
        console.log(key, obj.answers[key]);
        var newParagraph = document.createElement("button");
        newParagraph.innerHTML = key;
        newParagraph.setAttribute("class", "answerButton");
        newParagraph.setAttribute("data-correct", obj.answers[key]);
        answerArea.appendChild(newParagraph);
      }
}

answerObject(question1)