import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { NextSeo } from 'next-seo'


export default function FirstPost() {
    return (
      <Layout>
        <NextSeo 
        title="Mi primer post"
        description="Una descripcion de mi post"
        openGraph={{
          url: 'https://demo-next-test.netlify.app/',
          title: 'Mi primer post vista el pacifico',
          description: 'Mi descripción de mi post og',
          images: [
            {
              url: 'https://placeimg.com/1200/630/animals',
              width: 1200,
              height: 600,
              alt: 'dummy image'
            },
            {
              url: 'https://placeimg.com/600/300/animals',
              width: 600,
              height: 300,
              alt: 'dummy image 2'
            },
            {
              url: 'https://placeimg.com/400/400/animals',
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
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    )
  }
  
