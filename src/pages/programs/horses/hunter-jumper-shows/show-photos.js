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
                            <tr>
                                <td>July 26</td>
                                <td>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/media/set/?vanity=sutherlandimages&set=a.783888605738049">Novice Hack</a><br/>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/media/set/?vanity=sutherlandimages&set=a.783848199075423">Intermediate Hunters 2'3"</a><br/>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/media/set/?vanity=sutherlandimages&set=a.783949665731943">Novice Equitation 2'</a><br/>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/media/set/?vanity=sutherlandimages&set=a.784188912374685">Green Hunter 2'</a><br/>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/media/set/?vanity=sutherlandimages&set=a.784356149024628">Short Stirrup</a>
                                </td>
                                <td>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.open-hack-division-2.pactincphotography.com">Open Hack</a><br/>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://www.2-hunter-division-te.pactincphotography.com">2' Hunter</a><br/>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://www.23-hunter-division-t.pactincphotography.com">2'3" Hunter</a><br/>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://www.open-equitation-teen.pactincphotography.com">Open Equitation</a><br/>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://www.high-low-hunter-div.pactincphotography.com">High/Low Hunter</a><br/>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://www.jumper-division-teen.pactincphotography.com">Jumper</a>
                                </td>                            
                                <td>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://teresamaefinnerty.zenfolio.com/p964964795">Beginner</a><br/>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://teresamaefinnerty.zenfolio.com/p301137846">Leadline</a><br/>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://teresamaefinnerty.zenfolio.com/p586491027">Rookie</a>
                                </td>
                            </tr>
                            <tr>
                                <td>August 9</td>
                                <td>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/PACTInc.Photography/">Ring 1 - All divisions</a>
                                </td>
                                <td>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sutherlandimages/">Ring 3 - All divisions</a>
                                </td>
                                <td>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/media/set/?set=a.2471227449836794&type=3">Ring 4 - All divisions</a>
                                </td>
                            </tr>
                            <tr>
                                <td>August 23</td>
                                <td>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sutherlandimages/">Ring 1 - All divisions</a>
                                </td>
                                <td></td>
                                <td>
                                    <a target="_blank" rel="noopener noreferrer" href="https://kiriashantz-photography.pixieset.com/teenranchhunterjumper-ring4/?fbclid=IwAR2-VhD1HgjTFKWplGO0wdns7-Wr8wbH9BoHIX-Au8rx4Hkst_9j0n8Z68Y">Ring 4 - All divisions</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </Container>
        </>
    )
}
