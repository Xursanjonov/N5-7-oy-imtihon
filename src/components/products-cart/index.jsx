import { Fragment, memo, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import { useGetProductsQuery } from '../../context/api/productApi';
import ProductsLoading from '../loading/ProductsLoading';
import ProductsItem from './ProductsItem'
import Button from '../button'
// Pagination
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// Pagination end
import './products-wrapper.scss';

const ProductsWrapper = ({ categories }) => {
    const [page, setPage] = useState(1)
    const { data: dataLength } = useGetProductsQuery()
    const [categorys, setCategorys] = useState(categories?.map(category => category?.name))
    const { data: products, isFetching } = useGetProductsQuery({ limit: 8, page })

    const handleChange = (_, value) => {
        setPage(value)
    }
    const lengthPage = React.useMemo(() => (Math.ceil(dataLength?.length / 8)))

    return (
        <Fragment>
            <div className="home__products-title">
                <h3 className='home__products-title-h3'>New Arrivals</h3>
                <Button title={'More Products'} icon={<GrFormNextLink fontSize={20} color='#0009' />} />
            </div>
            <ul className="home__categories">
                {
                    categories?.map(category => (
                        <li disabled={categorys === category?.name} onClick={() => setCategorys(category?.name)} key={category?.id} className='home__categories-item'>
                            <div className="item-img">
                                <img className='item-img-image' src={category?.image} alt="" />
                            </div>
                            <p className='item-name'>{category?.name}</p>
                        </li>
                    ))
                }
            </ul>
            <div className='home__products container__ns'>
                {
                    isFetching ? <ProductsLoading /> : products?.map(product => (
                        <ProductsItem key={product.id} product={product} />
                    ))
                }
            </div>
            <Stack spacing={2} className='stack-products'>
                <Pagination size='medium' count={lengthPage} page={page} onChange={handleChange} color="standard" />
            </Stack>
        </Fragment>
    )
}

export default memo(ProductsWrapper)