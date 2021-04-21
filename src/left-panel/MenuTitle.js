// import './MenuTitle.css';
import { useState } from 'react';
import { Accordion, Icon, Menu, Input, Label } from 'semantic-ui-react';
import MenuItem from './MenuItem';

function MenuTitle({
	index,
	title,
	children,
	activeIndex,
	setActiveIndex,
	setCenterPanel,
	setRightPanel,
	rightPanel,
}) {
	const [activeMenu, setActiveMenu] = useState('');

	const handleClick = (event) => {
		const newIndex = activeIndex === index ? -1 : index;

		setActiveIndex(newIndex);
		if (children.length === 0) {
			setCenterPanel(rightPanel);
			setRightPanel(title);
		}
	};

	return (
		<div>
			<Accordion.Title
				value={title}
				active={activeIndex === index}
				index={index}
				onClick={(event) => handleClick(event)}
			>
				{title}
				{children.length > 0 ? <Icon name='dropdown' /> : ''}
			</Accordion.Title>
			{children.length > 0 ? (
				<Accordion.Content active={activeIndex === index}>
					<Menu vertical>
						{children.map((item, i) => {
							return (
								<MenuItem
									key={i}
									title={item}
									activeMenu={activeMenu}
									setActiveMenu={setActiveMenu}
									setCenterPanel={setCenterPanel}
									setRightPanel={setRightPanel}
									rightPanel={rightPanel}
								/>
							);
						})}
					</Menu>
				</Accordion.Content>
			) : (
				''
			)}
		</div>
	);
}

export default MenuTitle;
