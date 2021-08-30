import { NextSeo } from 'next-seo'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
            <title>Next js</title>
            <NextSeo 
              title="Mi aplicación Next"
              description="Una descripcion de"
              openGraph={{
                url: 'https://demo-next-test.netlify.app/',
                title: 'Mi aplicación Next',
                description: 'Mi descripción',
                images: [
                  {
                    url: 'https://placeimg.com/1200/630/any',
                    width: 1200,
                    height: 600,
                    alt: 'dummy image'
                  },
                  {
                    url: 'https://placeimg.com/600/300/any',
                    width: 600,
                    height: 300,
                    alt: 'dummy image 2'
                  },
                  {
                    url: 'https://placeimg.com/400/400/any',
                    width: 400,
                    height: 400,
                    alt: 'dummy image 3'
                  },
                ],
                site_name: 'Mi aplicación Next'
              }}
              twitter={{
                handle: '@edgar',
                site: '@edgar_moreano',
                cardType: 'summary_large_image',
              }}
            />
            <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-P5KR76K');`,
                }}>
        </script>
        </Head>
        <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5KR76K"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
        ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
