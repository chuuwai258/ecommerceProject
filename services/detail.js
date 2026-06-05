/** @format */

const customerReview = document.querySelector("#product-content");
const productImage = document.querySelector("#product-image");
// sidebar
const cartBtn = document.querySelector("#cart-btn");
const sideBar = document.querySelector("#sidebar");
const closeBtn = document.querySelector("#close-btn");

const cartContent = document.querySelector("#cart-content");
const cartCount = document.querySelector("#item-count");
const totalPrice = document.querySelector("#total-price");
const addToCart = document.querySelector("#add-to-cart");

let product;

window.addEventListener("load", () => {
  const carts = getCarts();
  cartCount.textContent = carts.length;
  carts.forEach((item) => {
    cartContent.innerHTML += buildCartContent(item);
  });

  // total price
  totalPrice.textContent = carts.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);
});

async function getProduct() {
  const searchquery = location.search;

  const urlParams = new URLSearchParams(searchquery);
  const id = urlParams.get("id");

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data)
    console.log(data.image)


    product = data;
    productImage.setAttribute("src", data.image);
    console.log(productImage.src)

    customerReview.innerHTML = `
        <h1 class="text-3xl font-semibold">${data.title}</h1>
        <p class="text-foreground-muted text-2xl">$${data.price}</p>

        <div class="flex gap-3">
          <div>
            <span class="fa fa-star checked" style="color:gold;"></span>
            <span class="fa fa-star checked" style="color:gold;"></span>
            <span class="fa fa-star checked" style="color:gold;"></span>
            <span class="fa fa-star checked" style="color:gold;"></span>
            <span class="fa fa-star-half checked" style="color:gold;"></span>
          </div>
          <img src="./images/Line 5.png" alt="line5" class="bg-[#F9F1E7]">
          <h2 class="text-foreground-muted">5 Customer Review</h2>          
        </div>

        <p class="text-justify">${data.description}</p>  
    `;
  } catch (error) {
    console.log(error);
  }
}

cartBtn.addEventListener("click", () => {
  sideBar.classList.toggle("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.add("translate-x-full");
});

const buildCartContent = (product) => {
  return `
      <div class="flex flex-start gap-6 items-center px-3">
        <img src=${product.image} alt=${product.title} width="50px" height="50px">
      
        <div class="flex-1">
          <h3 class="text-sm font-medium">${product.title}</h3>
          <p class="text-foreground-muted text-sm">$${product.price}</p>
        </div>

        <button>
          <i class="fa-solid fa-x" id="cross-btn"></i>
        </button>
      </div>
    `;

    
};
const crossBtn=document.querySelector("#cross-btn")
crossBtn.addEventListener("click",()=>{
  
})


const getCarts = () => JSON.parse(localStorage.getItem("carts")) || [];

addToCart.addEventListener("click", () => {
  const count = parseInt(itemCount.textContent);

  const carts = getCarts();
  const existingCart = carts.filter((p) => p.id != product.id);

  cartCount.textContent = existingCart.length + 1;

  cartContent.innerHTML += buildCartContent(product);

  localStorage.setItem(
    "carts",
    JSON.stringify([...existingCart, { ...product, count }])
  );
});

getProduct();

const increaseBtn = document.querySelector("#increase");
    const decreaseBtn = document.querySelector("#decrease");
    const itemCount = document.querySelector("#count");

    let count = 1;
    increaseBtn.addEventListener("click", () => {
      if (count < 5) {
        count++;
        itemCount.textContent = count;
      }
    });
      decreaseBtn.addEventListener("click", () => {
      if (count > 1) {
        count--;
        itemCount.textContent = count;
      }
    });
