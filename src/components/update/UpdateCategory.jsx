import React, { memo, useState } from 'react'
import { useUpdateCategoryMutation } from '../../context/api/categoryApi'
import './update-category.scss'

const UpdateCategory = ({ category, setOpen }) => {
    const [name, setName] = useState({ ...category })
    const [updateCategory, { data }] = useUpdateCategoryMutation()

    const handleUpdateCategory = (e) => {
        e.preventDefault()
        setOpen(false)
        updateCategory({ id: category?.id, body: { ...name } })
        console.log(data)
    }

    return (
        <form onSubmit={handleUpdateCategory} className='update-category'>
            <label className='update-category__label' htmlFor="name">
                <span>Category Title</span>
                <input value={name?.name} onChange={(e) => setName(p => ({ ...p, name: e.target.value }))}
                    type="text" placeholder="Category Title" id="name" />
            </label>
            <label className='update-category__label' htmlFor="category-img">
                <span>Category Image</span>
                <input value={name?.image} onChange={(e) => setName(p => ({ ...p, name: e.target.value }))}
                    type="text" placeholder="Category Image" id="category-img" />
            </label>
            <div className='update-category__btn' htmlFor="category__btn">
                <button className='edit__category' onClick={() => setOpen(false)} id='category-btn' type='button'>Cancel</button>
                <button className='del__category' id='category-btn' type='submit'>Update Category</button>
            </div>
        </form>
    )
}

export default memo(UpdateCategory)