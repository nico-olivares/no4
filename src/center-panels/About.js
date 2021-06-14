import './About.css'
import { Transition } from 'semantic-ui-react';

function About({ panelIsVisible }) {

    

    return (
        
            <div className="about-container">
                <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
                    <div>
                        <p>This webpage was designed and implemented entirely by Nicolas Olivares using React and the Semantic UI framework.<br /> To implement React I also used JavaScript, HTML, and CSS.<br /> Please explore and enjoy.<br /> Thanks for visiting.</p>
                    </div>
                </Transition >
            </div>
        
    )

}

export default About;