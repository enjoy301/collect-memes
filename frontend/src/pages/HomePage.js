import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Thumbnail from '../components/Thumbnail';
import Modal from '../components/Modal';
import { setTrue } from '../stores/modalSlice';

const HomePage = () => {
  const isModalOpen = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  const renderImages = () => {
    const randomArray = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 600 + 400),
    );

    return randomArray.map((size, index) => (
      <Thumbnail key={index} height={size} />
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
        {renderImages()}
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default HomePage;
