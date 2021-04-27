import './LeftMenu.css';
import { useState } from 'react';
import { Accordion } from 'semantic-ui-react';
import MenuTitle from './MenuTitle';

function LeftMenu({ setCenterPanelName, setRightPanelName, rightPanelName }) {
	const [activeIndex, setActiveIndex] = useState('1');
	// const [activeItem, setActiveItem] = useState('');

	// const handleItemClick = (e, { name }) => setActiveItem(name);

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
				/>
				<MenuTitle
					key='3'
					index='3'
					title='Professional Experience'
					children={['Programming', 'Educating', 'Finance', 'Military' ]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
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
				/>
        <MenuTitle
					key='6'
					index='6'
					title='Personal Life'
					children={['Biography', 'Family', 'Interests' ]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
				/>
        <MenuTitle
					key='7'
					index='7'
					title='Personal References'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
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
				/>
        <MenuTitle
					key='9'
					index='9'
					title='Contact Information'
					children={[]}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					setCenterPanelName={setCenterPanelName}
					setRightPanelName={setRightPanelName}
					rightPanelName={rightPanelName}
				/>

			</Accordion>
		</div>
	);
}

export default LeftMenu;
