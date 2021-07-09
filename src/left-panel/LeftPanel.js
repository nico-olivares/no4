import React, {useState} from 'react';
import './LeftPanel.css';
import Header from './Header.js';
import LeftMenu from './LeftMenu.js';
import Footer from './Footer.js';
import { Icon, Transition } from 'semantic-ui-react';

//puts together the three elements of the menu panel. Header, footer, and actual menu.
export default function LeftPanel({ expandedMenu, setExpandedMenu, setCenterPanelName, 
  setRightPanelName, centerPanelName, rightPanelName, setPanelIsVisible, isPhone }) {
  const [ activeIndex, setActiveIndex ] = useState('1');

  const animationDuration = expandedMenu ? 700 : 500;
  
  return (
    <div className={expandedMenu ? 'left-panel-inner left-panel-inner-open' : 'left-panel-inner left-panel-inner-closed' }  >
        <Transition visible={expandedMenu} animation='fly right' duration={animationDuration} >
          <div className="left-panel-content"  >
            <Header setCenterPanelName={setCenterPanelName} setRightPanelName={setRightPanelName} centerPanelName={centerPanelName} rightPanelName={rightPanelName} setPanelIsVisible={setPanelIsVisible} setActiveIndex={setActiveIndex}  />
            <LeftMenu setCenterPanelName={setCenterPanelName} setRightPanelName={setRightPanelName} rightPanelName={rightPanelName} 
            setPanelIsVisible={setPanelIsVisible} activeIndex={activeIndex} setActiveIndex={setActiveIndex} isPhone={isPhone} setExpandedMenu={setExpandedMenu} />
            <Footer  />
          </div>
        </Transition>
        <div className="left-panel-arrow" onClick={() => setExpandedMenu(!expandedMenu)}  >
          <Icon name={expandedMenu ? "angle double left" : "angle double right"} size='large' color='black' />
        </div>
    </div>
  );
}


