import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <>
    <div className="flex w-full lg:justify-center  lg:flex-row flex-col gap-x-[4rem] gap-y-[3rem] lg:text-justify text-center">
    <div className='text-center rounded-b-[100%] lg:m-0 m-auto overflow-hidden w-[15rem] h-[16rem]  bg-[#EDB836] pt-[1rem] '>  
        <Image className='w-full h-full' src="https://avatars.githubusercontent.com/u/102470936?v=4" alt='imageMy' width={1000} height={100}/>
    </div>
    <div className='lg:mt-[3.5rem] w-[70%] lg:m-0 m-auto'>
        <h2 className='text-[1.9rem] font-[300]'>Mohammad</h2>
        <h1 className='text-[2.5rem]'>Abdollahzadeh</h1>
        <hr className='mt-[1rem] mb-[0.4rem] w-full border-[#EDB836] border-[2px] rounded-full' />
        <p className='md:text-[1.2rem] text-[1rem] font-bold ml-[1rem] tracking-[0.2rem]'>FRONTEND DEVELOPER</p>
    </div>
    </div>
    <Image
    className='md:mt-[7rem] lg:mt-0 w-full md:h-[35vh] h-[15vh]  absolute lg:top-[10rem] md:top-[14rem]'
    src="/images/home/line.png"
    alt='line'
    width={1000}
    height={100}
    />
    </>
  )
}
