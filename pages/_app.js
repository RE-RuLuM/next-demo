import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo 
        title="Mi aplicación Next"
        description="Una descripcion de"
        openGraph={{
          url: 'https://demo-next-test.netlify.app/',
          title: 'Mi aplicación Next',
          description: 'Mi descripción',
          images: [
            {
              url: 'https://placeimg.com/1200/630/people',
              width: 1200,
              height: 600,
              alt: 'dummy image'
            },
            {
              url: 'https://placeimg.com/600/300/people',
              width: 600,
              height: 300,
              alt: 'dummy image 2'
            },
            {
              url: 'https://placeimg.com/400/400/people',
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
        additionalLinkTags={[
          {
            property: 'manifest',
            href: '/manifest.json'
          }
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
