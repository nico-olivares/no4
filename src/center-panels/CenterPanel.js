
import Welcome from "./Welcome";
import About from "./About";
import Splash from "./Splash";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Life from "./Life";
import References from "./References";
import Resume from "./Resume";
import Contact from "./Contact";
import './CenterPanel.css';

import getPortfolioItem from "../data/portfolioItems";
import getExperienceItem from "../data/experienceItems";
import getSkillsItem from "../data/skillsItems";
import getEducationItem from "../data/educationItems";
import getLifeItem from "../data/lifeItems"

import { getFamilyPhotos, getBiographyPhotos, getHobbiesPhotos } from '../data/photos';


//controls what is shown in either center panel. It takes input from the menu and shows accordingly.
export default function CenterPanel({ panelName, panelIsVisible, referenceArray }) {

    let duration = 4000;

    const photoArray = (kind) => {
        let array = null;
        switch (kind) {
            case 'Biography':
                array = getBiographyPhotos();
                duration = 4000;
                break;
            case 'Family':
                array = getFamilyPhotos();
                duration = 4000;
                break;
            case 'Interests':
                array = getHobbiesPhotos();
                duration = 6000;
                break;
            default:
                array = null;
                break;
        }
        return array.map(item => {
            return <img className='life-photos' src={item.address} alt={item.alt} />
        });
    }


  switch (panelName.title) {
      case 'splash':
          return <Splash panelIsVisible={panelIsVisible} />;
          
        case 'Welcome':
            return <Welcome panelIsVisible={panelIsVisible} />;

        case 'About':
            return <About panelIsVisible={panelIsVisible} />;
        
        case 'Portfolio':
            return <Portfolio key='1' item={getPortfolioItem(panelName.subtitle)} panelIsVisible={panelIsVisible} />;

        case 'Experience':
            return <Experience key='1' item={getExperienceItem(panelName.subtitle)} panelIsVisible={panelIsVisible} />;
        case 'Education':
            return <Education key='1' item={getEducationItem(panelName.subtitle)} panelIsVisible={panelIsVisible} />;
        case 'Skills':
            return <Skills key='1' item={getSkillsItem(panelName.subtitle)} panelIsVisible={panelIsVisible} />;
        case 'Life':
            return <Life key='1' item={getLifeItem(panelName.subtitle)} photosArray={photoArray(panelName.subtitle)} panelIsVisible={panelIsVisible} duration={duration} />;
        case 'References':
            return <References panelIsVisible={panelIsVisible} referenceArray={referenceArray} />;
        case 'Resume':
            return <Resume panelIsVisible={panelIsVisible} />;
        case 'Contact':
            return <Contact panelIsVisible={panelIsVisible} />;
        default:
            return <div>Nothing to see</div>;
            
  }

}


