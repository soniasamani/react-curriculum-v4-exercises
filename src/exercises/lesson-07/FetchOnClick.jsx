import { useState } from 'react';
import { getSinglePost } from './api.js';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  // Store the fetched single post
  const [post, setPost] = useState(null);

  // Stretch goals: loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch a single post when the Get post button is clicked
  async function handleGetPost() {
    setIsLoading(true);
    setError('');

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button type="button" onClick={handleGetPost} disabled={isLoading}>
        Get post
      </button>

      <div className="content">
        {/* Display loading and error messages */}
        {isLoading && <p>Loading post...</p>}
        {error && <p>{error}</p>}

        {/* Display fetched data when the Get post button is clicked */}
        {post && (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}
