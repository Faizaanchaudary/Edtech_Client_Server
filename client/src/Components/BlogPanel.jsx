import React, { useState } from 'react';
import './BlogPanel.css'; 

function BlogUploadPanel() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = () => {
    
    console.log('Posting Blog:', title, content);
  };

  const handleReset = () => {
    // Word with data fuctions here Faizan


    setTitle('');
    setContent('');
  };

  return (
    <div className="blog-upload-panel">
      <h2>Blog Upload Panel</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
      />
      
      <label htmlFor="File">Enter the Blog Image:</label>
      <input
        type="file"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
      />

      <label  htmlFor="content">Content:</label>
      <textarea className='textareasize'
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter blog content"
      ></textarea>
      
      <div className="button-container">
        <button className="post-button" onClick={handlePost}>
          Post
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default BlogUploadPanel;