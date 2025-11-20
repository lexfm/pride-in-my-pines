// pages/_document.tsx

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       <meta name="PIMP home page" content="The queerest most inclusive camping adventure born in beautiful San Diego CA"/>
       {/* Google reCAPTCHA v3 */}
       {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
         <script
           src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
           async
           defer
         />
       )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
