function giveEnd() {
    var progress = Number(sessionStorage.getItem('currentNum'))
  
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
  