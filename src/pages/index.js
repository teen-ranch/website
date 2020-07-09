import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'

export default () => (
	<>
		<Heading title={<>Canada’s premier sports resort<br/>and retreat centre</>} subtitle={<>Less than an hour from <strong>Toronto</strong> in the heart of <strong>Caledon, Ontario</strong></>}/>
		
		<Container type='body'>
			
			<div className='covid'>
				<h3>COVID-19 Announcement</h3>

				<p>Teen Ranch is running a small set of temporary programs.</p>

				<p>We look forward to serving you with more activities as restrictions continue to loosen.</p>

				<Button to='/programs'>Check out our currently running programs</Button>

				<p><a target="_blank" href="https://website.teenranch.com">Click here to view our regular site</a></p>

			</div>

		</Container>
	</>
)
