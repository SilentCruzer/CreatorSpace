import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/Rightbar';
import SpaceHeader from '../components/SpaceHeader';

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

function MyApp({ Component, pageProps, router }) {
  const showHeader = router.pathname === '/space' ? false : true;

  if (router.pathname.startsWith('/space')){
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <div className='px-28 bg-neutral-900'>
          <div className="flex justify-between bg-neutral-900 h-full">
        <div className="sticky w-1/3 md:1/3 border-l-2 border-neutral-800 mr-5">
          <Sidebar />
        </div>
            <div className="w-full h-full">
            <Component {...pageProps} />
            </div>
        <div className=" sticky w-1/3 ml-5">
          <Rightbar />
        </div>
    </div>
        </div>
      
    </MoralisProvider>
  )
  }
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Head>
        <title>CreatorSpace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showHeader && <Navbar />}
      
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp
