import Welcome from "./Welcome";
import Splash from "./Splash";

function CenterPanel({ panelName }) {

  switch (panelName) {
      case 'splash':
          return <Splash />;
          
        case 'Welcome':
        return <Welcome />;
        
        case 'Doomsday Preppers':
            return <div>Doomsday Preppers</div>;
            
        default:
            return <div>Default</div>;
            
  }

}

export default CenterPanel;
