import React from 'react'
import Container from 'components/Container'
import { Img } from 'components/Tueri'

import './heading.scss'

export default function Heading({ title, src, alt, subtitle }) {

    return (
        <Container type='heading' constrain={false}>
            { src && <Img src={ src } alt={ alt || title } ratio='16:9' /> }
            <div className='overlayContainer'>
                <div className='overlay'>
                    <h1>{ title }</h1>
                    { subtitle && <h2>{ subtitle }</h2> }
                </div>
            </div>
        </Container>
    )
}