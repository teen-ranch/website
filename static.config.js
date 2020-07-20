import React from 'react'
import path from 'path'
// import axios from 'axios'

export default {
  siteRoot: 'https://teenranch.com',
  getSiteData: () => ({
    title: 'Teen Ranch Canada',
    covidGroupMax: 10
  }),
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta }
  }) => (
    <Html lang="en-CA" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Teen Ranch Canada</title>
        <meta name='description' content={`A Premier Sports Resort and Retreat Centre: Hockey, Horses, Soccer, Adventure, Figure Skating, BMX Dirt & Day Camps`} />
        <meta name='keywords' content='Summer Camp, Conference Centre, Weekend Retreats, hockey camp, horse camp, rock climing, bmx camp, soccer camp, ice rental' />
        <meta name='author' content='DS Media' />
        <meta name='wot-verification' content='2d82a7513302ee51cb53' />
        <meta property="og:type" content="website" />
        <meta property='twitter:card' content='summary_large_image' />
        <script async defer data-domain="teenranch.com" src="https://stats.teenranch.com/js/index.js"></script>
      </Head>
      <Body>{ children }</Body>
    </Html>
  ),
  // getRoutes: async () => {
  //   const { data: posts } = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts'
  //   )

  //   return [
  //     {
  //       path: '/blog',
  //       getData: () => ({
  //         posts,
  //       }),
  //       children: posts.map(post => ({
  //         path: `/post/${post.id}`,
  //         template: 'src/containers/Post',
  //         getData: () => ({
  //           post,
  //         }),
  //       })),
  //     },
  //   ]
  // },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    [
      'react-static-plugin-reach-router',
      {
        RouterProps: {
          className: 'router'
        }
      }
    ],
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-sass'),
    // [
    //   'react-static-plugin-google-tag-manager',
    //   {
    //     id: 'GTM-WRB7H6L',
    //     // debug: true,
    //   },
    // ],
    [
      'react-static-plugin-favicons',
      { 
        inputFile: path.resolve(__dirname, 'icon.svg'),
        configuration: {
          appName: 'Teen Ranch',
          appShortName: 'Teen Ranch',
          background: '#002146',
          theme_color: '#002146',
          display: 'standalone',
          start_url: '.'
        }
      },
    ],
  ],
}
