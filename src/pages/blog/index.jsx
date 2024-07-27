import React, { useEffect } from 'react'
import { memo } from 'react'
import BlogCard from '../../components/blog-cart';
import { blogsList } from '../../static';
import Newsletter from '../../components/newsletter'
import Bloghero from '../../components/hero/Bloghero'
import './blog.scss';

const Blog = () => {

    useEffect(() => { window.scroll(0, 0) }, [])

    return (
        <section className="blog">
            <Bloghero />
            <div className="blog-list-container">
                <div className="tabs">
                    <button className="active">All Blog</button>
                    <button>Featured</button>
                </div>
                <div className="sort-options">
                    <span>Sort by</span>
                    <select>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>
                </div>
                <div className="blog-grid">
                    {blogsList?.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
                <button className="show-more">Show more</button>
            </div>
            <Newsletter />
        </section>
    )
}

export default memo(Blog)