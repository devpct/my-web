import React from 'react'

function socialNetworkBoxes() {
  return (
    <div className='flex flex-col gap-y-[2rem]'>
    <div className="flex flex-wrap gap-x-[9rem] md:gap-y-[2rem] w-full h-full justify-center mt-[3rem]">
        <div className="flex items-center lg:w-[40%]  md:w-full h-[142px] bg-[#fff] rounded-[28px] shadow-2xl cursor-pointer justify-center gap-x-8 ">
      <img className='w-[5.2rem]' src="/images/home/gmail-icon.png" loading='lazy' />
      <p className='text-[3.3rem] font-medium text-[#33333394]'>Gmail</p>
        </div>
        <div className="flex items-center lg:w-[40%] md:w-full h-[142px] bg-[#fff] rounded-[28px] shadow-2xl cursor-pointer justify-center gap-x-8">
      <img className='w-[5.2rem]' src="/images/home/linkedin.png" loading='lazy' />
      <p className='text-[3.3rem] font-medium text-[#0A66C2]'>Linkedin</p>
        </div>
    </div>

    <div className="flex flex-wrap gap-x-[9rem] md:gap-y-[2rem] w-full h-full justify-center">
        <div className="flex items-center lg:w-[40%] md:w-full h-[142px] bg-[#242938] rounded-[28px] shadow-2xl cursor-pointer justify-center gap-x-8">
      <img className='w-[5.2rem]' src="/images/home/codepen.png" loading='lazy' />
      <p className='text-[3.3rem] font-medium text-[#fff]'>Codepen</p>
        </div>
        <div className="flex items-center lg:w-[40%] md:w-full h-[142px] bg-[#242938] rounded-[28px] shadow-2xl cursor-pointer justify-center gap-x-8">
      <img className='w-[5.2rem]' src="/images/home/stackoverflow.png" loading='lazy' />
      <p className='text-[3.3rem] font-medium text-[#DA7526]'>Stackoverflow</p>
        </div>
    </div>

    <div className="flex flex-wrap gap-x-[9rem] md:gap-y-[2rem] w-full h-full justify-center">
        <div className="flex items-center lg:w-[40%] md:w-full h-[142px] bg-[#fff] rounded-[28px] shadow-2xl cursor-pointer justify-center gap-x-8">
      <img className='w-[5.2rem]' src="/images/home/x.png" loading='lazy' />
        </div>
        <div className="flex items-center lg:w-[40%] md:w-full h-[142px] bg-[#fff] rounded-[28px] shadow-2xl cursor-pointer justify-center gap-x-8">
      <img className='w-[5.2rem]' src="/images/home/instagram.png" loading='lazy' />
      <p className='text-[3.3rem] font-medium text-[#33333394]'>Instagram</p>
        </div>
    </div>

    <div className="flex items-center lg:w-[88%] md:w-full h-[142px] bg-[#fff] rounded-[28px] shadow-2xl cursor-pointer justify-center gap-x-8 mx-auto">
      <img className='w-[5.2rem]' src="/images/home/github.png" loading='lazy' />
      <p className='text-[3.3rem] font-medium text-[#33333394]'>Github</p>
    </div>
    </div>
  )
}

export default socialNetworkBoxes