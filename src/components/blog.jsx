
import React from 'react'
import { ArrowForward } from '@mui/icons-material';
function Blog() {

const CardData =[
    {
       id:1,
       imgSrc:"public/vase-1-b 2 (1).png",
       title:"Make myspace your best designed space",
       description:"A lot of different components that will help you create the perfect look for your project",
       buttonLabel:"Design"
    },
    {
       id:2,
       imgSrc:"public/vase-1-b 2.png",
       title:"My company culture has changed today",
       description:"A lot of different components that will help you create the perfect look for your project",
       buttonLabel:"3D illustrations"
    },
    {
       id:3,
       imgSrc:"public/Group 40 (1).png",
       title:"Professionals in craft! All products were super great",
       description:"A lot of different components that will help you create the perfect look for your project",
       buttonLabel:"Development"
    }



]

  return (
    <section className='max-w-[1400px] mx-auto py-12 px-6'>
      <div className='flex flex-col sm:flex-row justify-between items-center mb-10'>
       <div>
         <h1 className='text-3xl lg:text-6xl font-bold text-gray-800'>Get more from our blog</h1>
       <p className='max-w-lg text-[22px] mt-1 text-gray-400 '>There are a lot of different components that will help you create the perfect look for your project</p>
       </div>
      <div>
         <button className='bg-[#5F62E226] text-[#5F62E2]  hover:bg-indigo-300 hover:text-white font-semibold py-3 px-6 transition duration-300 rounded-lg'>
                    Explore All
                <ArrowForward sx={{ fontSize: 24}}/>
                    </button>
      </div>

      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !p-5 '>
    {
     CardData.map((card)=> (
        <div key={card.id} className='bg-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 '>
         
       <img src={card.imgSrc} alt="" />
       <div className='p-6'>
       <h3 className='text-xl md:text-2xl font-semibold mb-2 '>{card.title}</h3>
       <p className='text-gray-600 mb-4'>{card.description}</p>
       <button className='text-sm py-2 px-3 rounded text-[#2AB691] bg-green-100 hover:bg-green-300 hover:text-black'>{card.buttonLabel}</button>
       </div>


        </div>
     ))
    }
      </div>
    </section>
  )
}

export default Blog;
