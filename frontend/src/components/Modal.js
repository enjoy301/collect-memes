import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../stores/modalSlice';
import YoutubeIcon from '../assets/images/youtube.png';
import XButton from '../assets/images/x-button.png';
import { useAddFeedMutation } from '../apis/feedAPI';

const Modal = () => {
  const { modalText } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [addFeed, { isSuccess }] = useAddFeedMutation();

  const handleSaveClick = () => {
    const urlObj = new URL(modalText);
    const videoId = urlObj.pathname.split('/').pop();

    addFeed({
      provider: 'youtube',
      link: modalText,
      youtube_id: videoId,
    });
  };

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    if (isSuccess) {
      window.location.reload();
    }
  }, [isSuccess]);

  return (
    <div className="fixed bottom-3 bg-white border w-11/12 h-16 rounded-[15px] flex items-center sm:w-96">
      <div className="basis-12 shirnk-0 pl-3">
        <img
          className="w-full h-full rounded-full"
          src={YoutubeIcon}
          alt="youtube"
        />
      </div>
      <div className="flex-grow shirnk pl-2 truncate">
        <button
          type="button"
          className="flex flex-col truncate"
          onClick={handleSaveClick}
        >
          <div className="text-base">Shorts 저장하기</div>
          <div className="text-xs text-slate-600 truncate">{modalText}</div>
        </button>
      </div>
      <button
        className="basis-9 shirnk-0 pr-3 pl-3 h-full"
        type="button"
        onClick={handleModalClose}
      >
        <img className="w-full" src={XButton} alt="x-button" />
      </button>
    </div>
  );
};

export default Modal;
