const size = document.querySelectorAll('.font-size');
const book = document.getElementById('book')
size.forEach((el) => {
    el.addEventListener('click', (event) => {
    event.preventDefault();
    size.forEach((btn) => {
        btn.classList.remove('font-size_active');
    })
    event.currentTarget.classList.add('font-size_active');
    const selected = event.currentTarget.dataset.size;
    if(selected === 'small') {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    }else if(selected === 'big') {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    } else { 
        book.classList.remove('book_fs-small', 'book_fs-big');
    }
    });
});



