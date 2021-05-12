import './LeftMenu.css';
import { useState } from 'react';
import { Accordion } from 'semantic-ui-react';
import MenuTitle from './MenuTitle';

//implements the left menu. The menu is a list of all the possible options
export default function LeftMenu({ setCenterPanelName, setRightPanelName, rightPanelName, setPanelIsVisible }) {
	const [ activeIndex, setActiveIndex ] = useState('1');
	

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
				/>
				<MenuTitle
					key='2'
					index='2'
					title='Portfolio'
					children={[
						'Doomsday Preppers',
						'webkey',
						'Hermes News',
						'Harvard Art',
						'Arcade Central',
						'Calculator',
						'Retro Draw',
						'Matrix Rain',
						'Number Sense',
						'Add and Subtract',
						'Basic Math',
						'Sight Words Center',
					]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
				/>
				<MenuTitle
					key='3'
					index='3'
					title='Experience'
					children={['Programming', 'Educating', 'Finance', 'Military' ]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
				/>
        <MenuTitle
					key='4'
					index='4'
					title='Education'
					children={['Full Stack Developer', 'Education', 'Business Administration', "Naval Officer's Academy" ]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
				/>
        <MenuTitle
					key='5'
					index='5'
					title='Skills'
					children={['Hard Skills', 'Soft Skills' ]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
				/>
        <MenuTitle
					key='6'
					index='6'
					title='Life'
					children={['Biography', 'Family', 'Interests' ]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
				/>
        <MenuTitle
					key='7'
					index='7'
					title='References'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
				/>
        <MenuTitle
					key='8'
					index='8'
					title='Resume'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
				/>
        <MenuTitle
					key='9'
					index='9'
					title='Contact'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
					setPanelIsVisible={setPanelIsVisible}
				/>

			</Accordion>
		</div>
	);
}

