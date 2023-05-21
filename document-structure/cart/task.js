const plusMinusItem = Array.from(document.querySelectorAll('.product__quantity-control'));
const addItemToCart = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');

plusMinusItem.forEach((i) => {
  i.onclick = () => {
    if(i.classList.contains('product__quantity-control_dec')) {
      if(i.nextElementSibling.innerText == '0') {
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
    let arr = [];

  Array.from(document.querySelectorAll('.cart__product')).forEach((j) => {
    arr.push(j.getAttribute('data-id'));
  })

  if(arr.includes(productId)) {
    cart.querySelector(`div[data-id="${productId}"]`).querySelector('.cart__product-count').innerText = parseInt(cart.querySelector(`div[data-id="${productId}"]`).querySelector('.cart__product-count').innerText) + parseInt(productQuantity);
    return;
  }

  if(productQuantity == '0') {
    return;
  }

  cart.insertAdjacentHTML('beforeend', 
    `<div class="cart__product" data-id="${productId}">
      <img class="cart__product-image" src="${productPicture}">
      <div class="cart__product-count">${productQuantity}</div>
    </div>`);
  }
})