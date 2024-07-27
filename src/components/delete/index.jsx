import React, { memo } from 'react'
import { useDeleteProductMutation } from '../../context/api/productApi';
import './delete-product.scss'

const DeleteProduct = ({ product, setOpen }) => {
    const [removeID, { data: remodeData }] = useDeleteProductMutation();

    const handleDelete = (e) => {
        e.preventDefault();
        setOpen(false)
        removeID({ id: product?.id })
        console.log(remodeData)
    }

    return (
        <div className='product__delete'>
            <h4 className='product__delete-h4'>{product?.id}. {product?.title}</h4>
            <div className="product__delete-btn">
                <button className='delete__product calncal' onClick={() => setOpen(false)}>Cancel</button>
                <button onClick={handleDelete} className='delete__product del'>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default memo(DeleteProduct)