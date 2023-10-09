import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home - DevPCT</title>
    </Head>
    <header>
      <div className="flex mx-[5rem]">
        <div className='text-center rounded-b-[100%] overflow-hidden w-[15rem] h-[14rem] bg-[#EDB836] pt-[1rem]'>  
          <img className='w-[100%] h-[100%]' src="https://avatars.githubusercontent.com/u/102470936?v=4" loading="lazy"/>
        </div>
        <div className='m-[3.5rem] w-[100%]'>
          <div className='ml-[1rem]'>
          <h2 className='text-[1.9rem] font-[300]'>Mohammad</h2>
          <h1 className='text-[2.5rem]'>Abdollahzadeh</h1>
          </div>
          <hr className='mt-[1rem] mb-[0.4rem] w-[100%] border-[#EDB836] border-[2px] rounded-full' />
          <p className='text-[1.2rem] font-bold ml-[1rem] tracking-[0.2rem]'>FRONTEND DEVELOPER</p>
        </div>
      </div>
    </header>
    </>
  )
}
