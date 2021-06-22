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
                        <p>Welcome to my interactive Resume.<br />I am a full stack web developer.<br />I consider myself a polymath whose passion is learning and doing.<br />I love learning and doing new things and mastering old ones. From learning to code and coding languages to fixing an appliance.<br />I am an idealist who values honor above all else. I believe in honesty, effort, and doing the right thing no matter what. I finally want to leave the world a better place than I found it and I like to work on things that have a positive impact even if it's only for a few people.</p>
                        
                    </div>
                </Transition >
            </div>
        
    )

}

export default Welcome;