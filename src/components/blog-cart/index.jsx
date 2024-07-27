import React from 'react';
import './BlogCard.scss';

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-info">
                <h3>{blog.title}</h3>
                <p>{blog.date}</p>
            </div>
        </div>
    );
};

export default BlogCard;
