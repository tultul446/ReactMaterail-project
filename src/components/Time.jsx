import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ArrowForward } from '@mui/icons-material';


function Time() {
  return (
    <section className='gap-24 py-16 px-6 lg:px-16 max-w-[1400px] mx-auto'>
  
        {/* section 1 */}

      <div className='flex flex-col-reverse lg:flex-row items-center justify-between '>
        {/* left side */}
        <div className='flex-1 items-start'>
            <img className='w-full h-auto max-w-lg lg:mb-16 lg:ml-10' src="cake 2.png" alt=""/>
        </div>
          
          {/* right side */}
        <div className='flex flex-1 flex-col gap-4'>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>Make more time for the work</h1>
            <p className='text-black text-lg'><CheckCircleIcon className='text-green-600 me-1'/> <span>Many ways to use illustrations in design</span></p>
            <p className='text-black text-lg'><CheckCircleIcon className='text-green-600 me-1'/> <span>Simply explained with illustrations</span></p>
            <p className='text-black text-lg'><CheckCircleIcon className='text-green-600 me-1'/> <span>Make more time for the work</span></p>

            <div className=' gap-3'>
              
        <button className='bg-indigo-300 text-white hover:bg-indigo-600 hover:text-white font-semibold flex items-center gap-2 mx-auto sm:mx-0 py-3 px-6 transition duration-300 rounded-lg'>
        Learn more
        <ArrowForward sx={{ fontSize: 24}}/>
            </button>

            </div>
        </div>
      </div>


         {/* section 2 */}


<div className='flex flex-col lg:flex-row items-center justify-between mt-10'>
      

        {/* left side */}
      
          
        <div className='flex flex-1 flex-col gap-4'>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>Make more time for the work</h1>
            <p className='text-black text-lg'><CheckCircleIcon className='text-green-600 me-1'/> <span>Many ways to use illustrations in design</span></p>
            <p className='text-black text-lg'><CheckCircleIcon className='text-green-600 me-1'/> <span>Simply explained with illustrations</span></p>
            <p className='text-black text-lg'><CheckCircleIcon className='text-green-600 me-1'/> <span>Make more time for the work</span></p>

            <div className=' gap-3'>
              
        <button className='bg-indigo-500 text-white hover:bg-indigo-300 hover:text-white font-semibold flex items-center gap-2 mx-auto sm:mx-0 py-3 px-6 transition duration-300 rounded-lg'>
        Learn more
        <ArrowForward sx={{ fontSize: 24}}/>
            </button>

            </div>
        </div>

 {/* right side */}
        <div className='flex-1 items-start'>
            <img className='w-full h-auto max-w-lg lg:mb-16 lg:ml-10 sm:mt-5' src="Group 22.png" alt=""/>
        </div>

      </div>




    </section>
  )
}

export default Time;
