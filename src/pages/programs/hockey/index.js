import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg'
                alt='Hockey player stopping at blue line'
				title='Hockey programs'
                subtitle='Hockey programs and leagues for all ages'
                metaDescription='Hockey programs and leagues for all ages'
                keywords='skating development, power skating, stick handling school, hockey school, hockey school caledon ontario'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Pre-Season Skills and Skating'>
                    <p>A six week program focused on the development of forward and backward skating, crossovers, tight-turns, individual shooting, stick handling, creativity, passing, as well as game situation type skills. For boys and girls ages 7-13.</p>

                    <Button to="/programs/hockey/pre-season-skills-and-skating/">Learn more</Button>
                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg' name="Men's hockey league" swap>
                <p>Summer and Fall hockey leagues for men age 35+</p>

                    <Button to='/programs/hockey/mens-hockey-league/'>Learn more</Button>
                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/iceCorral1.jpg' name='Ice rental'>
                <p>Sharpen your skates and sharpen your skills. Rent ice or participate in a Teen Ranch
                hockey/figure skating program or private/semi-private lesson.</p>

                    <Button to='/programs/hockey/ice-rental/'>Learn more</Button>
                </Program>

            </Container>
        </>
    )
}
