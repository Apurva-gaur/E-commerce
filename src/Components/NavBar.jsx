import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { items } from "./Data";
import { dataContext } from './context';


function NavBar() {
  const [seachKeyword, setseachKeyword] = useState();
  const [filterProductbyCatagoray, setfiterProductbyCatagory] = useState(null);
  const { data } = useContext(dataContext);
  const { updateData } = useContext(dataContext);
  const [prev, setprev] = useState(items);

  function onChangeHandler(e) {
    setseachKeyword(e.target.value);
    console.log(seachKeyword);
  }

  function filterProduct(catagoryParameter) {
    const filteredProduct = items.filter(
      (singleProduct) => singleProduct.category === catagoryParameter
    );

    console.log("search button is clicked");

    console.log(filteredProduct);
    // props.setdata(filteredProduct)
    updateData(filteredProduct);
  }
  function handleHome(){
      updateData(items)
  }

  return (
    <>
      {/* // NavBar */}
      <nav class="bg-blue-800 w-[4/5] sticky top-0">
        <div class=" relative w-[1140px] mx-auto text-white border-2 border-red-400 flex  justify-between justify-items-center p-3">
          <ul class="flex  gap-16   mx-1 my-1 p-1 font-bold text-xl">
            <li>
              <button onClick={handleHome}><NavLink
                to="/home"
                className={({ isActive }) =>
                  `block  duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink></button>
              
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block  duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <Link to="/product">product</Link>
            </li>
            <li>
              <Link to="/contact us">Contact Us</Link>
            </li>
          </ul>
          <div className="flex gap-1 border border-red-600">
          <input
            type="text"
            placeholder="search products"
            class="rounded border-none mx-5 p-2 text-black"
            value={seachKeyword}
            onChange={onChangeHandler}
          ></input>
          <button onClick={()=>{filterProduct(seachKeyword)}} class="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 rounded-full"><NavLink
                to="/home"
                className={({ isActive }) =>
                  `block  duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Search
              </NavLink></button>
          </div>
          <div className="mx-1 my-1 p-1 font-bold text-xl">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `block  duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Cart
              </NavLink>
            </div>
           
         
        </div>
      </nav>
    </>
  );
}

export default NavBar;
