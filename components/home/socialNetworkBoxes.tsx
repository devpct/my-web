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
        link={['mailto:mrdevpct@gmail.com', 'https://www.linkedin.com/in/devpct']}
        FST={['3.3rem','3.3rem']}
      />

      <SocialNetworkBox
        backgroundColor={'#242938'}
        images={['./images/home/codepen.png', './images/home/stackoverflow.png']}
        colorText={['#fff', '#DA7526']}
        title={['Codepen', 'Stackoverflow']}
        link={['https://codepen.io/devpct', 'https://stackoverflow.com/users/18831761/mohammad-abdollahzadeh']}
        FST={['3.3rem','2.5rem']}
      />

      <SocialNetworkBox
        backgroundColor={'#fff'}
        images={['./images/home/x.png', './images/home/instagram.png']}
        colorText={['', '#33333394']}
        title={['', 'Instagram']}
        link={['https://www.twitter.com/devpct', 'https://www.instagram.com/devpct']}
        FST={['3.3rem','3.3rem']}
      />

      <SocialNetworkBox
        backgroundColor={'#fff'}
        images={['./images/home/github.png']}
        colorText={['#33333394']}
        title={['Github']}
        link={['https://github.com/devpct']}
        FST={['3.3rem','3.3rem']}
      />

    </div>
  )
}

export default socialNetworkBoxes