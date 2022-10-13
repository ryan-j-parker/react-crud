import { useEffect } from 'react';
import { useState } from 'react';

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
  return { posts, loading, error };
}

export default usePosts;
