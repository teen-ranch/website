import path from 'path'
import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'Teen Ranch Canada'
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    'react-static-plugin-sass',
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
