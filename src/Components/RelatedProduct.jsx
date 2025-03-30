import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";




function RelatedProduct(prop) {

  console.log(prop)

  
 
  
  return (
   <>
    <div class="w-[1140px] m-auto flex flex-wrap gap-4">
    {  prop.FilterProduct.map(( FilterProduct )=>{
      return(
        <>
         <div key={FilterProduct.id} class=" w-[31.84%] rounded overflow-hidden shadow-lg bg-white h-[50vh]">
         <img class="w-full p-2 rounded h-[70%]" src={FilterProduct.imgSrc} alt="Card image"/>
          <div class="px-6 py-0 h-auto ">
            <h2 class="font-bold text-xl text-gray-800">{FilterProduct.title?FilterProduct.title.length>=16?FilterProduct.title.substring(0,29):FilterProduct.title:"not found"}</h2>
            <p class="text-gray-600 text-base mt-2">
            This is a simple card using Tailwind CSS. 
            </p>
           </div>
          <div class="px-6 py-3 flex items-center justify-between">
            
            <button class="bg-blue-500 text-white py-2 px-4 rounded-full text-sm">{FilterProduct.price}</button>
            <button class="bg-blue-500 text-white py-2 px-4 rounded-full text-sm"><Link to={`/productDetail/${FilterProduct.id}`}>Add to cart</Link></button>
          </div>
        </div>

        </>
      )

      })}
   
</div>
   </>
  )
}

export default RelatedProduct