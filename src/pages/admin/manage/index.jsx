import { memo, useState } from 'react'
import { useGetProductsQuery } from '../../../context/api/productApi'
// Pagination
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// Pagination end
import ProductsLoading from '../../../components/loading/ProductsLoading';
import ProductsItem from '../../../components/products-cart/ProductsItem';
import './manage-product.scss'

const ManageProduct = () => {
    const [page, setPage] = useState(1)
    const { data: dataLength } = useGetProductsQuery()
    const { data: products, isFetching } = useGetProductsQuery({ limit: 10, page })

    const handleChange = (_, value) => {
        setPage(value)
    }
    const lengthPage = React.useMemo(() => (Math.ceil(dataLength?.length / 10)))

    return (
        <div className='manage'>
            <div className='manage__content'>
                <h1 className='manage__content-h1'>Manage Product</h1>
                <div className='manage__container'>
                    {
                        isFetching ? <ProductsLoading /> : products?.map(product => (
                            <ProductsItem admin={true} key={product.id} product={product} />
                        ))
                    }
                </div>
                <Stack spacing={2} className='stack-products'>
                    <Pagination size='medium' count={lengthPage} page={page} onChange={handleChange} color="standard" />
                </Stack>
            </div>
        </div>
    )
}

export default memo(ManageProduct)