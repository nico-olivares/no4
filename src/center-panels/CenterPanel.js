import {Transition} from 'semantic-ui-react'
import Welcome from "./Welcome";
import Splash from "./Splash";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Life from "./Life";
import References from "./References";
import Resume from "./Resume";
import Contact from "./Contact";

import getPortfolioItem from "../data/portfolioItems";
import getExperienceItem from "../data/experienceItems";
import getSkillsItem from "../data/skillsItems";
import getEducationItem from "../data/educationItems";
import getLifeItem from "../data/lifeItems"


//controls what is shown in either center panel. It takes input from the menu and shows accordingly.
export default function CenterPanel({ panelName, panelIsVisible }) {

  switch (panelName.title) {
      case 'splash':
          return <Splash panelIsVisible={panelIsVisible} />;
          
        case 'Welcome':
            return <Welcome panelIsVisible={panelIsVisible} />;
        
        case 'Portfolio':
            return <Portfolio key='1' item={getPortfolioItem(panelName.subtitle)} panelIsVisible={panelIsVisible} />;

        case 'Experience':
            return <Experience key='1' item={getExperienceItem(panelName.subtitle)} panelIsVisible={panelIsVisible} />;
        case 'Education':
            return <Education key='1' item={getEducationItem(panelName.subtitle)} panelIsVisible={panelIsVisible} />;
        case 'Skills':
            return <Skills key='1' item={getSkillsItem(panelName.subtitle)} panelIsVisible={panelIsVisible} />;
        case 'Life':
            return <Life key='1' item={getLifeItem(panelName.subtitle)} panelIsVisible={panelIsVisible} />;
        case 'References':
            return <References panelIsVisible={panelIsVisible} />;
        case 'Resume':
            return <Resume panelIsVisible={panelIsVisible} />;
        case 'Contact':
            return <Contact panelIsVisible={panelIsVisible} />;
        default:
            return <div>Nothing to see</div>;
            
  }

}


