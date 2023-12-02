import React from 'react';

function Specialties({ imageCategory, title, images }: { imageCategory: string; title: string; images: string[]}) {
  return (
    <div className='mb-[4rem]'>
      <div className='flex items-center gap-[0.8rem]'>
        <img className='w-[2.5rem] h-[2.5rem]' src={imageCategory} loading='lazy' />
        <p className='text-[1.9rem] font-medium'>{title}</p>
      </div>
      <div className='flex flex-wrap mt-[1.5rem] ml-[3rem] gap-[0.5rem]'>
        {images.map((image : string, index : any) => (
          <img key={index} src={image} className='lg:w-[5.2rem] w-[4rem]' loading='lazy' />
        ))}
      </div>
    </div>
  );
}

export default Specialties;
