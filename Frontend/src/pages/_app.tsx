import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, 
  pageProps: { session, ...pageProps} }: AppProps) {
  
    return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
