import './About.css'
import { Transition } from 'semantic-ui-react';

function About({ panelIsVisible }) {

    

    return (
        
            <div className="about-container">
                <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
                    <div>
                        <p>This webpage was designed and implemented by <strong>Nicolas Olivares</strong> using the following:</p> <br/>
                        
                        <ul>
                            <li>React and the Semantic UI framework.</li>
                            <li>With React: JavaScript, HTML, CSS.</li>
                        </ul>
                        <br/>
                        <p>Please explore and enjoy!</p>
                        <br/>
                        <ul>
                            <li>The photos in the landing page are of places that are dear to me. They have all been taken by me personally.</li>
                        </ul>
                        <br/><br />
                        <p className="note" >
                        <strong>Note: </strong>
                        The project is not fully complete, but it is already better than the page I used to have so I published it. For now, the carousel 
                        component has a small glitch and the whole app needs to be optimized for tablets and phones.<br />
                        I will keep working and making it better.
                        </p>
                        
                    </div>
                </Transition >
            </div>
        
    )

}

export default About;