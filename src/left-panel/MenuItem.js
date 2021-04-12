// import './MenuItem.css';
// import {useState} from 'react';
import { Accordion, Icon, Menu } from 'semantic-ui-react';

function MenuItem({ key: itemIndex, title }) {
	return (
		<Menu.Item
			key={itemIndex}
			name={title}
			active={false}
			// onClick={handleItemClick}
		>
			{title}
		</Menu.Item>
	);
}

export default MenuItem;
