import React from 'react'
import { Root, Head, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
// import Dynamic from 'containers/Dynamic'

import 'styles/app.scss'
import Header from 'components/Header'
import TueriProvider from 'components/Tueri'

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <noscript>Please enable JavaScript to view this page.</noscript>
      <Head>
        <meta charSet="UTF-8"/>
        <title>Home - Teen Ranch Canada</title>
        <meta name='description' content={`Canada's Premier Sports Resort and Retreat Centre: Hockey, Horses, Soccer, Adventure, Figure Skating, BMX Dirt & Day Camps`} />
        <meta name='keywords' content='Summer Camp, Conference Centre, Weekend Retreats, hockey camp, horse camp, rock climing, bmx camp, soccer camp, ice rental' />
        <meta name='author' content='DS Media' />
        <meta name='wot-verification' content='2d82a7513302ee51cb53' />
      </Head>
      <TueriProvider>
        <Header />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            {/* <Dynamic path="dynamic" /> */}
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </TueriProvider>
    </Root>
  )
}

export default App
