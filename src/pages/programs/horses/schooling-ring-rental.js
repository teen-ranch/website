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
                <meta name='description' content={`Outdoor horseback riding arenas for rent.`} />
                <meta name='keywords' content='riding arena rental, horseback riding facilities, horseback riding arena caledon ontario' />
            </Head>
            <Heading title='Schooling ring rental' subtitle={<>Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/>We look forward to serving you with more activities as restrictions continue to loosen.</>} />
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/blu%20flat.jpg' name='Schooling ring rental'>

                    <ul>
                        <li>Hunter or jumper course</li>
                        <li>Pre-booking and pre-payment required*</li>
                        <li>$25.00 per horse per hour of ring time (Includes HST)</li>
                    </ul>

                    <Button href="mailto:janet.stevens@teenranch.com?subject=Schooling ring rental">Rent a schooling ring</Button>

                </Program>

            </Container>
        </>
    )
}
