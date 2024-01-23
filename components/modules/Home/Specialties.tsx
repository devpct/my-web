import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

function Specialties({ imgCategory, title, imgs, titleimg }: { imgCategory: string; title: string; imgs: string[]; titleimg: string[]}) {
  return (
    <div className='mb-[4rem]'>
      <div className='flex items-center gap-[0.8rem]'>
        <img className='w-[2.5rem] h-[2.5rem]' src={imgCategory} alt={title} 
        
        
         />
        <p className='text-[1.9rem] font-medium'>{title}</p>
      </div>
      <div className='flex flex-wrap mt-[1.5rem] ml-[3rem] gap-[0.5rem]'>
        {imgs.map((img: string, index: any) => (
          <Tooltip title={<p style={{ fontSize: "15px" , width : 'fit', textAlign: "center", 
        }}>{titleimg[index]}</p>} key={index} TransitionComponent={Zoom}>
            <img src={img} className='lg:w-[5.2rem] w-[4rem]' alt={titleimg[index]} 
                
                
                />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Specialties;
