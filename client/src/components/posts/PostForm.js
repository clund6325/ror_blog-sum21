import { useState, useEffect } from 'react';
const PostForm = ({ addPost }) => {
  const [post, setPost] = useState({ tile: "", body: "", author: "" })
  const handleSubmit = (e) => {
    e.preventDefault()
    addPost(post)
    setPost({ tile: "", body: "", author: "" })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="tile"
        value={post.tile}
        onChange={(e) => setPost({ ...post, tile: e.target.value })}
        placeholder="title"
        required
      />
      <input
        name="body"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="body"
        required
      />
      <input
        name="author"
        value={post.author}
        onChange={(e) => setPost({ ...post, author: e.target.value })}
        placeholder="author"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}
export default PostForm;