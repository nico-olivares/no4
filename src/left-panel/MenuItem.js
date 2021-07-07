import './MenuItem.css';
// import {useState} from 'react';
import { Menu } from 'semantic-ui-react';

//implements the children menu items. This is the list of sub-items under some main items, like portfolio.
export default function MenuItem({ title, subtitle, activeMenu, setActiveMenu, setCenterPanelName, setRightPanelName, rightPanelName, setPanelIsVisible }) {

	const handleItemClick = (event, { name }) => {
		setActiveMenu(name);
		if (rightPanelName.subtitle !== subtitle) { 
			setPanelIsVisible(false);
			setTimeout(setPanels, 0);
		}
	}

	const setPanels = () => {
		setCenterPanelName(rightPanelName);
		setRightPanelName({title, subtitle});
		setPanelIsVisible(true);
	}

	return (
		<Menu.Item
			className='menu-item-submenu'
			name={subtitle}
			active={title === activeMenu}
			onClick={handleItemClick}
		>
			{subtitle}
		</Menu.Item>
	);
}


