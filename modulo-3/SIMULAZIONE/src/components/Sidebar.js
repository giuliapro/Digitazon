import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const posts = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
    const location = useLocation();

    return (
        <nav className="sidebar">
            {posts.map((post, index) => (
                <p key={index}>
                    <Link className='single-post-nav' to={`/post/${index + 1}`}
                        style={{ backgroundColor: location.pathname === `/post/${index + 1}` ? 'gray' : '' }}>
                        {post}
                    </Link>
                </p>
            ))}
        </nav>
    );
}

export default Sidebar;
