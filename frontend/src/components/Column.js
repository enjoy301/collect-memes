import React from 'react';

import Thumbnail from './Thumbnail';

const Column = ({ feeds }) => {
  const renderFeeds = () => {
    return feeds.map((feed) => {
      return (
        <Thumbnail
          key={feed.id}
          id={feed.id}
          link={feed.link}
          thumbnailUrl={feed.object_url}
          isLike={feed.is_like}
        />
      );
    });
  };

  return <div className="flex flex-col">{renderFeeds()}</div>;
};

export default Column;
