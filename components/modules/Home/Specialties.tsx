import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import Image from 'next/image';

function Specialties({ imageCategory, title, images, titleImage }: { imageCategory: string; title: string; images: string[]; titleImage: string[]}) {
  return (
    <div className='mb-[4rem]'>
      <div className='flex items-center gap-[0.8rem]'>
        <Image className='w-[2.5rem] h-[2.5rem]' src={imageCategory} alt={title} 
        width={1000}
        height={100}
         />
        <p className='text-[1.9rem] font-medium'>{title}</p>
      </div>
      <div className='flex flex-wrap mt-[1.5rem] ml-[3rem] gap-[0.5rem]'>
        {images.map((image: string, index: any) => (
          <Tooltip title={<p style={{ fontSize: "15px" , width : 'fit', textAlign: "center", 
        }}>{titleImage[index]}</p>} key={index} TransitionComponent={Zoom}>
            <Image src={image} className='lg:w-[5.2rem] w-[4rem]' alt={titleImage} 
                width={1000}
                height={100}
                />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Specialties;
