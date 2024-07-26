import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductsItem from '../../components/products-cart/ProductsItem'
import emptyImage from '../../assets/images/wish-list.jpg'
import './wish-list.scss'
import { useNavigate } from 'react-router-dom'

const WishList = () => {
    const data = useSelector(state => state.wishlist.value)
    const navigate = useNavigate()

    useEffect(() => { window.scroll(0, 0) }, [])

    return data?.length ? (
        <section className='wish-list'>
            <div className="wish-list__container">
                <h2 className='like__title'>WishList</h2>
                <div className='wish-list__container-products'>
                    {data?.map(product => (
                        <ProductsItem key={product?.id} product={product} />
                    ))}
                </div>
            </div>
        </section>

    ) : <section className='wish-list__empty'>
        <figure className='wish-list__empty-img'>
            <img className='empty-img' src={emptyImage} alt="" />
        </figure>
        <div className="wish-list__btns">
            <button className='back' onClick={() => navigate(-1)}>Go Back</button>
            <button className='go-products' onClick={() => navigate('/shop')}>Go Products</button>
        </div>
    </section>
}

export default memo(WishList)