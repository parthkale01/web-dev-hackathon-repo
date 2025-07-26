import { calCartQty, cart} from "../data/cart.js";
import { materials } from "../data/materials.js";


export function renderPaymentSummary(){

  let totalPriceOfMaterials = 0;

  cart.forEach((item) => {
    totalPriceOfMaterials += item.price * item.quantity;
  });

  let totalPrice = 0;

  if(totalPriceOfMaterials !== 0){
    totalPrice = totalPriceOfMaterials + 25;
  }


  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${calCartQty()}):</div>
      <div class="payment-summary-money">₹${totalPriceOfMaterials}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">₹${totalPriceOfMaterials === 0 ? '0' : '25'}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">₹${totalPrice}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

}