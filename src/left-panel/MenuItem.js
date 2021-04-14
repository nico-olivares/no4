// import './MenuItem.css';
// import {useState} from 'react';
import { Accordion, Icon, Menu } from 'semantic-ui-react';

function MenuItem({ title }) {
	return (
		<Menu.Item
			
			value={title}
			active={false}
			// onClick={handleItemClick}
		>
			{title}
		</Menu.Item>
	);
}

export default MenuItem;
