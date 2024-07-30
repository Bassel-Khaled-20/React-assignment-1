import React from 'react'

export default function About() {
  return (
    <>
      <section className='min-h-screen text-white flex  flex-wrap justify-center items-center bg-[#1ABC9C]'>
        <div className='container   '>
          <div  className='text-center'>
            <h2 className='text-4xl uppercase  font-bold font-display  mt-14'>about component
            </h2>
            <div className='icon-Home my-5'>
              <i class="fa-solid fa-star " ></i></div>
          </div>
          <div className="container">
            <div className='flex flex-wrap  gap-y-7'>
              <div className='w-full md:basis-1/2'>
                <div>
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
              <div className='w-full md:basis-1/2'>
                <div>
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section></>
  )
}
