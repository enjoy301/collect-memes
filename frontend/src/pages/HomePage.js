import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Thumbnail from '../components/Thumbnail';
import Modal from '../components/Modal';
import { setTrue } from '../stores/modalSlice';
import { useGetFeedsQuery } from '../apis/feedAPI';

const HomePage = () => {
  const isModalOpen = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  const { data, isSuccess } = useGetFeedsQuery();

  const renderFeeds = (feeds) => {
    return feeds.map((feed) => (
      <Thumbnail key={feed.id} link={feed.link} youtubeId={feed.youtube_id} />
    ));
  };

  useEffect(() => {
    navigator.clipboard.readText().then((text) => {
      console.log(text);

      dispatch(setTrue());
    });
  }, []);

  return (
    <div className="w-100 px-2 pt-4 flex justify-center">
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
        {isSuccess && renderFeeds(data)}
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default HomePage;
