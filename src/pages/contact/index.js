import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'

export default () => {

	return (
        <>
            <Heading title='Contact us' subtitle='Due to staffing restrictions, wait times may be longer than usual.' />
            <Container type='body'>

                <div className='fourOhFourGrid'>

                    <div>
                        <h3>Phone</h3>
                        <a href="tel:5199414501">(519) 941-4501</a>

                        <h3>Fax</h3>
                        (519) 941-0500
                    </div>

                    <div>
                        <h3>Mailing address</h3>
                        PO Box 77<br/>
                        Caledon Village, Ontario<br/>
                        L7K 3L3

                    </div>
                    <div>

                        <h3>Physical address</h3>
                        20682 Hurontario Street<br/>
                        Caledon, Ontario<br/>
                        L7K 1X1
                    </div>

                    <div>
                        <h3>Email</h3>
                        <a href='mailto:camp@teenranch.com'>camp@teenranch.com</a>
                    </div>

                </div>

            </Container>
        </>
    )
}