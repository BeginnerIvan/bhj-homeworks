const rotator = document.querySelectorAll('.rotator');

function caseSwitch(rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    const active = rotator.querySelector('.rotator__case_active');
    const casesArray = Array.from(cases);
    const casesIndex = casesArray.indexOf(active);
    const nextIndex = (casesIndex + 1) % casesArray.length;
    active.classList.remove('rotator__case_active');
    casesArray[nextIndex].classList.add('rotator__case_active');
}
    rotator.forEach((el) => {
    setInterval(() => {
    caseSwitch(el);
    }, 1000)
})