import React, { useContext } from 'react'
import { dataContext } from './context'
import { Link } from 'react-router-dom'


function Cart() {
  const{cartItem}=useContext(dataContext)
  const{setCartItem}=useContext(dataContext)
  function handleRemovetocart(id)
  {
    const updatedCart=cartItem.filter((singleProduct)=>singleProduct.id!=id)
    console.log(updatedCart)
    setCartItem(updatedCart)
  }

  return (
    <>
     <div class="w-[1140px] m-auto flex flex-wrap gap-4">
    { cartItem.map(( productitems )=>{
      return(
        <>
         <div key={productitems.id} class=" w-[31.84%] rounded overflow-hidden shadow-lg bg-white h-[60vh]">
         <img class="w-full p-2 rounded h-[70%]" src={productitems.imgSrc} alt="Card image"/>
          <div class="px-6 py-0 h-auto ">
            <h2 class="font-bold text-xl text-gray-800">{productitems.title?productitems.title.length>=16?productitems.title.substring(0,29):productitems.title:"not found"} <span className='bg-blue-500 text-white py-2 px-4 rounded-full text-sm'>{productitems.price} $</span></h2>

            <p class="text-gray-600 text-base mt-2">
            This is a simple card using Tailwind CSS. 
            </p>
           </div>
          <div class="px-6 py-3 flex items-center justify-between">
          
            <button class="bg-blue-500 text-white py-2 px-4 rounded-full text-sm"><Link to={`/productDetail/${productitems.id}`}>View Detail</Link></button>
 
            <button class="bg-blue-500 text-white py-2 px-4 rounded-full text-sm" onClick={()=>{
              handleRemovetocart(productitems.id)
            }}>Remove Item</button>

          </div>
        </div>

        </>
      )

      })}
   
</div>
    </>
  )
}

export default Cart