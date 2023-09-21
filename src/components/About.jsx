import React from 'react'
import aboutimg from '../assets/Rectangle 23.png'
import img1 from '../assets/pic01-upscale-removebg-preview 1.png'
import download_icon from '../assets/icons.svg'
import card1 from '../assets/blurb-001.svg'
import icon from '../assets/Group 313.svg'
import second_logo from '../assets/02_ikea.svg'
import tird_logo from '../assets/03_wegmans.svg'
import forth_logo from '../assets/04_kaiser.svg'
import fith_logo from '../assets/05_scarlet.svg'
import sixth_logo from '../assets/06_burberry.svg'
import lamp from '../assets/blurb-002@2x.png'
import blure from '../assets/blurb-003.svg'

function About() {
  return (
    
<section id='about' className='  mt-20 mx-auto max-[490]:mt-1 bg-[#E6E6E6] py-20'>
<div className='flex flex-wrap items-center  justify-center  mx-28 max-w-[490px]:justify-start '>

<div className='w-full md:w-1/2    sm:flex sm:flex-col sm:items-start '>
<h2 className='text-[2rem] font-Syne max-[450px]:text-[1rem] font-[600] max-[490]:text-[1.9rem]  mb-8'>
About me
</h2>

<img src={img1} alt="" className=' rounded-full' />

<div className='md:w-[96%] font-Open Sans text-[1rem]  flex flex-col gap-6'>
<p className='font-openSans text-[1rem] font-normal'>
Hi, thanks for stopping by. I’m Imraan Alam, a UI/UX designer.
I love to connect with others and share what I am learning.
Working in the software industry for the past 8 years.
</p>
<p className='font-openSans text-[1rem] font-normal'>
Expert in creating design mockups, wireframes, prototypes, and illustrations,
and setting up visual design guidelines.
</p></div>
<button class="flex gap-1 mt-3 border border-black hover:bg-gray-200 hover:text-white font-Open Sans font-[500] py-3 px-6 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
View all<a href="#"><img src={download_icon} /></a>
</button>
</div>

<div className='w-full md:w-1/2    sm:flex sm:flex-col sm:items-center'>
<h2 className='font-Syne   font-semibold max-w-[490px] text-[2rem] mx-auto max-700:text-[1rem]'>
     Aligning business goals with user<br/> needs.
</h2>
<img src={aboutimg} alt="" width={450}  className='mx-auto'  />
</div>
</div>



{/* cards sections______________________________________ */}
    <div className='flex gap-2 mx-28 mt-6' >
    <div><img src={icon} alt="" /></div>
    my expertise
    </div>
  

<div className='flex justify-center gap-6  flex-wrap  mt-4 py-6'>
<div className='flex flex-col gap-3 bg-white px-6 py-4'>
    <div>
    <img src={card1} alt="" />
    </div>
   <h3 className=' font-Open Sans font-[400] text-[1.5rem]'>User Interface Design</h3>
   <p  className=' font-Open Sans font-[400] text-[1rem]'>
     Crafting intuitive digital experiences through<br/>
     visual aesthetics and interaction design.</p>
</div>
<div className='flex flex-col gap-3 bg-white px-6 py-4'>
    <div>
    <img src={lamp} alt="" width={80}/>
    </div>
   <h3 className=' font-Open Sans font-[400] text-[1.5rem]'>User Experience Design</h3>
   <p  className=' font-Open Sans font-[400] text-[1rem]'>
       Crafting intuitive digital experiences through<br/>
         visual aesthetics and interaction design.</p>
</div>

<div className='flex flex-col gap-3  bg-white px-6 py-4'>
    <div>
    <img src={blure} alt="" width={80} />
    </div>
   <h3 className=' font-Open Sans font-[400] text-[1.5rem]'>Frontend Development</h3>
   <p  className=' font-Open Sans font-[400] text-[1rem]'>
     Crafting intuitive digital experiences through<br/>
     visual aesthetics and interaction design.</p>
</div>
</div>

{/* logo section___________________________________________ */}
<div className='flex gap-2 mx-28 mt-6 mb-4' >
    <div><img src={icon} alt="" /></div>
    worked for
    </div>
  
<div className='flex  justify-center gap-7 flex-wrap'>
    <img src={second_logo} alt="" />
    <img src={tird_logo} alt="" />
    <img src={forth_logo} alt="" />
    <img src={fith_logo} alt="" />
    <img src={sixth_logo} alt="" />
</div>

</section>
    
  )
}

export default About