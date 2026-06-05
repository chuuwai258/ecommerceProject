/** @format */
const productCard=document.querySelector("#product-card")
async function getProducts(){
  try{
    const response=await fetch("https://fakestoreapi.com/products")
    const data=await response.json()
    const product=data.map(item=>{
      return `
        <a href="detail.html?id=${item.id}">     
        <div class="relative border border-slate-300 shadow-2xl p-6 rounded-[10px] overflow-hidden bg-white">
          <div class="w-full h-[170px]  lg:h-[210px] md:h-[150px] mb-6 ">
            <img src= ${item.image} class="h-[150px] w-full md:h-[150px] lg:h-[200px] md:w-full lg:w-full object-contain">
          </div>
      
          <div class=" text-left md:leading-7 lg:leading-10 text-sans">
            <h3 class="line-clamp-1 md:font-medium lg:font-semibold md:text-lg lg:text-xl ">${item.title}</h3>
            <p class="lg:font-semibold text-foreground-muted ">${item.category}</p>
            <h4 class="font-bold  lg:text-lg ">$${item.price}</h4>
          </div>

          <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-5 opacity-0 hover:opacity-100">
            <button class="bg-white px-7 py-2 rounded-[10px] text-primary ">Add to cart</button>
            <div class="flex gap-4 text-white">
              <buttton class="flex items-center gap-3"><i class="fa-solid fa-share-nodes"></i>Share</button> 
              <buttton class="flex items-center gap-3"><i class="fa-solid fa-code-compare"></i>Compare</button>
              <buttton class="flex items-center gap-3"><i class="fa-regular fa-heart"></i>Like</button>
            </div>
          </div>        
        </div>
        </a>      
  `
})
     
    productCard.innerHTML=product.join("")
  }catch(error){
    console.log(error)
  }
  
}
export {getProducts}

//sidebar
const cartBtn=document.querySelector("#cart-btn")
const sideBar=document.querySelector("#sidebar")
const closeBtn=document.querySelector("#close-btn")

cartBtn.addEventListener("click",()=>{  
  sideBar.classList.toggle("translate-x-full")
})

closeBtn.addEventListener("click",()=>{
  sideBar.classList.add("translate-x-full")
})










