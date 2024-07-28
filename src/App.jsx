import React, { memo, Fragment, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Layout = lazy(() => import('./layout/index'))
const Home = lazy(() => import('./pages/home/Home'))
const Shop = lazy(() => import('./pages/shop'))
const Blog = lazy(() => import('./pages/blog'))
const Contact = lazy(() => import('./pages/contact'))
const ProductDetail = lazy(() => import('./pages/detail'))
const Cart = lazy(() => import('./pages/cart'))
const WishList = lazy(() => import('./pages/wish-list'))
const Auth = lazy(() => import('./pages/auth'))
const Login = lazy(() => import('./pages/auth/Login'))
const Admin = lazy(() => import('./pages/admin'))
const CreateProduct = lazy(() => import('./pages/admin/create'))
const ManageProduct = lazy(() => import('./pages/admin/manage'))
const CreateCategory = lazy(() => import('./pages/admin/create-category'))
const ManageCategory = lazy(() => import('./pages/admin/manage-category'))
const CartView = lazy(() => import('./pages/cart/cart-view'))
const Checkout = lazy(() => import('./pages/cart/checkout'))
const Complete = lazy(() => import('./pages/cart/complete'))

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

          <Route path='cart/' element={<Cart />} >
            <Route index element={<CartView />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='complete' element={<Complete />} />
          </Route>

        </Route>
        <Route path='/auth' element={<Auth />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/' element={<Admin />} >
          <Route path='create' element={<CreateProduct />} />
          <Route path='manage' element={<ManageProduct />} />
          <Route path='create-category' element={<CreateCategory />} />
          <Route path='manage-category' element={<ManageCategory />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default memo(App)