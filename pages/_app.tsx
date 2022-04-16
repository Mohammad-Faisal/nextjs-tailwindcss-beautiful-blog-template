import "../styles/globals.css";
import "../styles/prism-dracula.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <ThemeProvider attribute="class">
        <Layout pageTitle={`Blog | ${process.env.NEXT_PUBLIC_OWNER_NAME}`}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
