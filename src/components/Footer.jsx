import React from 'react'
import thumb from '../assets/thumb-up-dynamic-clay.png'
import messageicon from '../assets/messageicon.png'
import linkdin from '../assets/linkdin.png'
import ballicon from '../assets/ball.png'


function Footer() {
  return (
    <footer id='footer' className='mt-10 flex flex-col  flex-wrap '>
          <div className='bg-[#E6E6E6] py-16 gap-8 '>
      <div className='flex  px-80 gap-3 mx-auto max-980:flex-col  max-980:px-14' >
        <div>
            <img src={thumb} alt=""  width={200}/></div>
        
          <div className='flex flex-col mb-10'>
           <h1 className='text-[2rem] font-Syne max-[450px]:text-[1rem] font-[600]  '>
              Let’s Connect
             </h1>
             <p className=' font-Open Sans text-[1rem] font-[400] '>
              Contact me today to elevate your brand with intuitive designs that
              drive meaningful interactions and leave a lasting impact on your users.
            </p>
           </div>         
        </div>

      <div className='flex mx-auto gap-9 justify-center items-center flex-wrap '>
         <div className='flex gap-2 border border-black bg-white py-4 px-16 '>
            <p className=' font-Open Sans text-[1rem] font-[400] '>
                imraan@imraan.site
               </p> 
               <img src={messageicon} alt="" />
         </div>
         <div className='flex gap-2 border border-black bg-white py-4  px-24 '>
            <p className=' font-Open Sans text-[1rem] font-[400] '>
                Linkedin
               </p> 
               <img src={linkdin} alt="" />
        </div>
        <div className='flex gap-2 border border-black bg-white py-4  px-24 '>
            <p className=' font-Open Sans text-[1rem] font-[400] '>
                Dribbble
               </p> 
               <img src={ballicon} alt="" />
        </div>
    </div> 
    </div>
    <div className='flex  justify-between  items-center bg-white flex-wrap  px-10  py-6 '>
          <p className=' font-Open Sans text-[1rem] font-[400] '>
                © 2023 – Imraan Alam
               </p>
                    <p className=' font-Open Sans text-[1rem] font-[400] '>
                         Privacy Policy
                    </p>
    </div>
    </footer>
    
  )
}

export default Footer