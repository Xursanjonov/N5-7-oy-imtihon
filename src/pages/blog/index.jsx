import React from 'react'
import { memo } from 'react'
import Newsletter from '../../components/newsletter'
import Bloghero from '../../components/hero/Bloghero'

const Blog = () => {
    return (
        <section className='blog'>
            <Bloghero />
            <Newsletter />
        </section>
    )
}

export default memo(Blog)