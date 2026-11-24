import { useState, useEffect } from 'react';
import { getPosts } from './api.js';
import './Lesson07Styles.css';

export default function FetchOnRender() {
  // Store fetched posts
  const [posts, setPosts] = useState([]);

  // Stretch goals: loading and error states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch posts when the component mounts
  useEffect(() => {
    let ignore = false;

    async function fetchPosts() {
      try {
        const data = await getPosts();

        if (!ignore) {
          setPosts(data);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    fetchPosts();

    // Ignore outdated responses after cleanup
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>

      <div className="content">
        {/* Display loading and error messages */}
        {isLoading && <p>Loading posts...</p>}
        {error && <p>{error}</p>}

        {/* Display fetched data when the component renders */}
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
