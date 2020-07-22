import React from 'react'
import Container from 'components/Container'
import { Img } from 'components/Tueri'
import jsxToString from 'react-element-to-string'
import { useLocation } from '@reach/router'
import { Helmet } from 'react-helmet'
import { withOrientationChange } from 'react-device-detect'
import { useSiteData } from 'hooks/siteData'

import './heading.scss'

function Heading({ title, src, alt, subtitle, description, keywords, isPortrait }) {

    const { pathname } = useLocation()
    const { url, title: siteTitle } = useSiteData()

    const pageTitle = jsxToString(title).replace(/<\/?[^>]+(>|$)/g, " ")
    const pageDescription = jsxToString(subtitle).replace(/<\/?[^>]+(>|$)/g, " ")

    const padding = isPortrait ? '177.5%' : '56.25%'

    return (
        <>
            <Helmet>
                <title>{`${ pageTitle } - ${ siteTitle }`}</title>
                <meta property='og:title' content={`${ pageTitle } - ${ siteTitle }`} />
                <meta property='twitter:title' content={`${ pageTitle } - ${ siteTitle }`} />
                <meta property='og:image' content={ src + '?w=1200&h=1200' } />
                <meta property='og:image:secure_url' content={ src + '?w=1200&h=1200' } />
                <meta property='og:image:alt' content={ alt } />
                <meta property='twitter:image:src' content={ src + '?w=1200&h=1200' } />
                <meta property='og:url' content={ url + pathname } />
                <meta name='description' content={ description || pageDescription  } />
                <meta property='og:description' content={ description || pageDescription } />
                <meta name='keywords' content={ keywords } />
            </Helmet>

            <Container type='heading' constrain={false}>
                <div style={{ paddingBottom: padding, height: "0" }}>{ src && <Img src={ src } alt={ alt || title } ratio='16:9' portraitRatio='4:5' /> }</div>
                <div className='overlayContainer'>
                    <div className='overlay'>
                        <h1>{ title }</h1>
                        { subtitle && <h2>{ subtitle }</h2> }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default withOrientationChange(Heading)