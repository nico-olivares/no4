// import './MenuTitle.css';
import { useState } from 'react';
import { Accordion, Icon, Menu } from 'semantic-ui-react';
import MenuItem from './MenuItem';

//implements the menu accordion with all the main titles. It also calls for the subtitles when needed and puts the whole menu together.
export default function MenuTitle({
	index,
	title,
	children,
	activeIndex,
	setActiveIndex,
	setCenterPanelName,
	setRightPanelName,
	rightPanelName,
	setPanelIsVisible
}) {
	const [activeMenu, setActiveMenu] = useState('');

	const handleClick = (event) => {
		const newIndex = activeIndex === index ? -1 : index;

		
		setActiveIndex(newIndex);
		if ((children.length === 0) && ((rightPanelName.title !== title))) {
			setPanelIsVisible(false);
			setTimeout(setPanels, 0);
		}
	};

	const setPanels = () => {
			setCenterPanelName(rightPanelName);
			setRightPanelName({title, subtitle: ''});
			setPanelIsVisible(true);
	}

	return (
		<div>
			<Accordion.Title
				value={title}
				active={activeIndex === index}
				index={index}
				onClick={(event) => handleClick(event)}
			>
				{title  === 'Resume' ? 'Résumé' : title}
				{children.length > 0 ? <Icon name='dropdown' /> : ''}
			</Accordion.Title>
			{children.length > 0 ? (
				<Accordion.Content active={activeIndex === index}>
					<Menu vertical>
						{children.map((item, i) => {
							return (
								<MenuItem
									key={i}
									title={title}
									subtitle={item}
									activeMenu={activeMenu}
									setActiveMenu={setActiveMenu}
									setCenterPanelName={setCenterPanelName}
									setRightPanelName={setRightPanelName}
									rightPanelName={rightPanelName}
									setPanelIsVisible={setPanelIsVisible}
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

