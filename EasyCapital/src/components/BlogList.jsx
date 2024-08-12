// import React from 'react';

const BlogList = ({ blogs, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-gray-700 mb-4">{blog.content}</p>
          <div className="flex justify-between">
            <button 
              onClick={() => onEdit(blog)} 
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(blog.id)} 
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
