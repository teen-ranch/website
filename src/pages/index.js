import React from 'react'
import { Head, useSiteData } from 'react-static'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'

export default () => {

	const { title } = useSiteData()
	
	return (
	
		<>
			<Head>
				<title>A premier sports resort and retreat centre since 1967 - { title }</title>
			</Head>
			<Heading
				src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/christmasDayCamp2.jpg'
				title={<>A premier sports resort<br/>and retreat centre since 1967</>} 
				subtitle={<>Less than an hour from <strong>Toronto</strong> in the heart of <strong>Caledon, Ontario</strong></>}
			/>
			
			<Container type='body'>
				
				<div className='covid'>
					<h3>COVID-19 Announcement</h3>

					<p>Teen Ranch is running a small set of temporary programs.</p>

					<p>We look forward to serving you with more activities as restrictions continue to loosen.</p>

					<Button to='/programs'>Check out our currently running programs</Button>

				</div>

			</Container>
		</>
	)
}
