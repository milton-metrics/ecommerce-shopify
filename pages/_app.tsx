import "@assets/main.css"
import { AppProps } from 'next/app'
import { Layout } from '@components/common' 
import { FunctionComponent, PropsWithChildren } from 'react';

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FunctionComponent<PropsWithChildren>}}) {
  const Layout = Component.Layout
    
	return (
		<Layout>
      <Component {...pageProps} />
    </Layout>
	)
}

export default MyApp