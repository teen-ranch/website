import React from 'react'
import { Head, useSiteData } from 'react-static'
import Container from 'components/Container'
import { Img } from 'components/Tueri'
import jsxToString from 'react-element-to-string'
import { useLocation } from 'components/Router'

import './heading.scss'

export default function Heading({ title, src, alt, subtitle, description, keywords }) {

    const { title: siteTitle } = useSiteData()
    const { href } = useLocation()

    const pageTitle = jsxToString(title).replace(/<\/?[^>]+(>|$)/g, " ")
    const pageDescription = jsxToString(subtitle).replace(/<\/?[^>]+(>|$)/g, " ")

    return (
        <>
            <Head>
                <title>{`${ pageTitle } - ${ siteTitle }`}</title>
                <meta property='og:title' content={`${ pageTitle } - ${ siteTitle }`} />
                <meta property='twitter:title' content={`${ pageTitle } - ${ siteTitle }`} />
                <meta property='og:image' content={ src + '?w=1200&h=1200' } />
                <meta property='og:image:secure_url' content={ src + '?w=1200&h=1200' } />
                <meta property='og:image:alt' content={ alt } />
                <meta property='twitter:image:src' content={ src + '?w=1200&h=1200' } />
                <meta property='og:url' content={ href } />
                <meta name='description' content={ description || pageDescription  } />
                <meta property='og:description' content={ description || pageDescription } />
                <meta name='keywords' content={ keywords } />
            </Head>

            <Container type='heading' constrain={false}>
                { src && <Img src={ src } alt={ alt || title } ratio='16:9' /> }
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