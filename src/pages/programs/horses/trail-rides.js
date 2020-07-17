import React from 'react'
import { useSiteData, Head } from 'react-static'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

    const { covidGroupMax } = useSiteData()

	return (
        <>
            <Head>
                <meta name='description' content={`Trail rides through the beautiful Headwaters region in Caledon, Ontario.`} />
                <meta name='keywords' content='trail rides, horseback riding, horse back riding in caledon, horse back riding in orangeville' />
            </Head>
            <Heading title='Trail rides' subtitle={<>Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/>We look forward to serving you with more activities as restrictions continue to loosen.</>} />
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/trailRide2.jpg' name='Trail rides'>
                    <ul>
                        <li>Maximum { covidGroupMax } people including staff for keeping with government restrictions</li>
                        <li>Ages 10+</li>
                        <li>One-hour in length</li>
                        <li>Walk/trot (if comfortable)</li>
                        <li>Max. participant weight of 250lbs</li>
                        <li>Pre-booking and pre-payment required*</li>
                        <li>$55.00 per person (Includes HST)</li>
                    </ul>

                    <Button href="mailto:rachel.stevens@teenranch.com?subject=Trail ride booking inquiry">Book a trail ride</Button>
                </Program>

            </Container>
        </>
    )
}
