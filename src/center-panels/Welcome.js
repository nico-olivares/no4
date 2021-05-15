import './Welcome.css'
import { Transition } from 'semantic-ui-react';

function Welcome({ panelIsVisible }) {

    

    return (
        
            <div className="welcome-container">
                <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
                    <div>
                        <div className='image-group' >
                            <img className='portrait' src='./media/portrait0-large.jpg' alt='Nicolas Olivares' />
                            <p>Nicolas Olivares</p>
                        </div>
                        <p>Welcome to my interactive Résumé.</p>
                        <p>Look around and get to know me.</p>
                        <p>I'm a software developer and teacher.</p>
                        <p>This website was developed using React.</p>
                        <p>Enjoy your visit.</p>
                    </div>
                </Transition >
            </div>
        
    )

}

export default Welcome;