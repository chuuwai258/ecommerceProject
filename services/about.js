const customerReview=document.querySelector("#customer-review")
async function getProduct(){
  try{
    const response=await fetch("https://fakestoreapi.com/products/2")
    const data=await response.json()

    customerReview.innerHTML=`
    <div class="grid md:gird-cols-1 lg:grid-cols-2 p-8">
      <div>
        <img src="${data.image}" class="md:mb-5 md:h-[430px] lg:h-[480px] md:w-[500px] lg:w-[550px] object-contain bg-[#F9F1E7] rounded-[10px] p-8 ml-25">
      </div>

      <div class="mr-10 space-y-2 md:px-10">
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
        <div class="space-y-2 mt-4">
          <p>Size</p>
          <div class="flex gap-3">
            <p class="border bg-[#F9F1E7] rounded-[5px] w-[30px] h-[30px] text-center">L</p>
            <p class="border bg-[#F9F1E7] rounded-[5px] w-[30px] h-[30px] text-center">XL</p>
            <p class="border bg-[#F9F1E7] rounded-[5px] w-[30px] h-[30px] text-center">XS</p>
          </div>
        </div>

        <div class="space-y-2 mt-4">
          <p>Color</p>
          <div class="flex gap-3">
            <button class="border bg-[#816DFA] rounded-full w-[30px] h-[30px] "><button>
            <button class="border bg-[#000000] rounded-full w-[30px] h-[30px]"></button>
            <button class="border bg-[#B88E2F] rounded-full w-[30px] h-[30px]"></button>
          </div>
        </div>

        <div class="flex gap-6 mt-9 mb-7 ">
          <button class="flex gap-5 border border-[#9F9F9F] px-4 py-2 rounded-[10px] ">
          <span id="decrease">-</span>
          <span id="zero">0</span>
          <span id="increase">+</span>
          </button>
          <button class="px-6 py-2 border rounded-[10px]">Add to Cart</button>
          <button class="px-6 py-2 border rounded-[10px]"> + Compare</button>          
        </div>

        <div class="flex gap-5  border-t border-slate-300 md:pt-6 lg:pt-10">
          <div class="text-foreground-muted">
            <p>SKU<span class="pl-14">:</span></p>
            <p>Category<span class="pl-3">:</span></p>
            <p>Tags<span class="pl-12">:</span></p>
            <p>Share<span class="pl-10">:</span></p>
          </div>

          <div>
            <div class="text-foreground-muted">
              <p>TS001</p>
              <p>Men's Clothing</p>
              <p>T-Shirt, Casual, Fashion, Cotton</p>
            </div>
            <div class="flex gap-3 mt-1 font-bold">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
            </div>
          </div>        
        </div> 
      </div> 
    </div>      
    `
    const increaseBtn=document.querySelector("#increase")
    const decreaseBtn=document.querySelector("#decrease")
    const zero=document.querySelector("#zero")

    let count=0
    increaseBtn.addEventListener("click",()=>{
      if(count<5){
        count++
        zero.textContent=count
      }
    })

    decreaseBtn.addEventListener("click",()=>{
      if(count>0){
        count--
        zero.textContent=count
      }
    })

  }
  catch(error){
    console.log(error)
  }
}
getProduct()


// sidebar
const cartBtn=document.querySelector("#cart-btn")
const sideBar=document.querySelector("#sidebar")
const closeBtn=document.querySelector("#close-btn")

cartBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  sideBar.classList.toggle("translate-x-full")
})

closeBtn.addEventListener("click",()=>{
  sideBar.classList.add("translate-x-full")
})
