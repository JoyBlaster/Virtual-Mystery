const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

//Enter answers from 1-10 in square brackets
const correctAnswers = ['a','a','a','a','a','a','a','a','a','a'];
quizForm.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value,quizForm.q4.value,quizForm.q5.value,quizForm.q6.value,quizForm.q7.value,quizForm.q8.value,quizForm.q9.value,quizForm.q10.value];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });
  resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;
  if (score >= 8){
    showObject()
  }
});

//Until 8/10 marks code
document.getElementById("visible").style.visibility = "hidden";
function showObject(){
  //make scene 1 accessible
  var x = document.getElementById("visible")
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
  //Increase progress bar.
  saveStorage()
}

function saveStorage(){
      number = Number(sessionStorage.getItem("currentNum"));
      total = number + 1
      sessionStorage.setItem("currentNum",total)
      console.log(total)
  }