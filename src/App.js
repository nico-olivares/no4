import './App.css';
import { useState, useEffect } from 'react';
import { Transition } from 'semantic-ui-react';
import LeftPanel from './left-panel/LeftPanel';
import CenterPanel from './center-panels/CenterPanel';

function App() {

	const [ expandedMenu, setExpandedMenu ] = useState(true);
	const [ centerPanelName, setCenterPanelName ] = useState({title: 'splash', subtitle: ''});
	const [ rightPanelName, setRightPanelName ] = useState({title: 'Welcome', subtitle: ''});
	const [ panelIsVisible, setPanelIsVisible ] = useState(true);
	const preload = ['https://panprep2.herokuapp.com/', 'https://web-key.herokuapp.com'];

useEffect(() => {
	fetch(preload[0], {mode: 'no-cors'}).then(() => console.log('done with fetch 1'));
	fetch(preload[1], {mode: 'no-cors'}).then(() => console.log('done with fetch 2'));
}, []);
  

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
					centerPanelName={centerPanelName}
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
				
					<CenterPanel key='1' panelName={centerPanelName} panelIsVisible={panelIsVisible} />
				
			</div>
			<div
				className={
					expandedMenu ? 'right-panel right-panel-open' : 'right-panel right-panel-closed'
				}
			>
				
					<CenterPanel key='2' panelName={rightPanelName} panelIsVisible={panelIsVisible} />
				
			</div>
			{/* <div style={{display: 'none'}} >
				<iframe title='website1' src={preload[0]} />
				<iframe title='website2' src={preload[1]} />
				
			</div> */}
		</div>
	);
}

export default App;
