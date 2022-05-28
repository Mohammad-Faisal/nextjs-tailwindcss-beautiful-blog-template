import Head from "next/head";
import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import GoogleAnalytics from "../analytics/GoogleAnalytics";
import { useRouter } from "next/router";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactElement;
}

function Layout({ children, pageTitle }: LayoutProps) {
  const router = useRouter();
  return (
    <>
      <GoogleAnalytics />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="h-screen">
        <Header />
        <main className="min-h-[94%] py-24 ">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
