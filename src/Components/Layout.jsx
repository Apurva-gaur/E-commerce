import React from 'react'
import FilterP from './FilterP'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import ProductCard from './ProductCard'

function Layout() {
  return (
    <>
      <NavBar />
      <FilterP />
      <Outlet />
    </>
  )
}

export default Layout