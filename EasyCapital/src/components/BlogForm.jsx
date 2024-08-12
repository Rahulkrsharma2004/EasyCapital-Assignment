import { useState, useEffect } from 'react';

const BlogForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-8 max-w-md mx-auto">
        <div className="mb-4">
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Title" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder="Content" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-9 py-2 text-lg font-semibold rounded-lg hover:bg-blue-600 max-w-md mx-auto block"
        >
          {initialData ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
