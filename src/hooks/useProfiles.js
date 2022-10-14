import { useEffect } from 'react';
import { useState } from 'react';

import { getProfiles } from '../services/profiles';

function useProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await getProfiles();

        setProfiles(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return { profiles, loading, error };
}

export default useProfiles;
