import React, { useEffect, useState } from "react";
import { items } from "./Data.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { dataContext } from "./context.js";
import { useContext } from "react";
import RelatedProduct from "./RelatedProduct.jsx";


function ProductDetail() {
  const { data} = useContext(dataContext)
  const { id } = useParams();
  const [product, setproduct] = useState({});//  single product detail
  const[brandName,setbrandName]=useState("") 
  const[relatedProduct,setrelatedProduct]=useState([])
  console.log(product)


  useEffect(() => {
    const FilterProduct = data.filter(
      (singleProduct) => singleProduct.id == id
    );
    console.log(FilterProduct);
    setproduct(FilterProduct[0]);
    console.log(FilterProduct[0])
    const filterProductbyCatagoray=data.filter((cat_product)=>cat_product.category==FilterProduct[0].category 
  
    );  
    setrelatedProduct(filterProductbyCatagoray) 

    // console.log(filterProductbyCatagoray)
    
  }, [id]);
  console.log(relatedProduct)

  
  
  


  return (
    <>
      <div class="w-[1140px] m-auto flex flex-wrap gap-5">
        <div class=" w-[31%] rounded overflow-hidden shadow-lg bg-white h-[50vh]">
          <img
            class="w-full p-2 rounded h-[70%]"
            src={product.imgSrc}
            alt="Card image"
          />
          <div class="px-6 py-0 h-auto ">
            <h2 class="font-bold text-xl text-gray-800">
              {product.title
                ? product.title.length >= 16
                  ? product.title.substring(0, 29)
                  : product.title
                : "not found"}
            </h2>
            <p class="text-gray-600 text-base mt-2">
             {product.description}
            </p>
          </div>
          <div class="px-6 py-3 flex items-center justify-between">
            <button class="bg-blue-500 text-white py-2 px-4 rounded-full text-sm">
              {product.price}
            </button>
            <button class="bg-blue-500 text-white py-2 px-4 rounded-full text-sm">
              <Link to={`/productDetail/${product.id}`}>Add to cart</Link>
            </button>
          </div>
          
        </div>
        <div class="w-[60%] h-[50vh] border-2 border-orange-400 flex gap-5 "></div>
      

      </div>
      <div  class=" h-7 w-auto flex gap-5 my-5 ">
        <RelatedProduct value={data} FilterProduct={relatedProduct} ></RelatedProduct>
           
          </div>
      
     
      
      
    </>
  );
}

export default ProductDetail;
