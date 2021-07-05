import './About.css'
import { Transition } from 'semantic-ui-react';

function About({ panelIsVisible }) {

    

    return (
        
            <div className="about-container">
                <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
                    <div>
                        <p>This webpage was designed and implemented by Nicolas Olivares using React and the Semantic UI framework.<br />
                        To implement React JavaScript, HTML, and CSS were also utilized.<br /> Please explore and enjoy.<br /> Thanks for visiting.<br /><br />
                        Note: The project is not fully completed, but it is already better than the page I used to have so I published it.<br />
                        For now the carousel component has a glitch, I need some more photos, and the page needs to be optimized for tablets and phones.<br />
                        I will keep working and making it better.
                        </p>
                    </div>
                </Transition >
            </div>
        
    )

}

export default About;