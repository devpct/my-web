import Head from 'next/head'
import Profile from '@/components/templates/Home/Profile';
import Expertises from '@/components/templates/Home/Expertises';
import SocialMedias from '@/components/templates/Home/SocialMedias';

export default function Home() {

  return (
    <>
    <Head>
      <title>Home - DevPCT</title>
    </Head>

    <Profile/>
    <Expertises/>
    <SocialMedias/>
    </>
  )
}