// import './MenuTitle.css';
import {Children, useState} from 'react';
import { Accordion, Icon, Menu, Input, Label } from 'semantic-ui-react';
import MenuItem from './MenuItem'


function MenuTitle({index, title, children, activeIndex, setActiveIndex }) {

    const handleClick = (event) => {
        // const { index } = titleProps
        // const index = event.target.index;
        
        // console.log('the index', event.target.index);
        const newIndex = activeIndex === index ? -1 : index;
    
        setActiveIndex(newIndex);
        
      }
   

  return (
    <div>
        <Accordion.Title
            value={title}
            active={activeIndex === index}
            index={index}
            onClick={(event) => handleClick(event)} >
            {title}
            {children.length > 0 ? 
                <Icon name='dropdown' />
            : ''}
            
        </Accordion.Title>
        {children.length > 0 ? 
        <Accordion.Content>
            <Menu vertical>
                {children.map((item, index) => {
                return <MenuItem key={index} title={item} /> 
                })}
            </Menu>
        </Accordion.Content>
        : '' }
    </div>
  );
}

export default MenuTitle;
