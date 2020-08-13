import React from 'react'
import Container from 'components/Container'

import './footer.scss'

export default function Footer() {
    return (
        <footer>
            <Container type={`footer
            `}>
                &copy; { new Date().getFullYear() } Teen Ranch. All rights reserved.
                <br/><br/><a target="_blank" rel="noopener noreferrer" href='https://plausible.io/teenranch.com'>View our public website analytics</a>
            </Container>
        </footer>
    )
}