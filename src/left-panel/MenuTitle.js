// import './MenuTitle.css';
import {Children, useState} from 'react';
import { Accordion, Icon, Menu, Input, Label } from 'semantic-ui-react';
import MenuItem from './MenuItem'


function MenuTitle({key: itemIndex, title, children, activeIndex, setActiveIndex }) {

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index;
    
        setActiveIndex(newIndex);
        
      }
   

  return (
    <div>
        <Accordion.Title
            value={title}
            active={activeIndex === itemIndex}
            index={itemIndex}
            onClick={handleClick} >
            {title}
            {children.length > 0 ? 
                <Icon name='dropdown' />
            : ''}
            
        </Accordion.Title>
        {children.length > 0 ? 
        <Accordion.Content>
            <Menu vertical>
                {children.map((item, index) => <MenuItem key={index} title={item} /> )}
            </Menu>
        </Accordion.Content>
        : '' }
    </div>
  );
}

export default MenuTitle;
