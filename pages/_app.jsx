import "../styles/globals.css";
import theme from "../lib/theme";
import Script from "next/script";

import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";

import Router from "next/router";

// Won't catch the error!
Router.events.on("routeChangeError", console.log);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-4869594557949749"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4869594557949749"
      />

      <Script
        id="g1"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-3Y05FDJX1Z`}
      />

      <Script id="g2" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3Y05FDJX1Z', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
