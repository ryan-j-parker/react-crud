import { useEffect } from 'react';
import { useState } from 'react';

import { getPosts } from '../services/posts';

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getPosts();

        setPosts(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    };
    loadData();
  }, []);
  return { posts, loading, error };
}

export default usePosts;
