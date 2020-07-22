import React, { lazy, Suspense } from 'react';
//
import { Router } from '@reach/router'
// import Dynamic from 'containers/Dynamic'

// import { useAnalytics } from 'hooks/analytics'

import 'styles/app.scss'
import Loader from 'components/Loader'
import Header from 'components/Header'
import TueriProvider from 'components/Tueri'
// import CovidBanner from 'components/CovidBanner'
import Container from 'components/Container'
import SiteDataProvider from 'hooks/siteData';

import NotFound from 'pages/404'

function App() {

  return (
    <SiteDataProvider
      siteData={{
        title: 'Teen Ranch Canada',
        covidGroupMax: 10,
        url: 'https://teenranch.com'
      }}
    >
      <TueriProvider replacements={[['https://teenranch.nyc3.digitaloceanspaces.com/website/assets/', 'https://cdn.tueri.io/68719476739/assets/']]}>
          <Router>
            <Route path='*'/>
          </Router>
      </TueriProvider>
    </SiteDataProvider>
  )
}

function Route(props) {

  const page = !props['*'] ? '' : props['*'] === '404.html' ? '404' : props['*']
    
  const Page = lazy(() => import(`pages/${ page }`).then(module => module).catch(() => import(`pages/404`)))

  return (
    <>
      <Header />
      <Suspense fallback={<Container type='body' constrain={ false } style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}><Loader /></Container>}>
        { Page ? <Page /> : <NotFound /> }
      </Suspense>
    </>
  )
}

export default App;
