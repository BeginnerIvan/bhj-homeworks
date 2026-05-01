const countDead = document.getElementById("dead");
const countLost = document.getElementById("lost");
function getHole(index) {
    return document.getElementById(`hole${index}`)
}
for(let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.onclick = function() {
    if(hole.className.includes( 'hole_has-mole' )) {
    let dead = Number(countDead.textContent)
    dead += 1;
    countDead.textContent = dead;
    } else{
        let lost = Number(countLost.textContent)
        lost += 1;
        countLost.textContent = lost;
    } 
        if(Number(countDead.textContent) === 10) {
            alert("Победа!")
            countDead.textContent = 0;
            countLost.textContent = 0;
        } else if (Number(countLost.textContent) === 5 ){
            alert("Вы проиграли...")
            countDead.textContent = 0;
            countLost.textContent = 0;
        }
        }
    }




