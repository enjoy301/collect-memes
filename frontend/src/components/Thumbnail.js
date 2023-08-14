import React from 'react';

const Thumbnail = ({ link, youtubeId }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="pb-4 w-full sm:w-60">
      <button type="button" onClick={handleClick}>
        <img
          className="rounded-2xl"
          src={`https://i.ytimg.com/vi/${youtubeId}/oar2.jpg`}
          alt={link}
        />
      </button>
    </div>
  );
};

export default Thumbnail;
