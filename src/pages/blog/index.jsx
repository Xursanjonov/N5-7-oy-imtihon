import React, { useEffect } from 'react'
import { memo } from 'react'
import Newsletter from '../../components/newsletter'
import Bloghero from '../../components/hero/Bloghero'

const Blog = () => {
    useEffect(() => { window.scroll(0, 0) }, [])

    return (
        <section className='blog'>
            <Bloghero />
            <Newsletter />
        </section>
    )
}

export default memo(Blog)