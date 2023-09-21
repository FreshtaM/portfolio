import React from 'react'
import card1 from '../assets/Rectangle 40.png'
import card2 from '../assets/rec2.png'
import card3 from '../assets/rec3.png'
import card4 from '../assets/rec4.png'
import arrow from '../assets/icons.png'
function Featuers() {
  return (
    <>
    <section id='feature' className='flex justify-center items-center flex-col mt-2'>
     <div className='flex flex-row gap-[40rem] justify-center items-center flex-wrap   mt-32 max-1180:flex-col  max-1180:gap-2 '>
         <h1 className='text-[2rem]  font-Syne max-[450px]:text-[1rem] font-[600]'>
              Featured Projects
         </h1>

    <button class="flex gap-1 border border-black hover:bg-gray-200 hover:text-white   font-Open Sans font-[500] py-3 px-6  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
         View all<a href="#"><img src={arrow} className='  -rotate-45'/></a>
     </button>
     </div>

    {/* first card___________________________________ */}
    <div className=' w-[100%] flex flex-wrap  flex-row justify-center items-center mx-auto mt-20 max-[1030px]:gap-4'>
         <div>
             <img src={card1} alt=""  width={450}/>
         </div>
         <div className='px-5 flex flex-col  justify-start bg-[#e8e3e3] py-9 gap-3'>
             <h1 className='text-[2rem]  font-Syne max-[450px]:text-[1rem] font-[600]'>
                 IKEA – Designing dashboard for<br/> supply chain management.
             </h1>
             <hr className='bg-black  h-[0.1rem] '/>
           <p className=' font-Open Sans text-[1rem] font-[400] '>
                In a world driven by constant change and innovation, the concept of lifelong <br/>
                learning has become more critical than ever. As someone committed…
            </p>
            <span className='flex gap-1 text-[16px] font-Open Sans font-[400]'>
                 <p >Project Details</p>
                 <a href="#"><img src={arrow} /></a>
            </span>
         </div>
     </div>

     {/* ____________________second card */}

     <div className=' w-[100%] flex flex-wrap  flex-row justify-center items-center max-auto mt-20 max-[1030px]:gap-4'>
         <div>
             <img src={card2} alt=""  width={450}/>
         </div>
         <div className='px-5 flex flex-col  justify-start bg-[#e8e3e3] py-9 gap-3'>
             <h1 className='text-[2rem]  font-Syne max-[450px]:text-[1rem] font-[600]'>
             Lorem ipsum dolor sit amet<br/> consectetur. Sed sagittis congue.
             </h1>
             <hr className='bg-black  h-[0.2rem] '/>
           <p className=' font-Open Sans text-[1rem] font-[400] '>
                In a world driven by constant change and innovation, the concept of lifelong <br/>
                learning has become more critical than ever. As someone committed…
            </p>
            <span className='flex gap-1 text-[16px] font-Open Sans font-[400]'>
                 <p >Project Details</p>
                 <a href="#"><img src={arrow} /></a>
            </span>
         </div>
      </div>

{/* ____________________third card */}

     <div className=' w-[100%] flex flex-wrap  flex-row justify-center items-center max-auto mt-20 max-[1030px]:gap-4'>
         <div>
             <img src={card3} alt=""  width={450}/>
         </div>
         <div className='px-5 flex flex-col  justify-start bg-[#e8e3e3] py-9 gap-3'>
             <h1 className='text-[2rem]  font-Syne max-[450px]:text-[1rem] font-[600]'>
                 IKEA – Designing dashboard for<br/> supply chain management.
             </h1>
             <hr className='bg-black  h-[0.1rem] '/>
           <p className=' font-Open Sans text-[1rem] font-[400] '>
                In a world driven by constant change and innovation, the concept of lifelong <br/>
                learning has become more critical than ever. As someone committed…
            </p>
            <span className='flex gap-1 text-[16px] font-Open Sans font-[400]'>
                 <p >Project Details</p>
                 <a href="#"><img src={arrow} /></a>
            </span>
         </div>
     </div>


    {/* ____________________forth card */}

    <div className=' w-[100%] flex flex-wrap  flex-row justify-center items-center max-auto mt-20 max-[1030px]:gap-4'>
         <div>
             <img src={card4} alt=""  width={450}/>
         </div>
         <div className='px-5 flex flex-col  justify-start bg-[#e8e3e3] py-9 gap-3'>
             <h1 className='text-[2rem]  font-Syne max-[450px]:text-[1rem] font-[600]'>
             Lorem ipsum dolor sit amet<br/> consectetur. Sed sagittis congue.
             </h1>
             <hr className='bg-black  h-[0.2rem] '/>
           <p className=' font-Open Sans text-[1rem] font-[400] '>
                In a world driven by constant change and innovation, the concept of lifelong <br/>
                learning has become more critical than ever. As someone committed…
            </p>
            <span className='flex gap-1 text-[16px] font-Open Sans font-[400]'>
                 <p >Project Details</p>
                 <a href="#"><img src={arrow} /></a>
            </span>
         </div>
      </div>

     </section>
    </>
  )
}

export default Featuers




{/* <div className='portfolio__car-section w-[100%] flex flex-wrap  flex-row  justify-center items-center max-auto mt-20 max-[1030px]:gap-4'>
         <div>
           <img src={card1} alt=""  width={450}/>
         </div>
         <div className='px-5 flex flex-col  justify-start bg-[#e8e3e3] py-14'>
           <h1 className='text-[2rem]  font-Syne '>
            IKEA – Designing dashboard for<br/> supply chain management
            </h1>
           <p className=' font-Open Sans text-[1rem] '>In a world driven by constant change and innovation, the concept of lifelong <br/>
            learning has become more critical than ever. As someone committed…</p>
            <span className='flex gap-1 text-[16px] font-Open Sans'>
              <p>Project Details</p>
              <img src={arrow} />
            </span>

         </div>
    </div> */}



Featuers