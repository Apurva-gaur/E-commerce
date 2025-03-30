import React from 'react'
import FilterP from './FilterP'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import { DataProvider } from './ContextProvider'
import ProductCard from './ProductCard'

function Layout() {
  return (
   <>
   <DataProvider>
    
  <NavBar/>
  <FilterP/>
  <Outlet/>
  </DataProvider>

 
 
  
   </>
  )
}

export default Layout