import React from 'react'
import { Head } from 'react-static'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>
            <Head>
                <meta name='description' content={`Rent our olympic-size ice hockey arena.`} />
                <meta name='keywords' content='ice rental, ice hockey rental, hockey arena rental, summer ice rental' />
            </Head>
            <Heading title='Ice rental' subtitle={<>Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/>We look forward to serving you with more activities as restrictions continue to loosen.</>} />
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/iceCorral1.jpg' name='Ice rental' swap>
                <p>Sharpen your skates and sharpen your skills. Rent ice or participate in a Teen Ranch
                hockey/figure skating program or private/semi-private lesson.</p>

                    <Button href="mailto:icecorral@teenranch.com?subject=Ice rental">Book now</Button>
                </Program>

            </Container>
        </>
    )
}
