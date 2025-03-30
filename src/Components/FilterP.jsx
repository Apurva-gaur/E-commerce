import React, { useContext, useEffect, useState } from 'react'
import{items} from './Data.jsx'
import { dataContext } from './context';
import { NavLink } from 'react-router-dom';


function FilterP() {
    const[filterProductbyCatagoray, setfiterProductbyCatagory]=useState(null);
    const{ data }=useContext(dataContext)
    const{ updateData }=useContext(dataContext)
    
  
  

  function filterProduct(catagoryParameter){
    const filteredProduct=items.filter((singleProduct)=>singleProduct.category===catagoryParameter)
 
    console.log("button is clicked")
   
    console.log(filteredProduct)
    // props.setdata(filteredProduct)
    updateData(filteredProduct)
  }
  // updateData(items)

  

  

  return (
    <>
    <div class="bg-blue-500 sticky top-16">
   <div class="bg-blue-500 w-[1140px] mx-auto flex border-2 border-red-400  justify-between gap-5 py-1 px-3">
       <button class="text-white font-bold text-xl px-2 py-1" onClick={()=>{
        filterProduct('mobiles')
       }} ><NavLink
       to="/home"
       className={({ isActive }) =>
         `block  duration-200 ${
           isActive ? "text-orange-700" : "text-white"
         } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
       }
     >
       Mobiles
     </NavLink></button>
       <button class="text-white font-bold text-xl px-2 py-1" onClick={()=>{
        filterProduct('tablets')
       }}><NavLink
                       to="/home"
                       className={({ isActive }) =>
                         `block  duration-200 ${
                           isActive ? "text-orange-700" : "text-white"
                         } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                       }
                     >
                       Tablets
                     </NavLink></button>
       <button class="text-white font-bold text-xl px-2 py-1" onClick={()=>{
        filterProduct('laptops')
       }}><NavLink
                       to="/home"
                       className={({ isActive }) =>
                         `block  duration-200 ${
                           isActive ? "text-orange-700" : "text-white"
                         } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                       }
                     >
                       Laptop
                     </NavLink></button>
       
   </div>
   </div></>
  )
}

export default FilterP