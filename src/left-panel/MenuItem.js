// import './MenuItem.css';
// import {useState} from 'react';
import { Menu } from 'semantic-ui-react';

function MenuItem({ title, activeMenu, setActiveMenu, setCenterPanel, setRightPanel, rightPanel }) {

	const handleItemClick = (event, { name }) => {
		setActiveMenu(name);
		setCenterPanel(rightPanel);
		setRightPanel(title);
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
