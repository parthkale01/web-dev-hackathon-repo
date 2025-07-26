import {materials} from '../data/materials.js';
import {addToCart, calCartQty} from '../data/cart.js';

let materialsHTML = '';

function loadMaterials(){
  materials.forEach((material) => {
    materialsHTML += `
    <div style="width: 200px; background: lightblue; padding: 10px 10px; margin: 10px 10px;">
      ID : ${material.id}<br>
      NAME : ${material.name}<br>
      PRICE : ${material.price}<br>
      RATING : ${material.rating}<br>
      <button class="js-add-button" data-material-id="${material.id}"></button>
    </div>
    `;
  });
  document.querySelector('.main-grid').innerHTML = materialsHTML;
  document.querySelector('.quantity').innerHTML = 'Cart : '+calCartQty();
}

loadMaterials();

document.querySelectorAll('.js-add-button').forEach((button) => {
  button.addEventListener('click', () => {
    let materialId = button.dataset.materialId;
    addToCart(materialId);
  });
});