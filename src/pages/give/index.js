import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

import './give.scss'

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/kids1.jpg'
                alt='Campfire logs'
				title='Give to Teen Ranch'
                subtitle='Help us continue the legacy, vision and mission to spread the word of God'
                description='Help us continue the legacy, vision and mission of Teen Ranch to spread the word of God.'
                keywords='teen ranch canada, teen ranch caledon ontario canada, give to teen ranch, donate to teen ranch, support teen ranch, teen ranch finances'
			/>
            <Container type='body'>

            Thank you for considering giving financially. We deeply appreciate your generosity. 

                <div className='donationOptionsContainer'>

                    <div className='donationOption'>

                            <h3>Option 1</h3>
                            <h2>Give to Teen Ranch Canada</h2>
                            <h4>(Not tax deductable)</h4>

                            <p>
                                Teen Ranch Canada is a registered non-profit organization responsible for day-to-day operations of sports, outdoor education and retreat programs. Money given to Teen Ranch will be used for ongoing operating expenses and is not tax deductable.
                            </p>

                            <h5>How to give to Teen Ranch Canada:</h5>
                            <ul>
                                <li><strong>E-transfer:</strong> <a href="mailto:giving@teenranch.com">giving@teenranch.com</a></li>
                                <li><strong>Cheque:</strong> payable to "Teen Ranch"</li>
                                <li><strong>Cash:</strong> indicate monies are for "Teen Ranch"</li>
                            </ul>

                    </div>

                    <div className='donationOption'>

                            <h3>Option 2</h3>
                            <h2>Donate to Teen Ranch Ministries</h2>
                            <h4>(Tax deductable)</h4>

                            Teen Ranch Ministries is a registered charitable organization responsible for advancing the Gospel of Jesus Christ. Money donated to Teen Ranch Ministries will be used to support our call to "love Christ and radiate His love".

                            <h5>How to donate to Teen Ranch Ministries:</h5>
                            <ul>
                                <li><strong>Online:</strong> <a target="_blank" rel="noopener noreferrer" href="https://teenranchministries.org/donate">https://teenranchministries.org</a></li>
                                <li><strong>E-transfer:</strong> <a href="mailto:giving@teenranchministries.org">giving@teenranchministries.org</a></li>
                                <li><strong>Cheque:</strong> payable to "Teen Ranch Ministries"</li>
                                <li><strong>Cash:</strong> indicate monies are for "Teen Ranch Ministries"</li>
                            </ul>

                    </div>

                </div>

            </Container>
        </>
    )
}
