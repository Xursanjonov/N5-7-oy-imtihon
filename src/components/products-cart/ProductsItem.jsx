import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import images from '../../assets/images/empty.jpg'
import { addToLike } from '../../context/slices/wishlistSlice'
import './ProductsCart.scss';

const ProductsItem = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch()

    return (
        <div
            className={`products-cart ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='product-tag'>
                <span className="new">NEW</span>
                <span className="discount">-50%</span>
            </div>
            <div onClick={() => dispatch(addToLike(product))} className="wishlist-button">
                <FaRegHeart color='black' fontSize={20} />
            </div>
            <figure className="product-image">
                <img src={product?.images ? product?.images[0] : images} alt="Loveseat Sofa" />
                <button className="add-to-cart-button">Add to cart</button>
            </figure>
            <div className="product-info">
                <div className="product-rating">★★★★★</div>
                <Link to={`/shop/${product?.id}`} className="product-name">{product?.id}. {product?.title}</Link>
                <div className="product-price">
                    <span className="current-price">${product?.price}</span>
                    <span className="original-price">${product?.oldPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductsItem);
