import './LeftPanel.css';
import Header from './Header.js';
import LeftMenu from './LeftMenu.js';
import Footer from './Footer.js';

function LeftPanel() {
  return (
    <div className="left-panel-inner">
        <Header  />
        <LeftMenu  />
        <Footer  />
    </div>
  );
}

export default LeftPanel;
