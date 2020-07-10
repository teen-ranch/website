import path from 'path'
import axios from 'axios'

export default {
  siteRoot: 'https://teenranch.com',
  getSiteData: () => ({
    title: 'Teen Ranch Canada',
    covidGroupMax: 10
  }),
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
    [
      'react-static-plugin-google-tag-manager',
      {
        id: 'GTM-WRB7H6L',
        // debug: true,
      },
    ],
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
