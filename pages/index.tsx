import Head from 'next/head'
import Specialties from '../components/home/specialties';
import SocialNetworkBoxes from '../components/home/socialNetworkBoxes';

export default function Home() {
  
  const dataExpertises = [
    {
      imageCategory: '/images/home/terminal.png',
      title: 'Expertises',
      images: ['/images/home/languages/js.png', '/images/home/languages/ts.png', '/images/home/languages/nodejs.png', '/images/home/languages/html.png', '/images/home/languages/css.png' ],
    },
    {
      imageCategory: '/images/home/box.png',
      title: 'Frameworks',
      images: ['/images/home/frameworks/nextjs.png', '/images/home/frameworks/react.png', '/images/home/frameworks/jquery.png', '/images/home/frameworks/scss.png', '/images/home/frameworks/redax.png', '/images/home/frameworks/mui.png', '/images/home/frameworks/bootstrap.png', '/images/home/frameworks/tailwind.png', '/images/home/frameworks/regex.png', '/images/home/frameworks/wordpress.png' ],
    },
    {
      imageCategory: '/images/home/git-pull-request.png',
      title: 'Tools',
      images: ['/images/home/tools/figma.png', '/images/home/tools/git.png', '/images/home/tools/linux.png', '/images/home/tools/vscode.png'],
    },
  ]

  return (
    <>
    <Head>
      <title>Home - DevPCT</title>
    </Head>


    <header>
      <div className="flex mx-[5rem]">
        <div className='text-center rounded-b-[100%] overflow-hidden w-[15rem] h-[14rem] bg-[#EDB836] pt-[1rem]'>  
          <img className='w-full h-full' src="https://avatars.githubusercontent.com/u/102470936?v=4" loading='lazy'/>
        </div>
        <div className='m-[3.5rem] w-full'>
          <div className='ml-[1rem]'>
          <h2 className='text-[1.9rem] font-[300]'>Mohammad</h2>
          <h1 className='text-[2.5rem]'>Abdollahzadeh</h1>
          </div>
          <hr className='mt-[1rem] mb-[0.4rem] w-full border-[#EDB836] border-[2px] rounded-full' />
          <p className='text-[1.2rem] font-bold ml-[1rem] tracking-[0.2rem]'>FRONTEND DEVELOPER</p>
        </div>
      </div>
        <img className='w-full h-[35vh] absolute top-[10rem]' src="/images/home/line.png" loading='lazy' />
    </header>


    <main className='mt-[15rem]'>
      <div className='flex items-center w-full gap-x-[1rem] justify-center '>
      <img className='w-[3rem] h-[3rem]' src="/images/home/expertises.png" loading='lazy'/>
      <p className='text-[3rem] font-medium'>Expertises</p>
      </div>

      <div className='w-full h-fit lg:pl-[10rem] px-[2rem] mt-[5rem]'>

      {dataExpertises.map((item, index) => (
        <Specialties
          key={index}
          imageCategory={item.imageCategory}
          title={item.title}
          images={item.images}
        />
      ))}
 
      </div>
    </main>


    <footer className='w-full'>
        <div className='w-full h-full bg-[#D9D9D9] p-[2.5rem] rounded-t-[52px] mt-[9rem]'>
          
          <div className='flex items-center justify-center gap-x-5'>
            <img className='w-[3rem]' src="/images/home/message.png" loading='lazy' />
            <p className='text-[2.2rem] font-medium'>Connect with me</p>
          </div>

        <SocialNetworkBoxes/>

        </div>
    </footer> 
    </>
  )
}
