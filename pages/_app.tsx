import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  goerli,
} from 'wagmi/chains';

const { chains, publicClient } = configureChains(
  [
    goerli
  ],
  [
    alchemyProvider({
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: '8hlrxXwB9wr3qx_EKTO4wmVIA9BjDyF0',
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: '8b9a09ef50694a2544fbecdb999d342b',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,

});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>

  );
}

export default MyApp;
