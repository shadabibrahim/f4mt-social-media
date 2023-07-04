
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
  }, [dispatch, id]);

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
        <div className="loader-container">
          <div className="loader"></div>
          <div>Loading...</div>
        </div>
      );
  }
  return (
    <div className="d_page">
      <nav className="Navbar">Social Media App</nav>
      <div className="detail-container">
     <span> Details Page For Post With ID </span><span style={{ color: 'pink' }}> {post.id} </span>
     <p> <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" /></p>
       
        <h5>
          User Id: {post.id}
        </h5>
        <p>
        Title: <span>{post.title}</span> 
        </p>
        <p>
        Body: <span style={{ color: 'wheat' }}>  {post.body}</span>
         
        </p>
      </div>
    </div>
  );
};

export default Detail;