// import './MenuItem.css';
// import {useState} from 'react';
import { Menu } from 'semantic-ui-react';

function MenuItem({ title, activeMenu, setActiveMenu }) {

	const handleItemClick = (event, { name }) => {
		setActiveMenu(name);
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
