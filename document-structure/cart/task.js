const plusMinusItem = Array.from(document.querySelectorAll('.product__quantity-control'));
const addItemToCart = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');

plusMinusItem.forEach((i) => {
  i.onclick = () => {
    if(i.classList.contains('product__quantity-control_dec')) {
      if(parseInt(i.nextElementSibling.innerText) == 1) {
        return;
      }

      i.nextElementSibling.innerText = parseInt(i.nextElementSibling.innerText) - 1;
    } else if(i.classList.contains('product__quantity-control_inc')) {
        i.previousElementSibling.innerText = parseInt(i.previousElementSibling.innerText) + 1;
      }
  } 
})

addItemToCart.forEach((i) => {
  i.onclick = () => {
    let productPicture = i.closest('.product').querySelector('.product__image').getAttribute('src');
    let productId = i.closest('.product').getAttribute('data-id');
    let productQuantity = i.closest('.product__quantity').querySelector('.product__quantity-value').innerText;
  
    if(Array.from(cart.querySelectorAll('.cart__product')).includes(cart.querySelector(`[data-id="${productId}"]`))) {
      cart.querySelector(`[data-id="${productId}"]`).querySelector('.cart__product-count').textContent = 
      parseInt(cart.querySelector(`[data-id="${productId}"]`).querySelector('.cart__product-count').textContent) + 
      parseInt(document.querySelector('.products').querySelector(`[data-id="${productId}"]`).querySelector('.product__quantity-value').textContent);

      return;
    }

  cart.insertAdjacentHTML('beforeend', 
    `<div class="cart__product" data-id="${productId}">
      <img class="cart__product-image" src="${productPicture}">
      <div class="cart__product-count">${productQuantity}</div>
    </div>`);
  }
});