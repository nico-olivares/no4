import './Welcome.css'
import { Transition } from 'semantic-ui-react';

function Welcome({ panelIsVisible }) {

    

    return (
        
            <div className="welcome-container">
                <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
                    <div >
                        <div className='image-group' >
                            <img className='portrait' src='./media/portrait0-large.jpg' alt='Nicolas Olivares' />
                            <p>Nicolas Olivares</p>
                        </div>
                        <p>Welcome to my interactive Résumé.<br /><br />
                        I am a full stack web developer whose passion is learning and doing. 
                        I am a polymath and love learning and mastering new skills and concepts whether learning to code, 
                        coding languages, or even fixing an unruly appliance.  I am an idealist who values honor above all else. 
                        I believe in honesty, effort, and doing the right thing no matter what. 
                        I want to leave the world a better place and be the positive influence around me.
</p>
                        
                    </div>
                </Transition >
            </div>
        
    )

}

export default Welcome;