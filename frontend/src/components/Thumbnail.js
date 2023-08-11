import React from 'react';

const Thumbnail = ({ height }) => {
  return (
    <div className="pb-4 w-full sm:w-60">
      <img
        className="rounded-2xl"
        src={`https://picsum.photos/400/${height}`}
        alt=""
      />
    </div>
  );
};

export default Thumbnail;
