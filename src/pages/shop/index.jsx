import { memo, useState } from 'react'
import { useGetProductsQuery } from '../../context/api/productApi'
import ProductsItem from '../../components/products-cart/ProductsItem'
import Loading from '../../components/loading'
import Newsletter from '../../components/newsletter'
// Pagination
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// Pagination end
import './shop.scss'
import ShopHero from '../../components/hero/ShopHero'

const Shop = () => {
    const [limit, setLimit] = useState(8)
    const [page, setPage] = useState(1)
    const { data: dataLength } = useGetProductsQuery()
    // const [categorys, setCategorys] = useState(categories?.map(category => category?.name))
    const { data: shopData, isFetching } = useGetProductsQuery({ limit, page })

    const handleChange = (_, value) => {
        setPage(value)
    }
    const lengthPage = React.useMemo(() => (Math.ceil(dataLength?.length / limit)))

    return isFetching ? <Loading /> : (
        <section className='shop'>
            <ShopHero />
            <div className='shop__container'>
                {
                    shopData?.map(el => (
                        <ProductsItem key={el?.id} product={el} />
                    ))
                }
            </div>
            <div className="stack-container">
                <Stack spacing={2}>
                    <Pagination size='medium' count={lengthPage} page={page} onChange={handleChange} color="standard" />
                </Stack>
                <select value={limit} onChange={(e) => setLimit(e.target.value)}>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <Newsletter />
        </section>
    )
}

export default memo(Shop)