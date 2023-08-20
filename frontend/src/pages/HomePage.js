import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import Modal from '../components/Modal';

import { setText, openModal, setModalType } from '../stores/modalSlice';
import { useGetFeedsQuery } from '../apis/feedAPI';
import renderColumns from '../utils/RenderColumns';

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { data, isSuccess } = useGetFeedsQuery();

  const onUpdateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onUpdateWindowSize);

    navigator.clipboard.readText().then((text) => {
      if (text.startsWith('https://youtube.com/shorts')) {
        dispatch(setModalType('youtube'));

        dispatch(setText(text));
        dispatch(openModal());
      } else if (text.startsWith('https://www.tiktok.com/')) {
        dispatch(setModalType('tiktok'));

        dispatch(setText(text));
        dispatch(openModal());
      }
    });

    return () => {
      window.removeEventListener('resize', onUpdateWindowSize);
    };
  }, []);

  return (
    <div className="w-100 flex flex-col">
      <Header />
      <div className="w-100 px-2 pt-2 sm:pt-[96px] flex justify-center gap-2 sm:gap-4">
        {isSuccess && renderColumns(windowWidth, data)}
        {isModalOpen && <Modal />}
      </div>
    </div>
  );
};

export default HomePage;
