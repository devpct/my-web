import React from 'react'
import Specialties from '@/components/modules/Home/Specialties';

export default function Expertises () {
    const dataExpertises = [
        {
          imgCategory: './images/home/terminal.png',
          title: 'Expertises',
          images: ['./images/home/languages/js.png', './images/home/languages/ts.png', './images/home/languages/nodejs.png', './images/home/languages/html.png', './images/home/languages/css.png' ],
          titleimg:['Javascript', 'TypeScript', 'NodeJS', 'HTML', 'CSS']
        },
        {
          imgCategory: './images/home/box.png',
          title: 'Frameworks',
          images: ['./images/home/frameworks/nextjs.png', './images/home/frameworks/react.png', './images/home/frameworks/jquery.png', './images/home/frameworks/scss.png', './images/home/frameworks/redax.png', './images/home/frameworks/mui.png', './images/home/frameworks/bootstrap.png', './images/home/frameworks/tailwind.png', './images/home/frameworks/regex.png', './images/home/frameworks/wordpress.png' ],
          titleimg:['NextJS', 'ReactJS', 'jQuery', 'Sass', 'Redux', 'MUI', 'Bootstrap', 'Tailwind', 'Regex', 'WordPress']
        },
        {
          imgCategory: './images/home/git-pull-request.png',
          title: 'Tools',
          images: ['./images/home/tools/figma.png', './images/home/tools/git.png', './images/home/tools/linux.png', './images/home/tools/vscode.png'],
          titleimg:['Figma', 'Git', 'Linux', 'VScode']
        },
      ]
  return (
    <>
    <div className='md:mt-[17rem] mt-[10rem]'>
    <div className='flex items-center w-full gap-x-[1rem] justify-center '>
    <img
      className='w-[3rem] h-[3rem]'
      src="./images/home/expertises.png"
      alt="Expertises"
      
      
    />
    <p className='text-[3rem] font-medium'>Expertises</p>
    </div>

    <div className='w-full h-fit lg:pl-[10rem] px-[2rem] mt-[5rem]'>

    {dataExpertises.map((item, index) => (
    <Specialties
        key={index}
        imgCategory={item.imgCategory}
        title={item.title}
        images={item.images}
        titleimg={item.titleimg}
    />
    ))}

    </div>
    </div>
    </>
  )
}
