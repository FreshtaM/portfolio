
import React from 'react'
import card3 from '../assets/Rectangle 58.png'
import arrow from '../assets/icons.png'

function Blog() {
  return (
<>
    <div id='blog' className='flex flex-row gap-[50rem] justify-center items-center flex-wrap mt-32 max-1180:flex-col  max-1180:gap-2'>
         <h1 className='text-[2rem]  font-Syne max-[450px]:text-[1rem] font-[600]'>
             From my blog
         </h1>

    <button class="flex gap-1 border border-black hover:bg-gray-200 hover:text-white   font-Open Sans font-[500] py-3 px-6  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
         View all<a href="#"><img src={arrow} className='  -rotate-45'/></a>
     </button>
     </div>

    <div className='flex flex-row justify-around max-700:flex-wrap'>
         <div className=' w-full flex flex-wrap  flex-row justify-center  items-center  mt-6 '>
         <div>
             <img src={card3} alt=""  width={208}/>
         </div>
         <div className='px-10 flex flex-col  justify-start bg-[#e8e3e3] py-10 '>
             <h1 className='text-[1.5rem]  font-Syne max-[450px]:text-[1rem] font-[600]'>
               Mental Health Issues of<br/> Designers
             </h1>
         </div>
         </div>

         <div className=' w-full flex flex-wrap flex-row justify-center  items-center mt-6 '>
         <div>
             <img src={card3} alt=""  width={208}/>
         </div>
         <div className='px-10 flex flex-col  justify-start bg-[#e8e3e3] py-10'>
             <h1 className='text-[1.5rem]  font-Syne max-[450px]:text-[1rem] font-[600]'>
                Mental Health Issues of<br/> Designers
             </h1>
         </div>
         </div>
    </div>
    </> 
  )
}

export default Blog