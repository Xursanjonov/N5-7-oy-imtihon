import React, { memo } from 'react'
import { useDeleteCategoryMutation, useGetCategoryByIdQuery } from '../../context/api/categoryApi';
import Loading from '../loading/ModalLoading'
import './delete-product.scss'

const DeleteCategory = ({ setOpen, categoryId }) => {
    console.log(categoryId)
    const { data: categoryData, isFetching } = useGetCategoryByIdQuery(categoryId);
    const [removeCategory, { data }] = useDeleteCategoryMutation();
    const handleCategoryDelete = (e) => {
        e.preventDefault();
        setOpen(false)
        removeCategory(categoryId)
        // console.log({ id: categoryId })
        console.log(data)
    }

    return isFetching ? <Loading /> : (
        <div className='product__delete'>
            <h4 className='product__delete-h4'>{categoryData?.id}. {categoryData?.name}</h4>
            <div className="product__delete-btn">
                <button className='delete__product calncal' onClick={() => setOpen(false)}>Cancel</button>
                <button onClick={handleCategoryDelete} className='delete__product del'>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default memo(DeleteCategory)