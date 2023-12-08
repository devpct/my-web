import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

function Specialties({ imageCategory, title, images, titleImage }: { imageCategory: string; title: string; images: string[]; titleImage: string[]}) {
  return (
    <div className='mb-[4rem]'>
      <div className='flex items-center gap-[0.8rem]'>
        <img className='w-[2.5rem] h-[2.5rem]' src={imageCategory} loading='lazy' />
        <p className='text-[1.9rem] font-medium'>{title}</p>
      </div>
      <div className='flex flex-wrap mt-[1.5rem] ml-[3rem] gap-[0.5rem]'>
        {images.map((image: string, index: any) => (
          <Tooltip title={<p style={{ fontSize: "15px" , width : 'fit', textAlign: "center", 
        }}>{titleImage[index]}</p>} key={index} TransitionComponent={Zoom}>
            <img src={image} className='lg:w-[5.2rem] w-[4rem]' loading='lazy' />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Specialties;
