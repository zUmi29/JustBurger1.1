// Array per memorizzare gli elementi nel carrello
let cartItems = [];
// Funzione per visualizzare gli elementi nel carrello
/*function renderCart() {
  let cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  for (var i = 0; i < cartItems.length; i++) {
    let itemElement = document.createElement("div");
    let priceElement = document.createElement("div");
    itemElement.textContent = cartItems[i];
    cartElement.appendChild(itemElement);
    cartElement.appendChild(priceElement);
  }
}

// Funzione per aggiungere un elemento al carrello
function addToCart(item) {
  cartItems.push(item);
  renderCart();
}
*/
function addToCart(item) {
  // Aggiungi l'elemento all'array
  cartItems.push(item);

  // Recupera il div "cart"
  let cartElement = document.getElementById("cart");
  // Aggiorna il contenuto del div con il nuovo elemento
  cartElement.innerHTML += `<div>${item}</div>`;
}
