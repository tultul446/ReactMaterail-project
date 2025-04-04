import React from 'react'

function Video() {
  return (
    <section className='bg-gray-100 py-24 px-12'>
      <div>
        <h1 className='text-center text-2xl md:text-5xl'>Use illustrations in UI design</h1>
        <div className='flex justify-center items-center mt-16 px-10 py-3 md:px-20 '>
        <video className='w-md object-cover rounded-xl ' src='video.mp4' controls />
        </div>
      </div>
    </section>
  )
}

export default Video;
