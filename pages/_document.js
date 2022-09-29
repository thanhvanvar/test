// In `pages/_document.js`
import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'
import React from "react";

export default function Document() {

    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=optional"
                      rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            {/*<Script src="/js/owl.carousel.min.js" crossOrigin="anonymous"
                    strategy="beforeInteractive"/>*/}
            <Script src="/js/scripts.js" strategy="beforeInteractive" crossOrigin="anonymous"/>
            {/*<Script src="https://cdn.startbootstrap.com/sb-forms-latest.js" strategy="beforeInteractive"
                    crossOrigin="anonymous"/>*/}
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    strategy="beforeInteractive" crossOrigin="anonymous"/>
            <Script src="/js/custom.js"
                    strategy="beforeInteractive" crossOrigin="anonymous"/>
            </body>
        </Html>
    )
}