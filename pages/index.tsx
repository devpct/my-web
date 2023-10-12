import Head from 'next/head'
import Specialties from '../components/specialties';

export default function Home() {
  
  const data = [
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
          <img className='w-[100%] h-[100%]' src="https://avatars.githubusercontent.com/u/102470936?v=4" loading='lazy'/>
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
        <img className='w-[100%] h-[35vh] absolute top-[10rem]' src="/images/home/line.png" loading='lazy' />
    </header>
    <main className='mt-[15rem]'>
      <div className='flex items-center w-[100%] gap-x-[1rem] justify-center '>
      <img className='w-[3rem] h-[3rem]' src="/images/home/expertises.png" loading='lazy'/>
      <p className='text-[3rem] font-medium'>Expertises</p>
      </div>

      <div className='w-[100%] h-fit pl-[10rem] mt-[5rem]'>

      {data.map((item, index) => (
        <Specialties
          key={index}
          imageCategory={item.imageCategory}
          title={item.title}
          images={item.images}
        />
      ))}
 
      </div>
    </main>
    </>
  )
}
