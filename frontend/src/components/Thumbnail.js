import React, { useState, useEffect } from 'react';
import { useLazyGetThumbnailQuery } from '../apis/tiktokAPI';
import ImageSkeleton from './ImageSkeleton';

const Thumbnail = ({ link, videoId }) => {
  const [getThumbnail, { data, isSuccess }] = useLazyGetThumbnailQuery();
  const [src, setSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="pb-4 w-full sm:w-60">
      <button className="w-full sm:w-60" type="button" onClick={handleClick}>
        {isLoading && <ImageSkeleton />}
        <img
          className={`rounded-2xl${isLoading ? ' hidden' : ''}`}
          src={src}
          alt={link}
          onLoad={handleImageLoad}
        />
      </button>
    </div>
  );
};

export default Thumbnail;
