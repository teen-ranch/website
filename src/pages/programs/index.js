import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default function Programs() {

	return (
        <>

            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/giantSwing3.jpg'
                alt='Girl screaming on giant swing'
                title='Programs'
                subtitle={<>Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/>We look forward to serving you with more activities as restrictions continue to loosen.</>}
                metaTitle='Programs'
                metaDescription='Due to COVID-19 Teen Ranch is running a small set of temporary programs. We look forward to serving you with more activities as restrictions continue to loosen.'
                keywords='hockey programs, horse programs, adventure programs, bmx dirt programs'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Hockey & skating programs'>
                    <ul>
                        <li>Skating development</li>
                        <li>Skills development</li>
                        <li>Hockey leagues</li>
                        <li>Public skating</li>
                        <li>Ice rentals</li>
                    </ul>

                    <Button to='/programs/hockey-and-skating/'>View hockey & skating programs</Button>
                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/trailRide2.jpg' name='Horse programs' swap>
                    <ul>
                        <li>Trail rides</li>
                        <li>Riding lessons</li>
                        <li>Hunter/Jumper shows</li>
                        <li>Schooling ring rental</li>
                    </ul>

                    <Button to='/programs/horses/'>View horse programs</Button>
                </Program>                

            </Container>
        </>
    )
}
