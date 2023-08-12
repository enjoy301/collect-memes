import React from 'react';
import { useDispatch } from 'react-redux';
import { setFalse } from '../stores/modalSlice';
import YoutubeIcon from '../assets/images/youtube.png';
import XButton from '../assets/images/x-button.png';

const Modal = () => {
  const dispatch = useDispatch();

  const handleSaveClick = () => {
    console.log('click');
  };

  const handleModalClose = () => {
    dispatch(setFalse());
  };

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
          <div className="text-xs text-slate-600 truncate">
            https://www.youtube.com/live/RjCG1LkLcEI?feature=share
          </div>
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
