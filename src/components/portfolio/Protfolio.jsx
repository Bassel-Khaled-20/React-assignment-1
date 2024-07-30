import React, { useState } from 'react';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Protfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  const display = (img) => {
    setSelectedImg(img);
  }

  const closeModal = () => {
    setSelectedImg(null);
  }

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  return (
    <>
      <section className='py-5'>
        <div className='container'>
          <div className='text-center text-slate-700'>
            <h2 className='text-4xl uppercase font-bold font-display mt-32'>
              Contact Section
            </h2>
            <div className='icon-contact my-5'>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className='flex flex-wrap text-center gap-y-7'>
            <div onClick={() => display(img1)} className='w-full cursor-pointer md:basis-1/3'>
              <div className='w-11/12 relative rounded-lg overflow-hidden group'>
                <img src={img1} alt="" />
                <div className='bg-[rgb(26,188,156,0.9)] opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 group-hover:opacity-90 transition-opacity duration-500'>
                  <i className='text-white fa-solid fa-plus fa-5x'></i>
                </div>
              </div>
            </div>
            <div onClick={() => display(img2)} className='w-full cursor-pointer md:basis-1/3'>
              <div className='w-11/12 relative rounded-lg overflow-hidden group'>
                <img src={img2} alt="" />
                <div className='bg-[rgb(26,188,156,0.9)] opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 group-hover:opacity-90 transition-opacity duration-500'>
                  <i className='text-white fa-solid fa-plus fa-5x'></i>
                </div>
              </div>
            </div>
            <div onClick={() => display(img3)} className='w-full cursor-pointer md:basis-1/3'>
              <div className='w-11/12 relative rounded-lg overflow-hidden group'>
                <img src={img3} alt="" />
                <div className='bg-[rgb(26,188,156,0.9)] opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 group-hover:opacity-90 transition-opacity duration-500'>
                  <i className='text-white fa-solid fa-plus fa-5x'></i>
                </div>
              </div>
            </div>
            <div onClick={() => display(img1)} className='w-full cursor-pointer md:basis-1/3'>
              <div className='w-11/12 relative rounded-lg overflow-hidden group'>
                <img src={img1} alt="" />
                <div className='bg-[rgb(26,188,156,0.9)] opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 group-hover:opacity-90 transition-opacity duration-500'>
                  <i className='text-white fa-solid fa-plus fa-5x'></i>
                </div>
              </div>
            </div>
            <div onClick={() => display(img2)} className='w-full cursor-pointer md:basis-1/3'>
              <div className='w-11/12 relative rounded-lg overflow-hidden group'>
                <img src={img2} alt="" />
                <div className='bg-[rgb(26,188,156,0.9)] opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 group-hover:opacity-90 transition-opacity duration-500'>
                  <i className='text-white fa-solid fa-plus fa-5x'></i>
                </div>
              </div>
            </div>
            <div onClick={() => display(img3)} className='w-full cursor-pointer md:basis-1/3'>
              <div className='w-11/12 relative rounded-lg overflow-hidden group'>
                <img src={img3} alt="" />
                <div className='bg-[rgb(26,188,156,0.9)] opacity-0 flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 group-hover:opacity-90 transition-opacity duration-500'>
                  <i className='text-white fa-solid fa-plus fa-5x'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImg && (
        <div 
          className='fixed top-0 left-0 right-0 bottom-0 bg-blue-500 bg-opacity-50 z-40 flex justify-center items-center'
          onClick={handleBackgroundClick}
        >
          <div className='relative w-5/12'>
            <img src={selectedImg} alt="Selected" className='max-w-full max-h-full' />
          </div>
        </div>
      )}
    </>
  );
}

