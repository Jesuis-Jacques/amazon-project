import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
// import '../data/cart-class.js';

//import '../data/backend-practice.js';
//import '../data/car.js';

async function loadPage() {
  try {
    // throw 'error1; --> goes into catch from here

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        // reject('error3') --> goes into catch too and works in the future unlike throw
        resolve('value3');
      });
    });

  } catch (error) {
    console.log('unexpected error, Please try again later.');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage(); 


//Promise.all receives a list of promises to run before running any other in .then()

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/*
new Promise(() => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/* this next lines of code are Callbacks, does same as above which is a Promise

loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  })
});
*/
