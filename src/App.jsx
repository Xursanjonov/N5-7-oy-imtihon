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
import Login from './pages/auth/Login'
import Admin from './pages/admin'
import CreateProduct from './pages/admin/create'
import ManageProduct from './pages/admin/manage'
import CreateCategory from './pages/admin/create-category'
import ManageCategory from './pages/admin/manage-category'

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

        <Route path='/admin/' element={<Admin />} >
          <Route path='create' element={<CreateProduct />} />
          <Route path='manage' element={<ManageProduct />} />
          <Route path='create-category' element={<CreateCategory />} />
          <Route path='manage-category' element={<ManageCategory />} />
        </Route>
        <Route path='/login/' element={<Login />} ></Route>
      </Routes>
    </Fragment>
  )
}

export default memo(App)