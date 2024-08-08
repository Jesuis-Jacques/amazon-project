import {calculateCartQuantity} from "../../data/cart.js";


export function renderCheckoutHeader () {
  const cartQuantity = calculateCartQuantity();

  const itemLabel = (cartQuantity === 0 || cartQuantity === 1) ? 'item' : 'items';

  const checkoutHeaderHTML = `
    <div class="checkout-header-middle-section js-checkout-header-middle-section">
    Checkout 
        (<a class="return-to-home-link"
        href="amazon.html">${cartQuantity} ${itemLabel}</a>)
    </div>
  `;

  let checkoutHeader = document.querySelector('.js-checkout-header-middle-section');

  checkoutHeader.innerHTML = checkoutHeaderHTML;

}