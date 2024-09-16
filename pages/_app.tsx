import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout'

import './globals.css';



const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <script async
                src="https://js.stripe.com/v3/buy-button.js">
            </script>
            <Head>
                <title>Pride In My Pines</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>

        </>
    );
};

export default MyApp;
