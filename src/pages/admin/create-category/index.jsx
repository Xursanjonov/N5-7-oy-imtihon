import React, { memo, useState } from 'react'
import { useCreateCategoryMutation } from '../../../context/api/categoryApi'
import { useNavigate } from 'react-router-dom'
import './create-category.scss'

const CreateCategory = () => {
    const [news, setNews] = useState({ name: '', image: '' })
    const [createCategory, { data }] = useCreateCategoryMutation()
    const navigate = useNavigate()

    const handleCreateCategory = (e) => {
        e.preventDefault()
        createCategory({ body: { ...news } })
        console.log(data)
        navigate('/admin/manage-category')
    }

    return (
        <div className='create__category'>
            <h1>Create Category</h1>
            <form onSubmit={handleCreateCategory} className='create__category-form'>
                <label className='create__category-form-label' htmlFor="name">
                    <span>Category Title</span>
                    <input autoFocus value={news.name} onChange={(e) => setNews(p => ({ ...p, name: e.target.value }))}
                        type="text" placeholder="Category Title" id="name" />
                </label>
                <label className='create__category-form-label' htmlFor="category-img">
                    <span>Category Image</span>
                    <input value={news.image} onChange={(e) => setNews(p => ({ ...p, image: e.target.value }))}
                        type="text" placeholder="Category Image" id="category-img" />
                </label>
                <button className='category-create__btn' id='category-btn' type='submit'>Create Category</button>
            </form>
        </div>
    )
}

export default memo(CreateCategory)