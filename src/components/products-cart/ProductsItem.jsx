import React, { Fragment, memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart, FaPenToSquare, FaRegHeart, FaTrashCan } from 'react-icons/fa6';
import images from '../../assets/images/empty.jpg'
import { addToLike } from '../../context/slices/wishlistSlice'
import Modal from '../modal';
import Update from '../update';
import DeleteProduct from '../delete';
import './ProductsCart.scss';
import { addToCart } from '../../context/slices/cartSlice';

const modalh1 = ['Delete Product', 'Update Product']

const ProductsItem = ({ product, admin, like }) => {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch()

    return (
        <Fragment>
            <div
                className={`products-cart ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='product-tag'>
                    <span className="new">NEW</span>
                    <span className="discount">-50%</span>
                </div>
                {!admin ? <div onClick={() => dispatch(addToLike(product))} className="wishlist-button">
                    {like ? <FaHeart color='red' fontSize={20} /> : <FaRegHeart color='black' fontSize={20} />}
                </div> : <></>}
                <figure className="product-image">
                    <img src={product?.images[0] ?? images} alt="Loveseat Sofa" />
                    {!admin ? <button onClick={() => dispatch(addToCart(product))} className="add-to-cart-button">Add to cart</button> : <></>}
                </figure>
                <div className="product-info">
                    <div className="product-rating">★★★★★</div>
                    <Link to={`/shop/${product?.id}`} className="product-name">{product?.id}. {product?.title}</Link>
                    <div className="product-price">
                        <span className="current-price">${product?.price}</span>
                        <span className="original-price">${product?.oldPrice}</span>
                        {
                            admin ? <div className='admin__btns'>
                                <button onClick={() => { setOpen(true); setModalTitle(true) }} className='admin__btns-item'>
                                    <FaTrashCan color='white' fontSize={16} />
                                </button>
                                <button onClick={() => { setOpen(true); setModalTitle(false) }} className='admin__btns-item'>
                                    <FaPenToSquare color='white' fontSize={16} />
                                </button>
                            </div> : <></>
                        }
                    </div>
                </div>
            </div>
            {
                open ? <Modal close={setOpen} title={modalTitle ? modalh1[0] : modalh1[1]}>
                    {modalTitle ? (
                        <DeleteProduct product={product} setOpen={setOpen} />
                    ) : (
                        <Update product={product} setOpen={setOpen} />
                    )}
                </Modal> : <></>
            }
        </Fragment>
    );
};

export default memo(ProductsItem);
