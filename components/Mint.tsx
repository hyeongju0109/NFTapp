import { useState } from 'react';
import { 
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction
} from 'wagmi';
import contractInterface from '../contract-abi.json';


function Mint() {
  const [count, setCount] = useState<number>(1);
  const { isConnected } = useAccount();

  const { config } = usePrepareContractWrite({
    address: '0x5741d31f664865fF7c41De6956Af65849BfC93eA',
    abi: contractInterface,
    functionName: 'mint',
    args: [count]
  });

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(config);

  const {
    data: txData,
    isSuccess: txSuccess,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });


  const isMinted = txSuccess;

  return (
    <div className='flex flex-col items-center order-2 sm:order-1'>
      <button
        className={`w-80 hover:bg-[#44EEEE] active:bg-[#44EEEE] disabled:bg-gray-300 py-2 px-8 mb-4 rounded-lg text-xl font-bold ${isMintStarted || isMintLoading || isMinted ? "bg-[#44EEEE]" : "bg-[#AFEEEE]"}`}
        disabled={!mint || !isConnected}
        onClick={() => mint?.()}
      >
        {isMintLoading && 'Confirming in wallet'}
        {isMintStarted && !isMinted && 'Minting...'}
        {!isMintLoading && isMintStarted && isMinted && 'Minted!'}
        {!isMintLoading && !isMintStarted && !isMinted && 'Mint'}
      </button>

      {!isConnected && (
        <p className='text-white text-sm'>Connect your wallet to mint</p>
      )}

      {mintError && mintError.message && (
        <div className='w-80 max-h-40 overflow-scroll'>
          <p className='text-center text-red-400 my-2 break-words'>{mintError.message}</p>
        </div>
      )}

      {isMinted && (
        <a href={`https://goerli.etherscan.io//tx/${mintData?.hash}`} className='text-[#AFEEEE] hover:text-[hotpink]' target="_blank" rel="noreferrer">
          View transaction
        </a>
      )}
    </div>
  )
}

export default Mint;