import './App.css';
import { useState, useEffect } from 'react';
import { Transition, Card } from 'semantic-ui-react';
import LeftPanel from './left-panel/LeftPanel';
import CenterPanel from './center-panels/CenterPanel';
import getReferences from './data/references';

function App() {

	const [ expandedMenu, setExpandedMenu ] = useState(true);
	const [ centerPanelName, setCenterPanelName ] = useState({title: 'splash', subtitle: ''});
	const [ rightPanelName, setRightPanelName ] = useState({title: 'Welcome', subtitle: ''});
	const [ panelIsVisible, setPanelIsVisible ] = useState(true);
	const preload = ['https://panprep2.herokuapp.com/', 'https://web-key.herokuapp.com'];
	const [ referenceArray, setReferenceArray ] = useState(getReferences().map((item, index) => {
		return (
			<Card key={index} >
				<Card.Content header={item.from} />
				<Card.Content description={item.reference} />
			</Card>
		)
	}));

useEffect(() => {
	fetch(preload[0], {mode: 'no-cors'}).then(() => console.log('done with fetch 1'));
	fetch(preload[1], {mode: 'no-cors'}).then(() => console.log('done with fetch 2'));
	const refArray = [];
	// getReferences().forEach((item, index) => {
	// 	referenceArray.push((
	// 		<Card index={index} >
	// 			<Card.Content header={item.from} />
	// 			<Card.Content description={item.reference} />
	// 		</Card>
	// 	))
	// })
	// setReferenceArray(JSON.parse(JSON.stringify(refArray)));
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
				
					<CenterPanel key='1' panelName={centerPanelName} panelIsVisible={panelIsVisible} referenceArray={referenceArray} />
				
			</div>
			<div
				className={
					expandedMenu ? 'right-panel right-panel-open' : 'right-panel right-panel-closed'
				}
			>
				
					<CenterPanel key='2' panelName={rightPanelName} panelIsVisible={panelIsVisible} referenceArray={referenceArray} />
				
			</div>
			
		</div>
	);
}

export default App;
