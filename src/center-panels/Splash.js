import './Splash.css';
import { Transition } from 'semantic-ui-react';
import { getSplashPhotos } from '../data/photos'

//this component is the very first center panel. Currently it has a couple of photos from chile
export default function Splash({ panelIsVisible }) {

const photos = getSplashPhotos();


    return (

            
                <div>
                    <Transition visible={panelIsVisible} animation='fly left' duration={1500} >
                        <div>
                            <div className="splash">
                                <img className="splash-image" src={photos[0].address} alt={photos[0].alt} />
                                <img className="splash-image" src={photos[1].address} alt={photos[1].alt} />
                            </div>
                        </div>
                    </Transition >
                </div>
           
        
    )
}
