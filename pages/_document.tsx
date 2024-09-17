// pages/_document.tsx

import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       <meta name="PIMP home pahe" content="The queerest most inclusive camping adventure born in beautiful San Diego CA"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics/>
      </body>
    </Html>
  );
}
