import React, { useState, useEffect } from 'react';
import { useLazyGetThumbnailQuery } from '../apis/tiktokAPI';

const Thumbnail = ({ link, videoId }) => {
  const [getThumbnail, { data, isSuccess }] = useLazyGetThumbnailQuery();
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (link.startsWith('https://youtube.com/shorts')) {
      setSrc(`https://i.ytimg.com/vi/${videoId}/oar2.jpg`);
    } else if (link.startsWith('https://www.tiktok.com/')) {
      getThumbnail(link);
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setSrc(data);
    }
  }, [isSuccess]);

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="pb-4 w-full sm:w-60">
      <button type="button" onClick={handleClick}>
        <img className="rounded-2xl" src={src} alt={link} />
      </button>
    </div>
  );
};

export default Thumbnail;
