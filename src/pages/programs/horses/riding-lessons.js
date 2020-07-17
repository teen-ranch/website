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
                <meta name='description' content={`Private and semi-private riding lessons in Caledon, Ontario.`} />
                <meta name='keywords' content='riding lessons, horseback riding lessons, riding lessons caledon ontario, horseback riding caledon ontario' />
            </Head>
            <Heading title='Riding lessons' subtitle={<>Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/>We look forward to serving you with more activities as restrictions continue to loosen.</>} />
            <Container type='body'>                   

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse5.jpg' name='Riding lessons'>

                    <ul>
                        <li>Western & English riding</li>
                        <li>Beginner to advanced</li>
                        <li>Weekdays</li>
                        <li>One-hour in length</li>
                        <li>Max. participant weight of 250lbs</li>
                        <li>Pre-booking and pre-payment required*</li>
                        <li>Private lesson - Ages 5+: $75.00 per person (Includes HST)</li>
                        <li>Semi-private lesson - Ages 7+: $60.00 per person (Includes HST)</li>
                    </ul>

                    <Button href="mailto:rachel.stevens@teenranch.com?subject=Riding lessons">Book a riding lesson</Button>

                </Program>

            </Container>
        </>
    )
}
