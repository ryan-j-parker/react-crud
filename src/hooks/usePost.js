import { useEffect } from 'react';
import { useState } from 'react';

import { getPostById } from '../services/posts';

function usePost(id) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await getPostById(id);

        setPost(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    loadData();
  }, [id]);
  return { post, loading, error };
}

export default usePost;
