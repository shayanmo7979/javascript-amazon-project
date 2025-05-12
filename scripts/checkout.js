import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

async function loadPage() {
  try {
    await loadProductsFetch()
  } 
  
  catch (error) {
    console.log('Unexpected error. Please try again later.')
  }
  renderOrderSummary()
  renderPaymentSummary()
}

loadPage()

// loadProductsFetch().then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// })

// new Promise((resolve) => {
//   loadProductsFetch(() => {
//     resolve()
//   })
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// })

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve()
//   })
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// })

// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// })