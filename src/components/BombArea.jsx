import React from 'react'

function BombArea() {
  return (
    <section className='bg-[#5F62E2] w-full h-auto mb-5'>
      {/* parent div */}
   <div className='flex flex-col lg:flex-row items-center justify-between mt-24 max-w-[1400px] md:px-4 px-2'>
     
     {/* child dev */}
    <div className='flex-1 flex flex-col gap-8 p-5'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white text-center md:text-start'>The quickest way to create awesome presentation </h1>
        <div className='flex md:gap-3 gap-5 flex-wrap mt-5'>
        <button className='bg-green-400 text-[#FFFFFF]  hover:bg-green-200 hover:text-black   font-semibold py-2 px-5 sm:py-3 sm:px-6 transition duration-300 rounded-lg text-md'>Get Started</button>

        <button className='bg-blue-400 text-[#5F62E2]  hover:bg-indigo-300 hover:text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 transition duration-300 rounded-lg'>Learn More</button>
        </div>
    </div>

    <div className='flex-1'>
      <img className='w-full h-auto md:h-[300px] md:ms-[-30px]' src="public/bomb 1.png" alt="" />
    </div>


   </div>

    </section>
  )
}

export default BombArea;

