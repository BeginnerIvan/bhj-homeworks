const products = document.querySelectorAll('.product');
products.forEach(e => {
    const incBtn = e.querySelector('.product__quantity-control_inc');
    const decBtn = e.querySelector('.product__quantity-control_dec');
    const qualityValue = e.querySelector('.product__quantity-value');
    incBtn.addEventListener('click', () => {
    let count = parseInt(qualityValue.textContent);
    count++;
    qualityValue.textContent = count;
    })
    decBtn.addEventListener('click', () => {
    let count = parseInt(qualityValue.textContent);
    if(count > 1) {
        count--;
        qualityValue.textContent = count; 
        }    
    })
    const basket = e.querySelector('.product__add')
    basket.addEventListener('click', () => {
    const itemId = e.dataset.id;
    const image = e.querySelector('.product__image')
    const itemCount = parseInt(qualityValue.textContent);
    const cartProduct = document.querySelector(`.cart__product[data-id="${itemId}"]`);
    if(cartProduct != null) {
        const cartProdCount = cartProduct.querySelector('.cart__product-count');
        let currentCartCount = parseInt(cartProdCount.textContent);
        currentCartCount += itemCount;
        cartProdCount.textContent = currentCartCount;
    } else {
        const div = document.createElement('div');
        div.classList.add('cart__product');
        div.dataset.id = itemId;
        div.innerHTML = `<img class="cart__product-image" src="${image.src}">
        <div class="cart__product-count">${itemCount}</div>`;
        document.querySelector('.cart__products').append(div);
    }
    })
})