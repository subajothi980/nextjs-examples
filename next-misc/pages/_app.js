import '@/styles/globals.css'
import '@/styles/layout.css'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />);
  }
  return <>
            <Head>
              <title>My Next Misc Examples</title>
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
}
