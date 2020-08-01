import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

import '../horses.scss'

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse14.jpg'
                alt='Rider and horse jumping at Teen Ranch'
                title='Hunter / Jumper show photos'
                subtitle='Professional courses and divisions for first-time competitors to those schooling before their A Shows.'
                keywords='horse shows, schooling horse shows, horse show orangeville ontario, horse show caledon ontario, gta horse show'
                metaTitle='Hunter / Jumper shows'
                metaDescription='Professional courses and divisions for first-time competitors to those schooling before their A Shows.'
			/>
            <Container type='body'>

                

                <div className="staffTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Show date</th><th>Ring 1</th><th>Ring 3</th><th>Ring 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>July 26</td>
                            <td>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.open-hack-division-2.pactincphotography.com">Open Hack</a><br/>
                                <a target="_blank" rel="noopener noreferrer"  href="https://www.2-hunter-division-te.pactincphotography.com">2' Hunter</a><br/>
                                <a target="_blank" rel="noopener noreferrer"  href="https://www.23-hunter-division-t.pactincphotography.com">2'3" Hunter</a><br/>
                                <a target="_blank" rel="noopener noreferrer"  href="https://www.open-equitation-teen.pactincphotography.com">Open Equitation</a><br/>
                                <a target="_blank" rel="noopener noreferrer"  href="https://www.high-low-hunter-div.pactincphotography.com">High/Low Hunter</a><br/>
                                <a target="_blank" rel="noopener noreferrer"  href="https://www.jumper-division-teen.pactincphotography.com">Jumper</a>
                            </td>
                            <td></td>
                            <td></td></tr>
                        </tbody>
                    </table>
                </div>


            </Container>
        </>
    )
}
