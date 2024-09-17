import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout'
import { Analytics } from "@vercel/analytics/react"

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
                <Analytics />
            </Layout>

        </>
    );
};

export default MyApp;
