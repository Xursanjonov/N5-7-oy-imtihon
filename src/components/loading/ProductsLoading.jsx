import React, { memo } from 'react'
import './products-loading.scss'

const ProductsLoading = () => {
    return (
        <div className="products-loading">
            <span className="loaders"></span>
        </div>
    )
}

export default memo(ProductsLoading)