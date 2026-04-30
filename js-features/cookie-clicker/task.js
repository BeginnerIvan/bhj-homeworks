const countClicker = document.getElementById("clicker__counter"); 
const imageClicker = document.getElementById("cookie");
function changeSizes() {
    if(imageClicker.width === 200) {
    imageClicker.width = 100;
    }else{
        imageClicker.width = 200;
    }
    let count = Number(countClicker.textContent)
    count += 1;
    countClicker.textContent = count;
}
imageClicker.onclick = changeSizes;
