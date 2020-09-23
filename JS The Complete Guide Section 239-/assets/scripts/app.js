class Product {
  //Public instance fields
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  //A constructor belongs to a particular class object that is instantiated. The
  //constructor initializes this object and can provide access to its private
  //information
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  set cartItems(val) {
    this.items = val;
    this.totalOutput.innerHTML = `<h2>\$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((acc, curr) => acc + curr.price, 0);
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartElement = document.createElement("section");
    cartElement.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartElement.className = "cart";
    this.totalOutput = cartElement.querySelector("h2");
    return cartElement;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const productElement = document.createElement("li");
    productElement.className = "product-item";
    productElement.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;

    const addCartButton = productElement.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this)); //bind 'this' ProductItem object, otherwise 'this' in addToCart() will refer to the button
    return productElement;
  }
}
class ProductList {
  products = [
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
  ];

  constructor() {}

  render() {
    const productList = document.createElement("ul");
    productList.className = "product-list";
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const productElement = productItem.render();
      productList.append(productElement);
    }
    return productList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartElement = this.cart.render();
    const productList = new ProductList();
    const productListElement = productList.render();

    renderHook.append(cartElement);
    renderHook.append(productListElement);
  }
}
class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init(); //call method on the class
