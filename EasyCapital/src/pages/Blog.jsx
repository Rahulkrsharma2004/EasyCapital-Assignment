import { useState } from 'react';
import BlogList from '../components/BlogList';
import BlogForm from '../components/BlogForm';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const handleAddBlog = (blog) => {
    if (editingBlog) {
      setBlogs(
        blogs.map((b) => (b.id === editingBlog.id ? { ...b, ...blog } : b))
      );
      setEditingBlog(null);
    } else {
      setBlogs([...blogs, { id: Date.now(), ...blog }]);
    }
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
  };

  return (
    <div className="pt-20">
      <div className="m-5">
        <h2 className='text-2xl font-bold  text-center'>EASY-CAPITAL BLOG</h2>
      </div>
      <BlogForm onSubmit={handleAddBlog} initialData={editingBlog} />
      <BlogList blogs={blogs} onDelete={handleDeleteBlog} onEdit={handleEditBlog} />
    </div>
  );
};

export default Blog;
