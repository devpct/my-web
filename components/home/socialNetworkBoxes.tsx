import React from 'react'
import SocialNetworkBox from './socialNetworkBox'

function socialNetworkBoxes() {
  return (
    <div className='flex flex-col gap-y-[2rem] mt-[3rem]'>

      <SocialNetworkBox
        backgroundColor={'#fff'}
        images={['./images/home/gmail-icon.png', './images/home/linkedin.png']}
        colorText={['#33333394', '#0A66C2']}
        title={['Gmail', 'Linkedin']}
        FST={['3.3rem','3.3rem']}
      />

      <SocialNetworkBox
        backgroundColor={'#242938'}
        images={['./images/home/codepen.png', './images/home/stackoverflow.png']}
        colorText={['#fff', '#DA7526']}
        title={['Codepen', 'Stackoverflow']}
        FST={['3.3rem','2.5rem']}
      />

      <SocialNetworkBox
        backgroundColor={'#fff'}
        images={['./images/home/x.png', './images/home/instagram.png']}
        colorText={['', '#33333394']}
        title={['', 'Instagram']}
        FST={['3.3rem','3.3rem']}
      />

      <SocialNetworkBox
        backgroundColor={'#fff'}
        images={['./images/home/github.png']}
        colorText={['#33333394']}
        title={['Github']}
        FST={['3.3rem','3.3rem']}
      />

    </div>
  )
}

export default socialNetworkBoxes