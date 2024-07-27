import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateProductMutation } from '../../../context/api/productApi'
import { useGetCategoryQuery } from '../../../context/api/categoryApi'
import './create.scss'

const initalState = {
    title: '',
    category: '',
    description: '',
    oldPrice: 0,
    price: 0,
    stock: 0,
    rating: 5,
    categoryAll: "All",
    like: false,
    images: [],
}

const CreateProduct = () => {
    const [createData, setCreateData] = useState(initalState)
    const [url, setURL] = useState('')
    const [createProduct, { data }] = useCreateProductMutation()
    const { data: categoryData } = useGetCategoryQuery()
    const navigate = useNavigate()

    const handleCreateProduct = (e) => {
        e.preventDefault();
        console.log({ ...createData })
        createProduct({ ...createData })
        console.log(data)
        navigate('/admin/manage')
    }

    return (
        <div className='create__product'>
            <h1 className='manage__content-h1'>CreateProduct</h1>
            <form onSubmit={handleCreateProduct} className='create__product-form'>
                <label className='create__product-form-label' htmlFor="title">
                    <span>Title</span>
                    <input autoFocus value={createData?.title} onChange={(e) => setCreateData(p => ({ ...p, title: e.target.value }))}
                        type="text" className='product__update-input' placeholder="Title" id="title" />
                </label>
                <label className='create__product-form-label' htmlFor="description">
                    <span>Description</span>
                    <input value={createData?.description} onChange={(e) => setCreateData(p => ({ ...p, description: e.target.value }))}
                        type="text" className='product__update-input' placeholder="Description" id="description" />
                </label>
                <label className='create__product-form-label' htmlFor="price">
                    <span>Price</span>
                    <input value={createData?.price} onChange={(e) => setCreateData(p => ({ ...p, price: e.target.value }))}
                        type="number" className='product__update-input' placeholder="Price" id="price" />
                </label>
                <label className='create__product-form-label' htmlFor="oldPrice">
                    <span>Old Price</span>
                    <input value={createData?.oldPrice} onChange={(e) => setCreateData(p => ({ ...p, oldPrice: e.target.value }))}
                        type="number" className='product__update-input' placeholder="Old Price" id="oldPrice" />
                </label>
                <label className='create__product-form-label' htmlFor="stock">
                    <span>Count</span>
                    <input value={createData?.stock} onChange={(e) => setCreateData(p => ({ ...p, stock: +e.target.value }))}
                        type="number" className='product__update-input' placeholder="Count" id="stock" />
                </label>
                <label className='create__product-form-label' htmlFor="image-url">
                    <span>Image-url</span>
                    <input value={url} onChange={(e) => setURL(e.target.value)}
                        type="text" className='product__update-input' placeholder="Count" id="stock" />
                </label>
                <label className='create__product-form-label' htmlFor="cartegory">
                    <span>Cartegory</span>
                    <select value={categoryData?.category} onChange={(e) => setCreateData(p => ({ ...p, category: e.target.value }))}
                        className='product__update-select' id="cartegory">
                        {categoryData?.map(category => (
                            category?.name === 'All' ? <></> : <option value={category?.name}>{category?.name}</option>
                        ))}
                    </select>
                </label>
                <button type='submit' className='create__product-form-btn'>Create</button>
            </form>
        </div>
    )
}

export default memo(CreateProduct)