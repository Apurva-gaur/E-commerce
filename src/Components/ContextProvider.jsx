import { dataContext } from "./context";
import { useState } from "react";
import { items} from './Data'

export const DataProvider = ({children}) => {

    const[data,updateData]=useState(items);// it is a object
    // console.log(data)
    // if(data.length<9)
    // {
    //   updateData(items)
    // }
    const[cartItem,setCartItem]=useState([])// it will store the add to cart elements 
  
    return (
      <dataContext.Provider value={{data,updateData,cartItem,setCartItem}}>
        {children}
      </dataContext.Provider>
    );
  };