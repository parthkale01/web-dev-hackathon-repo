import { addOne, cart, deleteFromCart} from "../data/cart.js";

export function renderOrderSummary(){
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container-${cartItem.id}">
        <div class="delivery-date">
          Delivery date: ##
        </div>

        <div class="cart-item-details-grid">
          

          <div class="cart-item-details">
            <div class="product-name">
              Name: ${cartItem.name}
            </div>
            <div class="product-price">
              Price: ${cartItem.price}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span data-product-id-to-add="${cartItem.id}" class="update-quantity-link link-primary js-update-quantity-link">
                Add
              </span>
              <span data-product-id="${cartItem.id}" class="delete-quantity-link link-primary js-delete-link">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ##
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.order-summary').innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link').forEach((deleteItem) => {
    const materialId = deleteItem.dataset.productId;
    deleteItem.addEventListener('click', () => {
      deleteFromCart(materialId);
    });
  });

  document.querySelectorAll('.js-update-quantity-link').forEach((updateItem) => {
    const materialId = updateItem.dataset.productIdToAdd;
    updateItem.addEventListener('click', () => {
      addOne(materialId);
    });
  });
}