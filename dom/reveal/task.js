const divs = document.querySelectorAll('.reveal'); 

window.addEventListener('scroll', () => {
    checkVisible()
})

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    return bottom > 0 && top < window.innerHeight;
}
function checkVisible() {
    divs.forEach((div) =>{
       if (isVisible(div) == true){
        div.classList.add('reveal_active')
       }
       })
}
checkVisible();