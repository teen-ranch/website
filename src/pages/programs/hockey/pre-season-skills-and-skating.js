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
                <meta name='description' content={`Develop your stick handling and skating and get ready for next season!`} />
                <meta name='keywords' content='hockey season preparation, stick handling, power skating' />
            </Head>
            <Heading title='Pre-season skills & skating' subtitle={<>Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/>We look forward to serving you with more activities as restrictions continue to loosen.</>} />
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Pre-Season skills & skating'>
                    <ul>
                        <li>Boys & Girls Aged 7-13</li>
                        <li>Wednesdays 7:00 pm – 7:50 pm</li>
                        <li>July 22 – August 26, 2020</li>
                    </ul>

                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

            </Container>
        </>
    )
}