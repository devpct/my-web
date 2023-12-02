import React from 'react';

interface SocialNetworkBoxProps {
  backgroundColor: string;
  images: string[];
  colorText: string[];
  title: string[];
  link: string[];
  FST: string[];
}

function SocialNetworkBox({ backgroundColor, images, colorText, title, link, FST }: SocialNetworkBoxProps) {
  return (
    <div className="flex flex-wrap gap-x-[9rem] gap-y-[2rem] w-full h-full justify-center">
      {images.map((img, index) => (
        <a
          key={index}
          className={`flex items-center ${images.length === 1 ? 'lg:w-[88%]' : 'lg:w-[40%]'} w-full lg:h-[142px] h-[100px] rounded-[28px] shadow-2xl cursor-pointer justify-center ${title[index] === '' ? 'gap-x-0' : 'gap-x-8'}`}
          style={{ backgroundColor: backgroundColor }}
          href={link?.[index]}
        >
          <img className='lg:w-[5.2rem] w-[4rem]' src={img} loading='lazy' />
          <p className={`lg:text-[${FST[index]}] text-[2.2rem] font-medium`} style={{ color: colorText[index] }}>{title[index]}</p>
        </a>
      ))}
    </div>
  );
}

export default SocialNetworkBox;
