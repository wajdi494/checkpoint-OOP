var DIVcart = document.querySelector("#cart");
var total = document.querySelector("#total_price");
class product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.id = Math.random();
  }
}
let product2 = new product(
  "Ostish pillow",
  10,
  "https://m.media-amazon.com/images/I/31kpD0gIswL._AC_.jpg"
);
console.log(product2);
let product3 = new product(
  "king size bed",
  250,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcGRWcZ5l28WFZBB0fdauFPdvRN0lDqe66w&s"
);
class ShopingCartItem extends product {
  constructor(name, price, image, quantity, id) {
    super(name, price, image, id);
    this.quantity = quantity;
  }
  calculate() {
    return this.price * this.quantity;
  }
}
class ShopingCart {
  constructor(cart) {
    this.cart = [];
  }
  AddToCart() {
    this.cart.push(
      new ShopingCartItem(
        product2.name,
        product2.price,
        product2.image,
        3,
        product2.id
      )
    );
    this.cart.push(
      new ShopingCartItem(
        product3.name,
        product3.price,
        product3.image,
        2,
        product3.id
      )
    );
  }
  removefromcart(id) {
    this.cart.filter((El) => El.id != id);
  }
  display() {
    DIVcart.innerHTML += this.cart.map(
      (el) => `
              <div
        style="display: flex; justify-content: start; flex-direction: column"
      >
        <h2 id="Title">${el.name}</h2>
        <div style="width: 50%; display: flex; flex-direction: row; gap: 15px">
          <img
            width="80%"
            src=${el.image}
            alt=""
          />
          <div style="display: flex; gap: 12px; flex-direction: column">
            <p>Price : $${el.price}</p>
            <div style="display: flex; gap: 10px">
              <button id="plus">+</button>
              <p id="quantity">${el.quantity}</p>
              <button id="minus">-</button>
            </div>
          </div>
        </div>
      </div>
    <br>`
    );
  }
}
let MyCart=new ShopingCart([])
MyCart.AddToCart()
MyCart.display()
console.log(MyCart)
 total.innerHTML=MyCart.cart.reduce((acc,el)=>acc+el.calculate(),0)