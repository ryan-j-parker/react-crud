import { useEffect } from 'react';
import { useState } from 'react';
import { deletePost } from '../services/posts';
import { getPosts } from '../services/posts';

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await getPosts();

        setPosts(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    loadData();
  }, []);
  const handleDeletePost = async (id) => {
    await deletePost(id);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };
  return { posts, loading, error, handleDeletePost };
}

export default usePosts;
