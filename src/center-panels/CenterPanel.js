import Welcome from "./Welcome";
import Splash from "./Splash";
import Portfolio from "./Portfolio";

import getPortfolioItem from "./portfolioItems";

function CenterPanel({ panelName }) {

  switch (panelName) {
      case 'splash':
          return <Splash />;
          
        case 'Welcome':
        return <Welcome />;
        
        case 'Doomsday Preppers':
            return <Portfolio item={getPortfolioItem('Doomsday Preppers')} />;
            
        default:
            return <div>Nothing to see</div>;
            
  }

}

export default CenterPanel;
