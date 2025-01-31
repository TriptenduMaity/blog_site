import { useState } from "react";
import axios from "axios";
import './createpost.css';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/posts`,
      { title, content },
      { headers: { Authorization: token } }
    );
  };

  return (
    <form onSubmit={handleCreatePost}>
      <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePost;
