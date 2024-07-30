import React from 'react'

export default function Footer() {
  return (
    <>
  <footer className='bg-slate-700  bottom-0 left-0 right-0 text-white '>
    <div className='container py-20'>
      <div className='flex flex-wrap text-center gap-y-7'>
        <div className='w-full md:basis-1/3'>
          <h3 className='text-2xl font-bold'>LOCATION</h3>
          <p className='py-3'>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>

        </div>
        <div className='w-full md:basis-1/3'>
          <h3 className='text-2xl font-bold'>AROUND THE WEB</h3>
          <div className="footer-icons mt-3">
            <span><i className='fa-brands fa-facebook mx-1 '></i></span>
            <span><i className='fa-brands fa-twitter mx-1  '></i></span>
            <span><i className='fa-brands fa-linkedin-in mx-1 '></i></span>
            <span><i className='fa-solid fa-globe mx-1  '></i></span>
          </div>

        </div>
        <div className='w-full md:basis-1/3'>
          <h3 className='text-2xl font-bold'>ABOUT FREELANCER</h3>
          <p className='mt-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

        </div>
      </div>
    </div>
    <div className='bg-[#1A252F] py-7 text-center'>
    <p>Copyright © Your Website 2021</p>
    </div>
  </footer>
    </>

  )
}
