import React from 'react'
import img from '../../assets/avataaars.svg'

export default function StartFramework() {
  return (
    <>
    <header className='min-h-screen text-white flex  flex-wrap justify-center items-center bg-[#1ABC9C]'>
    <div className='container  text-center '>
      <div >
    <img src={img} className='w-72 mt-24 mx-auto' alt="" />
    <h1 className='text-4xl uppercase font-bold font-display  mt-14'>start Framework</h1>
    <div className='icon-Home my-5'>
    <i class="fa-solid fa-star " ></i></div>
    <span className='block'>Graphic Artist - Web Designer - Illustrator</span>
      </div>
      
    </div>
      </header></>
  )
}
