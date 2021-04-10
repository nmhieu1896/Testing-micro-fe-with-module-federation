import faker from './faker';

const cartText = `<div>You have ${faker()} items in your cart</div>`;

document.querySelector('#cart-dev').innerHTML = cartText;
