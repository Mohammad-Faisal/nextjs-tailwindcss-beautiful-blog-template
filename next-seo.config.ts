import type { DefaultSeoProps } from 'next-seo';

const seoConfig: DefaultSeoProps = {
  openGraph: {
    type: "blog",
    locale: "en_IE",
    url: process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL,
    site_name: `${process.env.NEXT_PUBLIC_OWNER_NAME}'s Blog`,
  },
  twitter: {
    handle: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default seoConfig;
