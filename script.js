//Loading data of quiz progress
quiz1 = sessionStorage.getItem("quiz1Done")
quiz2 = sessionStorage.getItem("quiz2Done")
quiz3 = sessionStorage.getItem("quiz3Done")
quiz4 = sessionStorage.getItem("quiz4Done")

var progress = 0
  if (quiz1){
    progress += 1
  }
  if (quiz2){
    progress += 1
  }
  if (quiz3){
    progress += 1
  }
  if (quiz4){
    progress += 1
  }

//End Session code
function giveEnd() {
  if (progress < 2){
    sessionStorage.setItem('currentNum',0)
    window.location.href = "scene7.html";
  }else if (progress < 4){
    sessionStorage.setItem('currentNum',0)
    window.location.href = "scene8.html";
  }else{
    sessionStorage.setItem('currentNum',0)
    window.location.href = "scene9.html";
  }
}

//Displaying current progress
document.getElementById("progressDisplay").innerHTML = `This session's progress: ${progress}/4`;