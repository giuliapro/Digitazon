import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Post from './Post';

function Home() {
    return (
        <div className='wrapper'>
            <div className='wrapper'>
                <h1>Il mio forum</h1>
            </div>
            <div>
                <BrowserRouter>
                    <div className="content">
                        <Sidebar />
                        <Routes>
                            <Route path="/post/:postId" element={<Post />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </div>

    );
}

export default Home;
