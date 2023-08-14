import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Mint from '../components/Mint';
import Image from 'next/image';
import {CID} from '../components/Mint'

const Home: NextPage = () => {
  const CIDimage = `https://ipfs.io/ipfs/${CID}`

  return (
    <div className=''>
      <Head>
        <title>NFT TEST</title>
        <meta
          name="description"
          content=""
          />
      </Head>

      <main className='relative min-h-[100vh] mx-auto max-w-6xl flex flex-col items-center px-4'>
        <div className='w-full pt-6 sm:pt-12 pb-24 flex flex-col items-center'>
          <ConnectButton />
          <h1 className='text-5xl sm:text-5xl text-center mt-8 mb-4 text-white'>Mint the NFT with cold wallet</h1>
          <p className='text-[#AFEEEE] text-center mb-8 sm:mb-12'>in GOERLI TEST NETWORK.</p>
          <div className='w-full flex flex-col sm:flex-row items-center justify-between mx-auto max-w-2xl'>
            <Mint />
            <div className="flip order-1 sm:order-2 mb-8 sm:mb-0">
              <div className="flip-content">
                <div className="flip-front">
                <Image src={CIDimage} width={200} height={200}/>
                </div>
                <div className="flip-back">
                  <div className='w-[200px] h-[200px] cursor-pointer bg-blue-400 pt-8 px-3 border border-white'>
                    <p className='text-white text-sm '>
                      This image will be minted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className='absolute bottom-0 flex flex-row items-center py-4 h-24'>
          <span className='mx-2 text-[#AFEEEE]'>|</span>
          <a className='text-[#AFEEEE] hover:text-[hotpink]' target="_blank" rel="noreferrer">modified by hj_kim</a>
          <span className='mx-2 text-[#AFEEEE]'>|</span>
        </footer>
      </main>
    </div>
  );
};

export default Home;
