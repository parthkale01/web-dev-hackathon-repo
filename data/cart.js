import { renderOrderSummary } from "../scripts/orderSummary.js";
import { renderPaymentSummary } from "../scripts/paymentSummary.js";
import { materials } from "./materials.js";

export let cart = [];
loadFromStorage();
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadFromStorage(){
  cart =  JSON.parse(localStorage.getItem('cart'));

  if(!cart){
  cart = [{
  id: '1',
  name: 'p1',
  price: 100,
  image: '',
  quantity: 1
  },
  {
    id: '2',
    name: 'p2',
    price: 200,
    image: '',
    quantity: 2
  }];
  }
}

export function addToCart(materialId){

  let matchingMaterial;
  cart.forEach((item) => {
    if(item.id === materialId){
      matchingMaterial = item;
    }
  });

  if(!matchingMaterial){
    materials.forEach((material) => {
      if(material.id === materialId){
        cart.push({
          id : materialId,
          name: material.name,
          price: material.price,
          image: material.image,
          quantity: 1
        });
      }
    });
  }
  else{
    matchingMaterial.quantity++;
  }
  saveToStorage();
  console.log(cart);
  document.querySelector('.quantity').innerHTML = `Cart : ${calCartQty()}`;
}

export function calCartQty(){
  loadFromStorage();
  let qty=0;
  cart.forEach((item) => {
    qty += item.quantity;
  });
  return qty;
}

export function deleteFromCart(materialId){
  let matchingMaterial;
  let count;

  cart.forEach((item) => {
    if(item.id === materialId){
      item.quantity--;
      count = item.quantity;
    }
  });

  if(!count){
    const newCart = [];
    cart.forEach((cartItem) => {
      if(cartItem.id !== materialId){
        newCart.push(cartItem);
      }
    });

    cart = newCart;
  }

  saveToStorage();
  renderOrderSummary();
  renderPaymentSummary();
}

export function addOne(materialId){
  cart.forEach((item) => {
    if(item.id === materialId){
      item.quantity++;
    }
  });
  saveToStorage();
  renderOrderSummary();
  renderPaymentSummary();
}