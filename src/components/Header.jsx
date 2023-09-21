import React from 'react'
import header from '../assets/Group 320.png'
import hiimg from '../assets/hi-apng 1.png'
import frame from '../assets/Frame 489.svg'

function Header() {
  return (
    
        <header className=' mt-32 mx-auto max-[490]:mt-1'>
        <div className=' w-[100%] flex flex-wrap  flex-row-reverse justify-around  items-center mx-auto mt-20 max-[1030px]:gap-4'>
         <div>
             <img src={header} alt=""  width={550}/>
         </div>
            
            <a href="#footer">
               <img src={frame} alt=""  className='mt-[10rem] ' />
            </a>
           
         <div className=' flex flex-col py-4 gap-[0.1px] max-[490]:px-10'>
            <div> <img src={hiimg} alt="" /></div>
            <p className=' font-Open Sans text-[1rem] font-[400]'>
             Hi, I’m Imraan Alam 
            </p>
             <h1 className='text-[3rem]  font-Syne max-[450px]:text-[1rem] font-[600] max-[490]:text-[2rem]'>
                  Designing Enterprise <br/>Solutions.
             </h1>
             
            <p className=' font-Open Sans text-[1rem] font-[400] '>
                   Designer and developer: I wear many hats.
            </p>
         </div>
        </div>
        </header>
    
  )
}

export default Header