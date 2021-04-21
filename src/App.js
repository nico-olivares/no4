import './App.css';
import { useState, useEffect } from 'react';
import LeftPanel from './left-panel/LeftPanel';
import CenterPanel from './center-panels/CenterPanel';

function App() {
	const [expandedMenu, setExpandedMenu] = useState(false);
	const [centerPanelName, setCenterPanelName] = useState('splash');
	const [rightPanelName, setRightPanelName] = useState('Welcome');


  

	return (
		<div className='App'>
			<div
				className={
					expandedMenu ? 'left-panel left-panel-open' : 'left-panel left-panel-closed'
				}
			>
				<LeftPanel
					expandedMenu={expandedMenu}
					setExpandedMenu={setExpandedMenu}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
				/>
			</div>
			<div
				className={
					expandedMenu
						? 'center-panel center-panel-open'
						: 'center-panel center-panel-closed'
				}
			>
				<CenterPanel panelName={centerPanelName} />
			</div>
			<div
				className={
					expandedMenu ? 'right-panel right-panel-open' : 'right-panel right-panel-closed'
				}
			>
				<CenterPanel panelName={rightPanelName} />
			</div>
		</div>
	);
}

export default App;
