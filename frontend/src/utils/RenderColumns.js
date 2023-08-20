import React from 'react';

import Column from '../components/Column';

const getRowestColumnIndex = (columnHeights) => {
  let rowestColumnIndex = 0;

  columnHeights.forEach((columnHeight, index) => {
    if (columnHeight < columnHeights[rowestColumnIndex]) {
      rowestColumnIndex = index;
    }
  });

  return rowestColumnIndex;
};

const renderColumns = (windowWidth, feeds) => {
  const columnCount = Math.max(Math.min(Math.floor(windowWidth / 252), 5), 2);
  const columnData = Array.from({ length: columnCount }, () => []);
  const columnHeights = Array.from({ length: columnCount }, () => 0);
  const columns = [];

  feeds.forEach((feed) => {
    const columnIndex = getRowestColumnIndex(columnHeights);

    columnData[columnIndex].push(feed);

    columnHeights[columnIndex] += (feed.height * 236) / feed.width;
  });

  columnData.forEach((data, index) => {
    columns.push(
      <Column key={index} feeds={data} className="flex flex-col gap-4" />,
    );
  });

  return columns;
};

export default renderColumns;
