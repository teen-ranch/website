import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg'
                alt="Men's hockey league"
				title="Men's hockey league"
                subtitle='Spring and Fall hockey leagues for men age 35+'
                keywords='hockey season preparation, stick handling, power skating'
                metaTitle='Pre-season skills & skating'
                metaDescription='Develop your stick handling and skating and get ready for next season!'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg' name="Men's hockey league">

                    <p>
                    Spring and Fall hockey leagues for men age 35+
                    </p>

                    <h3>Fall hockey league</h3>
                    <ul>
                        <li><strong>When:</strong> Starts Thursday September 24th, 2020</li>
                        <li><strong>Cost:</strong> $480 +HST</li>
                    </ul>
                    
                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

            </Container>
        </>
    )
}
