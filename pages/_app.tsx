import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
