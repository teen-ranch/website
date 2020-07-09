import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>
            <Heading title='Hockey programs' subtitle={<>Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/>We look forward to serving you with more activities as restrictions continue to loosen.</>} />
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Pre-Season Skills and Skating'>
                    <ul>
                        <li>Boys & Girls Aged 7-13</li>
                        <li>Wednesdays 7:00 pm – 7:50 pm</li>
                        <li>July 22 – August 26, 2020</li>
                        <li>$170.00 +HST per person</li>
                    </ul>

                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/iceCorral1.jpg' name='Ice rental' swap>
                <p>Sharpen your skates and sharpen your skills. Rent ice or participate in a Teen Ranch
                hockey/figure skating program or private/semi-private lesson.</p>

                    <Button href="mailto:camp@teenranch.com?subject=Ice rental">Book now</Button>
                </Program>

            </Container>
        </>
    )
}