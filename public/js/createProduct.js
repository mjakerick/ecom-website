const createProduct = (data) => {
  let productContainer = document.querySelector('.product-container');
  productContainer.innerHTML += `
  <div class="product-card">
    <div class="product-image">
      <span class="tag">Draft</span>
      <img src="img/card1.png" class="product-thumb" alt="">
      <button class="card-action-btn edit-btn"><img src="img/edit.png"></button>
      <button class="card-action-btn open-btn"><img src="img/open.png"></button>
      <button class="card-action-btn delete-popup-btn"><img src="img/delete.png"></button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">brand</h2>
      <p class="product-short-des">a short line about the clothing..</p>
      <span class="price">$20</span><span class="actual-price">$40</span>
    </div>
  </div>
  `;
}
