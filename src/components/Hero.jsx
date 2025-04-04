import React from 'react'

function Hero() {
  return (
    <>
     <section className='flex flex-col-reverse lg:flex-row item-center justify-between gap-8 py-16 px-6 lg:px-54 container mt-5'>
      <div className='flex-1 flex flex-col item-start gap-12 max-w-[1400px] mx-auto mt-5'>
        <h1 className='text-2xl lg:text-5xl
         font-bold max-w-lg'>Simply explained with illustrations</h1>
        <p className='text-lg lg:text-xl text-gray-500 max-w-md mt-[-20px]'>There are a lot of different components that will help you create the perfect look for your project</p>
       <div className='flex gap-3 flex-wrap'>
        <button className='bg-[#5F62E2] text-[#FFFFFF]  hover:bg-blue-500 font-semibold py-2 px-5 sm:py-3 sm:px-6 transition duration-300 rounded-lg text-md'>Get Started</button>

        <button className='bg-[#5F62E226] text-[#5F62E2]  hover:bg-indigo-300 hover:text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 transition duration-300 rounded-lg'>Learn More</button>
        </div>

      </div>

      <div className='flex-1'>
        <img className='w-full max-w-lg h-auto' src="public/Component 1.png" alt="" srcset="" />
      </div>
      </section>
    </>
  )
}

export default Hero
