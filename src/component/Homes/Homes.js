import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className='h_page'>
    <nav className='Navbar'> Social Media App</nav>
    <div className="home-container">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
          <div className='details'>
          <h5>User Id: {post.id} </h5>
          <h5>
            Title:{' '}
              {post.title.slice(0, 17)}...
          </h5>
           Body:{' '} {post.body.slice(0, 50)}...
           <p>
          <Link to={`/item/${post.id}`} 
         
          className="read-more-link">
            Read More...
          </Link></p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;