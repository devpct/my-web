import React from 'react'
import Specialties from '@/components/modules/Home/Specialties';

export default function Expertises () {
    const dataExpertises = [
        {
          imgCategory: './imgs/home/terminal.png',
          title: 'Expertises',
          imgs: ['./imgs/home/languages/js.png', './imgs/home/languages/ts.png', './imgs/home/languages/nodejs.png', './imgs/home/languages/html.png', './imgs/home/languages/css.png' ],
          titleimg:['Javascript', 'TypeScript', 'NodeJS', 'HTML', 'CSS']
        },
        {
          imgCategory: './imgs/home/box.png',
          title: 'Frameworks',
          imgs: ['./imgs/home/frameworks/nextjs.png', './imgs/home/frameworks/react.png', './imgs/home/frameworks/jquery.png', './imgs/home/frameworks/scss.png', './imgs/home/frameworks/redax.png', './imgs/home/frameworks/mui.png', './imgs/home/frameworks/bootstrap.png', './imgs/home/frameworks/tailwind.png', './imgs/home/frameworks/regex.png', './imgs/home/frameworks/wordpress.png' ],
          titleimg:['NextJS', 'ReactJS', 'jQuery', 'Sass', 'Redux', 'MUI', 'Bootstrap', 'Tailwind', 'Regex', 'WordPress']
        },
        {
          imgCategory: './imgs/home/git-pull-request.png',
          title: 'Tools',
          imgs: ['./imgs/home/tools/figma.png', './imgs/home/tools/git.png', './imgs/home/tools/linux.png', './imgs/home/tools/vscode.png'],
          titleimg:['Figma', 'Git', 'Linux', 'VScode']
        },
      ]
  return (
    <>
    <div className='md:mt-[17rem] mt-[10rem]'>
    <div className='flex items-center w-full gap-x-[1rem] justify-center '>
    <img
      className='w-[3rem] h-[3rem]'
      src="./imgs/home/expertises.png"
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
        imgs={item.imgs}
        titleimg={item.titleimg}
    />
    ))}

    </div>
    </div>
    </>
  )
}
