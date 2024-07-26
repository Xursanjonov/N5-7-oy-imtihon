import React, { memo, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home/Home'
import Shop from './pages/shop'
import Blog from './pages/blog'
import Contact from './pages/contact'
import ProductDetail from './pages/detail'
import Cart from './pages/cart'
import WishList from './pages/wish-list'

const App = () => {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shop/:id' element={<ProductDetail />} />
          <Route path='like' element={<WishList />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default memo(App)