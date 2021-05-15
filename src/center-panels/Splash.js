import './Splash.css';
import { Transition } from 'semantic-ui-react';

//this component is the very first center panel. Currently it has a couple of photos from chile
export default function Splash({ panelIsVisible }) {

    return (
        <Transition visible={panelIsVisible} transition='fly left' duration={1500} >
            <div className="splash">
                <img className="splash-image" src='./media/20080403_IMG_0307.JPG' alt='Siete Tazas in Chile' />
                <img className="splash-image" src='./media/20080404_IMG_0345.JPG' alt='Siete Tazas in Chile 2' />
            </div>
        </Transition >
    )
}
