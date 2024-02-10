let time = 5;

setInterval(updateTimer,1000)
function updateTimer(){
  time--
  if (time <= 0){
    window.location.href = "lessonpage.html";
  }
}