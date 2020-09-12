class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      "A Pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "A carpet which you might like - or not.",
      89.99
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const productList = document.createElement("ul");
    productList.className = "product-list";
    for (const product of this.products) {
      const productElement = document.createElement("li");
      productElement.className = "product-item";
      productElement.innerHTML = `
          <div>
            <img src="${product.imageUrl}" alt="${product.title}" >
            <div class="product-item__content">
              <h2>${product.title}</h2>
              <h3>\$${product.price}</h3>
              <p>${product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      productList.append(productElement);
    }
    renderHook.append(productList);
  },
};

productList.render();
