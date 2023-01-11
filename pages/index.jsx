import { Box, Container, Divider, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import ContactFormWithSocialButtons from "../components/Contact";
import Hero1 from "../components/Heros";
import IsnList from "../components/IsnList";
import Layout from "../components/Layout";
import Live from "../components/Live";
import BasicStatistics from "../components/OurCompany";
import Programs from "../components/Programs";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.addEventListener("blur", function () {
      document.head.title = "ga";
    });

    window.addEventListener("focus", function () {
      document.head.title = "xxx";
    });
  }, []);

  return (
    <Layout>
      <Box
        bgGradient={`linear(to-b, ${useColorModeValue(
          "#2d4abf32, #fafafa,#fafafa, #fafafa, #fafafa, #fafafa, #fafafa, #fafafa",
          "#2d4abf32, #111111,#111111, #111111, #111111, #111111, #111111, #111111"
        )})`}
        maxW="100%"
      >
        <Head>
          <title>ISTV - Início</title>
          <link rel="shortcut icon" href="/logoistv.png" />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="A ISTV é a emissora dos clássicos do cinema, das séries de TV e dos desenhos que é sucesso no Digital e no HD."
          />
          <meta
            name="keywords"
            content="istv, emissora, tv, clássicos, desenhos antigos, desenhos, filmes antigos, filmes"
          />
          <meta
            name="google-site-verification"
            content="o81p3pVBa_JzKUeOBsguMNqWSoHvgfnoTKtjh5-9An8"
          />
          <meta name="author" content="Edgar Santiago" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <Script
          id="my-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  window.addEventListener("load", function(){
    const el = document.getElementById('btn');
    el.click();
});
`,
          }}
        />
        <section>
          <Hero1 />
        </section>
        <Divider />
        <section id="aovivo">
          <Live />
        </section>
        <Divider />
        <section>
          <BasicStatistics />
        </section>
        <Divider />
        {/*<section id="programacao">
          <Programs />
        </section>*/}
        <Divider />
        <section id="isn">
          <IsnList />
        </section>
        <Divider />
        <section id="contato">
          <ContactFormWithSocialButtons />
        </section>
      </Box>
    </Layout>
  );
}
