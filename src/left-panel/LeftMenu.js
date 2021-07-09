import './LeftMenu.css';
import React from 'react';
import { Accordion } from 'semantic-ui-react';
import MenuTitle from './MenuTitle';
import getPortfolioItem from '../data/portfolioItems';
import getExperienceItem from '../data/experienceItems';

import getLifeItem from '../data/lifeItems';


//implements the left menu. The menu is a list of all the possible options
export default function LeftMenu({ setCenterPanelName, setRightPanelName, rightPanelName, setPanelIsVisible, activeIndex, setActiveIndex, setExpandedMenu, isPhone }) {
	
	

	return (
		<div className='menu-inner' >
			<Accordion >
				<MenuTitle
					key='1'
					index='1'
					title='Welcome'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
					setExpandedMenu={setExpandedMenu}
					isPhone={isPhone}
				/>
				<MenuTitle
					key='2'
					index='2'
					title='About'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
					setExpandedMenu={setExpandedMenu}
					isPhone={isPhone}
				/>
				<MenuTitle
					key='3'
					index='3'
					title='Portfolio'
					children={getPortfolioItem('all items')}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
					setExpandedMenu={setExpandedMenu}
					isPhone={isPhone}
				/>
				<MenuTitle
					key='4'
					index='4'
					title='Experience'
					children={getExperienceItem('all items')}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
					setExpandedMenu={setExpandedMenu}
					isPhone={isPhone}
				/>
        <MenuTitle
					key='5'
					index='5'
					title='Education'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
					setExpandedMenu={setExpandedMenu}
					isPhone={isPhone}
				/>
        <MenuTitle
					key='6'
					index='6'
					title='Skills'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
					setExpandedMenu={setExpandedMenu}
					isPhone={isPhone}
				/>
        <MenuTitle
					key='7'
					index='7'
					title='Life'
					children={getLifeItem('all items')}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
					setExpandedMenu={setExpandedMenu}
					isPhone={isPhone}
				/>
        <MenuTitle
					key='8'
					index='8'
					title='References'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
					setExpandedMenu={setExpandedMenu}
					isPhone={isPhone}
				/>
        <MenuTitle
					key='9'
					index='9'
					title='Resume'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
					setExpandedMenu={setExpandedMenu}
					isPhone={isPhone}
				/>

			</Accordion>
		</div>
	);
}

