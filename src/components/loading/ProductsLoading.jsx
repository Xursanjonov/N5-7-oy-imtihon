import React, { memo } from 'react'
import './products-loading.scss'

const ProductsLoading = () => {
    return (
        <div className="products-loading">
            <span class="loaders"></span>
        </div>
    )
}

export default memo(ProductsLoading)