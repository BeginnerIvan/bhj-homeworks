const addText = function() {
    const timer = document.getElementById("timer");
}
   const intervalId = setInterval((addText) => {
        timer.textContent -= 1;
    }, 1000);
    
    setTimeout(() => {
        clearInterval(intervalId); 
        alert("Вы победили в конкурсе!")
    }, 59000);