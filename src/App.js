import './App.css';
import { useState } from 'react';
import LeftPanel from './left-panel/LeftPanel';

function App() {

  const [expandedMenu, setExpandedMenu ] = useState(true);

  return (
    <div className="App">
        <div className="left-panel left-panel-reduced" style={expandedMenu ? '{{width: '20vw' }}' : '{{ width: '3vw'}}'  } >
            <LeftPanel />
        </div>
        <div className="center-panel">center panel</div>
        <div className="right-panel">right panel</div>
    </div>
  );
}

export default App;
