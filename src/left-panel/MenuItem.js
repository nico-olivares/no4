// import './MenuItem.css';
// import {useState} from 'react';
import { Menu } from 'semantic-ui-react';

function MenuItem({ title, activeMenu, setActiveMenu, setCenterPanelName, setRightPanelName, rightPanelName, setPanelIsVisible }) {


	//not implemented yet. Idea is to wait a tad to allow for the out animation to show. It wasn't working though.
	const handleItemClick = (event, { name }) => {
		setActiveMenu(name);
		if (rightPanelName !== title) { 
			setPanelIsVisible(false);
			setTimeout(setPanels, 0);
		}
	}

	const setPanels = () => {
		setCenterPanelName(rightPanelName);
		setRightPanelName(title);
		setPanelIsVisible(true);
	}

	return (
		<Menu.Item
			
			name={title}
			active={title === activeMenu}
			onClick={handleItemClick}
		>
			{title}
		</Menu.Item>
	);
}

export default MenuItem;
