import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalsProvider } from "@mantine/modals";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <ModalsProvider>
            <Layout>
              <Component key={asPath} {...pageProps} />
            </Layout>
          </ModalsProvider>
        </MantineProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
