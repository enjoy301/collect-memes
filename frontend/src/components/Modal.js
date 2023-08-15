import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../stores/modalSlice';
import YoutubeIcon from '../assets/images/youtube.png';
import TiktokIcon from '../assets/images/tiktok.png';
import XButton from '../assets/images/x-button.png';
import { useAddFeedMutation } from '../apis/feedAPI';

const Modal = () => {
  const { modalText, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [addFeed, { isSuccess }] = useAddFeedMutation();

  const handleSaveClick = () => {
    addFeed({
      provider: modalType,
      link: modalText,
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

  const renderModalIcon = () => {
    if (modalType === 'youtube') {
      return YoutubeIcon;
    }
    if (modalType === 'tiktok') {
      return TiktokIcon;
    }
    return '';
  };

  const renderModalHeader = () => {
    if (modalType === 'youtube') {
      return 'Shorts 저장하기';
    }
    if (modalType === 'tiktok') {
      return 'TikTok 저장하기';
    }
    return '';
  };

  return (
    <div className="fixed bottom-3 bg-white border w-11/12 h-16 rounded-[15px] flex items-center sm:w-96">
      <div className="basis-12 shirnk-0 pl-3">
        <img
          className="w-full h-full rounded-full"
          src={renderModalIcon()}
          alt="youtube"
        />
      </div>
      <div className="flex-grow shirnk pl-2 truncate">
        <button
          type="button"
          className="flex flex-col truncate"
          onClick={handleSaveClick}
        >
          <div className="text-base">{renderModalHeader()}</div>
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
