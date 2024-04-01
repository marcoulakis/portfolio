import { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from 'next-seo';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <NextSeo
          title="Marcoulakis"
          description="Marcoulakis Software Engineer Portfolio"
          canonical="https://marcoulakis.com"
          openGraph={{
            url: "https://marcoulakis.co",
            title: "Marcoulakis",
            description: "Marcoulakis Software Engineer Portfolio",
            images: [
              {
                url: "https://marcoulakis.com/banner.jepg",
                width: 800,
                height: 450,
                alt: "Banner Image",
              },
            ],
            site_name: "Marcoualkis",
          }}
        />
        <meta name="description" content="Marcoulakis Software Engineer Portfolio" />
        <meta name="keywords" content="software engineer, portfolio, marcoulakis, marina haru, marina marcoulakis, haru marcoulakis, marina haru marcoulakis" />
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
