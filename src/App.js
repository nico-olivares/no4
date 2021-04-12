import './App.css';
import LeftPanel from './left-panel/LeftPanel';

function App() {
  return (
    <div className="App">
        <div className="left-panel">
            <LeftPanel />
        </div>
        <div className="center-panel">center panel</div>
        <div className="right-panel">right panel</div>
    </div>
  );
}

export default App;
