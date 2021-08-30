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
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@Edgar" />
            <meta name="twitter:title" content="prueba next" />
            <meta name="twitter:description" content="etiqueta de descripcion" />
            <meta name="twitter:image" content="https://placeimg.com/640/480/any" />
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
