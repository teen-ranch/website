import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>
            <Heading title='Programs' subtitle={<>Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/>We look forward to serving you with more activities as restrictions continue to loosen.</>} />
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/trailRide2.jpg' name='Horse programs'>
                    <ul>
                        <li>Trail rides</li>
                        <li>Riding lessons</li>
                        <li>Hunter/Jumper shows</li>
                        <li>Schooling ring rental</li>
                    </ul>

                    <Button to='/programs/horses'>View horse programs</Button>

                    <p><a target="_blank" href="https://teenranch.com/horse-programs">View regular horse programs</a></p>
                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Hockey programs' swap>
                <ul>
                    <li>Pre-season skills and skating</li>
                    <li>Dufferin-peel skating club </li>
                </ul>

                    <Button to='/programs/hockey'>View hockey programs</Button>
                    <p><a target="_blank" href="https://teenranch.com/hockey-programs">View regular hockey programs</a></p>
                </Program>

            </Container>
        </>
    )
}
