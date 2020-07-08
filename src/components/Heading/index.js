import React from 'react'
import Container from 'components/Container'

import { Head, useSiteData } from 'react-static'

import './heading.scss'

export default function Heading({ title, subtitle }) {

    const { title: siteTitle } = useSiteData()
    return (
        <Container type='heading'>
            {title && typeof title === 'string' && (
                <Head>
                    <title>{ title } - { siteTitle }</title>
                </Head>
            )}
            <h1>{ title }</h1>
            { subtitle && <h2>{ subtitle }</h2> }
        </Container>
    )
}