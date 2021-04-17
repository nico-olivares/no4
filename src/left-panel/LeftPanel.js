import './LeftPanel.css';
import Header from './Header.js';
import LeftMenu from './LeftMenu.js';
import Footer from './Footer.js';
import { Icon } from 'semantic-ui-react';

function LeftPanel() {
  return (
    <div className="left-panel-inner">
        <div className="left-panel-content hide"  >
          <Header  />
          <LeftMenu  />
          <Footer  />
        </div>
        <div className="left-panel-arrow" >
          <Icon name="angle double left" size='large' color='black' />
        </div>
    </div>
  );
}

export default LeftPanel;
