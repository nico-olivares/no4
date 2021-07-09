import './App.css';
import './global.css';
import { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import LeftPanel from './left-panel/LeftPanel';
import CenterPanel from './center-panels/CenterPanel';
import getReferences from './data/references';
import {getSplashPhotos, getFamilyPhotos, getHobbiesPhotos, getBiographyPhotos} from './data/photos';

function App() {

	const [ expandedMenu, setExpandedMenu ] = useState(true);
	const [ isPhone, setIsPhone ] = useState(false);
	const [ centerPanelName, setCenterPanelName ] = useState({title: 'splash', subtitle: ''});
	const [ rightPanelName, setRightPanelName ] = useState({title: 'Welcome', subtitle: ''});
	const [ panelIsVisible, setPanelIsVisible ] = useState(true);
	const preload = ['https://panprep2.herokuapp.com/', 'https://web-key.herokuapp.com'];
	const [ referenceArray ] = useState(getReferences().map((item, index) => {
		return (
			<Card key={index} >
				<Card.Content className='card-title' header={item.from} />
				<Card.Content className='card-description' description={item.reference} />
			</Card>
		)
	}));

	function preloadArrayOfPhotos(array) {
		array.map(item => {
			const photo = new Image();
			photo.src = item.address;
		})
	}

useEffect(() => {
	fetch(preload[0], {mode: 'no-cors'}).then(() => console.log('done with fetch 1'));
	fetch(preload[1], {mode: 'no-cors'}).then(() => console.log('done with fetch 2'));
	if (window.screen.width < 450) {
		setExpandedMenu(false);
		setIsPhone(true);
	}
	preloadArrayOfPhotos(getSplashPhotos());
	preloadArrayOfPhotos(getFamilyPhotos());
	preloadArrayOfPhotos(getBiographyPhotos());
	preloadArrayOfPhotos(getHobbiesPhotos());
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
					isPhone={isPhone}
					
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
