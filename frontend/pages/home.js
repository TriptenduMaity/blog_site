import { useEffect, useState } from "react";
import axios from "axios";
import './home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/posts`).then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>By {post.author.username}</small>
        </div>
      ))}
    </div>
  );
};

export default Home;
