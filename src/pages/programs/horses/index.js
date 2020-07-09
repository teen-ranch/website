import React from 'react'
import { useSiteData } from 'react-static'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

    const { covidGroupMax } = useSiteData()

	return (
        <>
            <Heading title='Horse programs' subtitle={<>Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/>We look forward to serving you with more activities as restrictions continue to loosen.</>} />
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/trailRide2.jpg' name='Trail rides'>
                    <ul>
                        <li>Maximum { covidGroupMax } people including staff for keeping with government restrictions </li>
                        <li>Ages 10+</li>
                        <li>One-hour in length</li>
                        <li>Walk/trot (if comfortable)</li>
                        <li>Max. participant weight of 250lbs</li>
                        <li>Pre-booking and pre-payment required*</li>
                        <li>$55.00 per person (Includes HST)</li>
                    </ul>

                    <Button href="mailto:rachel.stevens@teenranch.com?subject=Trail ride booking inquiry">Book a trail ride</Button>
                </Program>

                    

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse5.jpg' name='Riding lessons' swap>

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

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hunterJumper16.jpg' name='Hunter/Jumper shows'>
                    <h4>2020 show dates</h4>
                    <ul>
                        <li>June 30 - ONLINE (Finished)</li>
                        <li>July 19 - ONLINE (Online entry open)</li>
                        <li>July 26 - TBD</li>
                        <li>August 9 - TBD</li>
                        <li>August 23 - TBD</li>
                        <li>September 13 - TBD</li>
                        <li>September 27 - TBD</li>
                    </ul>

                    <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/OnlineHorseShowJuly192020/formperma/8kUPL-fV-vy1KyRtGWI0k-8BYhpDFqIeEi3015OrIq0?referrername=teenranch.com">Enter in the July 19 online show</Button>

                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/blu%20flat.jpg' name='Schooling ring rental' swap>

                    <ul>
                        <li>Hunter or jumper course</li>
                        <li>Pre-booking and pre-payment required*</li>
                        <li>$25.00 per horse per hour of ring time (Includes HST)</li>
                    </ul>

                    <Button href="mailto:janet.stevens@teenranch.com?subject=Riding lessons">Rent a schooling ring</Button>

                </Program>

            </Container>
        </>
    )
}
