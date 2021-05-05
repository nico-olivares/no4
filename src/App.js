import './App.css';
import { useState, useEffect } from 'react';
import { Transition } from 'semantic-ui-react';
import LeftPanel from './left-panel/LeftPanel';
import CenterPanel from './center-panels/CenterPanel';

function App() {

	const [expandedMenu, setExpandedMenu] = useState(false);
	const [centerPanelName, setCenterPanelName] = useState('splash');
	const [rightPanelName, setRightPanelName] = useState('Welcome');
	const [ panelIsVisible, setPanelIsVisible] = useState(true);


  

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
					setPanelIsVisible={setPanelIsVisible}
				/>
			</div>
			<div
				className={
					expandedMenu
						? 'center-panel center-panel-open'
						: 'center-panel center-panel-closed'
				}
			>
				<Transition visible={panelIsVisible} animation='fly right' duration={400}>
					<CenterPanel key='1' panelName={centerPanelName} panelIsVisible={panelIsVisible} />
				</Transition >
			</div>
			<div
				className={
					expandedMenu ? 'right-panel right-panel-open' : 'right-panel right-panel-closed'
				}
			>
				<Transition visible={panelIsVisible} animation='fly right' duration={400} >
					<CenterPanel key='2' panelName={rightPanelName} panelIsVisible={panelIsVisible} />
				</Transition >
			</div>
		</div>
	);
}

export default App;
