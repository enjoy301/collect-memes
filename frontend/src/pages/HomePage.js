import React from 'react';
import Thumbnail from '../components/Thumbnail';

const HomePage = () => {
  const renderImages = () => {
    const randomArray = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 600 + 400),
    );

    return randomArray.map((size, index) => (
      <Thumbnail key={index} height={size} />
    ));
  };

  return (
    <div className="w-100 px-2 pt-4 flex justify-center">
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
        {renderImages()}
      </div>
    </div>
  );
};

export default HomePage;
