import './About.css'
import { Transition } from 'semantic-ui-react';

function About({ panelIsVisible }) {

    

    return (
        
            <div className="about-container">
                <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
                    <div className='large-text' >
                        <h2>About this webpage...</h2><br />
                        <p>This webpage was designed and implemented by <strong>Nicolas Olivares</strong> using the following:</p>
                        <ul>
                            <li>React and the Semantic UI framework.</li>
                            <li>With React: JavaScript, HTML, CSS.</li>
                        </ul>
                        <br/>
                        <p>Please explore and enjoy!</p>
                        <br/>
                        <p>
                            <strong className='note' >Note: </strong>The photos in the landing page are of places that are dear to me. 
                            They have all been taken by me personally.
                        </p>
                        <br/><br />
                        <h2>About my name...</h2><br />
                        <p>In hispanic countries we have two surnames. My legal name is <strong>Nicolas Olivares Reitze</strong> where Olivares is not my middle name (I don't have one), but instead Olivares is the first half of my surname. I don't use the second half of my surname except for legal matters. Most hispanic people do the same, only use the first half of their surnames.</p>
                        
                    </div>
                </Transition >
            </div>
        
    )

}

export default About;