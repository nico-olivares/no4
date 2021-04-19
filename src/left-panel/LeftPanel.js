import './LeftPanel.css';
import Header from './Header.js';
import LeftMenu from './LeftMenu.js';
import Footer from './Footer.js';
import { Icon, Transition } from 'semantic-ui-react';

function LeftPanel({ expandedMenu, setExpandedMenu }) {
  const animationDuration = expandedMenu ? 700 : 50;
  

  


  return (
    <div className={expandedMenu ? 'left-panel-inner left-panel-inner-open' : 'left-panel-inner left-panel-inner-closed' }  >
        <Transition visible={expandedMenu} animation='fade down' duration={animationDuration} >
          <div className="left-panel-content"  >
            <Header  />
            <LeftMenu  />
            <Footer  />
          </div>
        </Transition>
        <div className="left-panel-arrow" onClick={() => setExpandedMenu(!expandedMenu)}  >
          <Icon name={expandedMenu ? "angle double left" : "angle double right"} size='large' color='black' />
        </div>
    </div>
  );
}

export default LeftPanel;
