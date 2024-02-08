function giveEnd() {
    var progress = Number(sessionStorage.getItem('currentNum'))
  
    if (progress < 6){
      sessionStorage.setItem('currentNum',0)
      window.location.href = "scene7.html";
    }else if (progress < 12){
      sessionStorage.setItem('currentNum',0)
      window.location.href = "scene8.html";
    }else{
      sessionStorage.setItem('currentNum',0)
      window.location.href = "scene9.html";
    }
  }
  