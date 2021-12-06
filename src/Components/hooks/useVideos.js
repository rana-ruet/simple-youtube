import { useState, useEffect } from 'react';
import YouTube from '../api/YouTube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (search) => {
    const res = await YouTube.get('/search', {
      params: {
        q: search,
      },
    });

    setVideos(res.data.items);
  };

  return [videos, search];
};

export default useVideos;
