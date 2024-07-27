import React, { memo, useState } from 'react'
import { useUpdateProductMutation } from '../../context/api/productApi'
import { useGetCategoryQuery } from '../../context/api/categoryApi'
import './update-product.scss'

// const initialState = {
//     title: "lorem",
//     description: 'lorem desc',
//     category: 'lorem categ',
//     price: 599.9,
//     oldPrice: 699.9,
//     stock: 4,
//     images: [
//         "https://m.media-amazon.com/images/I/817HK+iTOtL._SX679_.jpg",
//         "https://m.media-amazon.com/images/I/81XmaNSETwL._SX679_.jpg",
//         "https://m.media-amazon.com/images/I/71OJEnaBzjL._SX679_.jpg"
//     ]
// }

const UpdateProduct = ({ product, setOpen }) => {
    const [updateData, setUpdateData] = useState({ ...product })
    const [update, { data }] = useUpdateProductMutation()
    const { data: categoryName } = useGetCategoryQuery()

    const handleUpdate = (e) => {
        e.preventDefault();
        setOpen(false)
        update({ id: product?.id, body: { ...updateData } })
        console.log(data)
    }

    return (
        <div className='update__product'>
            <h4>{product?.title}</h4>
            <form onSubmit={handleUpdate} className='product__update'>
                <label htmlFor="title">
                    <span>Title</span>
                    <input value={updateData?.title} onChange={(e) => setUpdateData(p => ({ ...p, title: e.target.value }))}
                        type="text" className='product__update-input' placeholder="Title" id="title" />
                </label>
                <label htmlFor="description">
                    <span>Description</span>
                    <input value={updateData?.description} onChange={(e) => setUpdateData(p => ({ ...p, description: e.target.value }))}
                        type="number" className='product__update-input' placeholder="Description" id="description" />
                </label>
                <label htmlFor="price">
                    <span>Price</span>
                    <input value={updateData?.price} onChange={(e) => setUpdateData(p => ({ ...p, price: e.target.value }))}
                        type="number" className='product__update-input' placeholder="Price" id="price" />
                </label>
                <label htmlFor="oldPrice">
                    <span>Old Price</span>
                    <input value={updateData?.oldPrice} onChange={(e) => setUpdateData(p => ({ ...p, oldPrice: e.target.value }))}
                        type="number" className='product__update-input' placeholder="Old Price" id="oldPrice" />
                </label>
                <label htmlFor="stock">
                    <span>Count</span>
                    <input value={updateData?.stock} onChange={(e) => setUpdateData(p => ({ ...p, stock: +e.target.value }))}
                        type="number" className='product__update-input' placeholder="Count" id="stock" />
                </label>
                <label htmlFor="cartegory">
                    <span>Cartegory</span>
                    <select value={updateData?.category} onChange={(e) => setUpdateData(p => ({ ...p, category: e.target.value }))}
                        className='product__update-select' id="cartegory">
                        {categoryName?.map(category => (
                            category?.name === 'All' ? <></> : <option value={category?.name}>{category?.name}</option>
                        ))}
                    </select>
                </label>
                <button onClick={() => setOpen(false)} className='update-btn'>Cancel</button>
                <button type='submit' className='update-btn'>Update</button>
            </form>
        </div>
    )
}

export default memo(UpdateProduct)