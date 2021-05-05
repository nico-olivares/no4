import {Transition} from 'semantic-ui-react'
import Welcome from "./Welcome";
import Splash from "./Splash";
import Portfolio from "./Portfolio";

import getPortfolioItem from "./portfolioItems";

function CenterPanel({ panelName, panelIsVisible }) {

  console.log(panelIsVisible);

  switch (panelName) {
      case 'splash':
          return (
            
              <Splash />
            
          )
          
        case 'Welcome':
        return (
            
              <Welcome />
            
        )
        
        case 'Doomsday Preppers':
            return <Portfolio key='1' item={getPortfolioItem('Doomsday Preppers')} />;
            
        default:
            return <div>Nothing to see</div>;
            
  }

}

export default CenterPanel;
