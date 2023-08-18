import React, { useState, useEffect } from 'react';

import { useLazyGetThumbnailQuery } from '../apis/tiktokAPI';
import { useLikeFeedMutation } from '../apis/feedAPI';

import ImageSkeleton from './ImageSkeleton';

import EmptyHeart from '../assets/images/empty_heart.png';
import FilledHeart from '../assets/images/filled_heart.png';

const Thumbnail = ({ id, link, videoId, isLike }) => {
  const [src, setSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(isLike);

  const [getThumbnail, { data, isSuccess }] = useLazyGetThumbnailQuery();
  const [pushLike, { data: likeData, isSuccess: isLikeSucceess }] =
    useLikeFeedMutation();

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

    if (isLikeSucceess) {
      setIsLiked(likeData.is_like);
    }
  }, [isSuccess, isLikeSucceess]);

  const handleClick = () => {
    window.open(link, '_blank');
  };

  const handleHeartClick = () => {
    pushLike({ id, isLike: !isLiked });
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="pb-4 w-full sm:w-60 group relative">
      <button className="w-full sm:w-60" type="button" onClick={handleClick}>
        {isLoading && <ImageSkeleton />}
        <img
          className={`rounded-2xl group-hover:brightness-50${
            isLoading ? ' hidden' : ''
          }`}
          src={src}
          alt={link}
          onLoad={handleImageLoad}
        />
      </button>
      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white hidden group-hover:flex justify-center items-center">
        <button
          className="w-4/6 h-4/6"
          type="button"
          onClick={handleHeartClick}
        >
          <img
            className="w-full h-full"
            src={isLiked ? FilledHeart : EmptyHeart}
            alt="heart"
          />
        </button>
      </div>
    </div>
  );
};

export default Thumbnail;
