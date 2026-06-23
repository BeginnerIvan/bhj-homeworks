const help = document.querySelectorAll('.has-tooltip');
help.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        const text = e.title;
        const tooltip = document.createElement('div');
        const activeTooltip = document.querySelector('.tooltip');
        if (activeTooltip) {
            activeTooltip.remove();
        }
        tooltip.classList.add('tooltip_active')
        tooltip.textContent = text;
        tooltip.classList.add('tooltip');
        document.body.append(tooltip);
        const cord = e.getBoundingClientRect();
        tooltip.style.left = cord.left + 'px';
        tooltip.style.top = cord.bottom + window.scrollY + 'px';
    })
})
    
