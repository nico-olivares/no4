import './App.css';
import { useState } from 'react';
import LeftPanel from './left-panel/LeftPanel';

function App() {

  const [ expandedMenu, setExpandedMenu ] = useState(false);
  const [ centerPanel, setCenterPanel ] = useState('splash');
  const [ rightPanel, setRightPanel ] = useState('welcome');
  

  return (
    <div className="App">
        <div className={expandedMenu ? 'left-panel left-panel-open' : 'left-panel left-panel-closed' }  >
            <LeftPanel expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} setCenterPanel={setCenterPanel} setRightPanel={setRightPanel} />
        </div>
        <div className={expandedMenu ? 'center-panel center-panel-open' : 'center-panel center-panel-closed' } >center panel</div>
        <div className={expandedMenu ? 'right-panel right-panel-open' : 'right-panel right-panel-closed'} >right panel</div>
    </div>
  );
}

export default App;
