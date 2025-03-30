import React, { useContext } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { items } from './Data';
import { useOutletContext } from 'react-router-dom';
import { dataContext } from './context';







function ProductCard() {
  const{ data }=useContext(dataContext)
  // const{updateData}=useContext(dataContext)
  // console.log(data)
const{cartItem}=useContext(dataContext)
const{setCartItem}=useContext(dataContext)
console.log(cartItem)


  function handleAddtocart(id, category,title,imgSrc,description,price){
    const selectedProduct={
      id:id,
      category:category,
      title:title,
      imgSrc:imgSrc,
      description:description,
      price:price
    }
    setCartItem([selectedProduct,...cartItem])
   
    console.log(cartItem)

  }



  return (
   <>

    
     <div class="w-[1140px] m-auto flex flex-wrap gap-4">
    { data.map(( productitems )=>{
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
              handleAddtocart(productitems.id,productitems.category,productitems.title,productitems.imgSrc,productitems.description,productitems.price)
            }}>Add to cart</button>

          </div>
        </div>

        </>
      )

      })}
   
</div>

   </>
  )
}

export default ProductCard