import React from 'react';
import './Resume.css';
import { Embed } from 'semantic-ui-react';

export default function Resume() {


    return (
        <Embed
        active={true}
        aspectRation='4:8'
    icon='right circle arrow'
    iframe={{
        style: {
            width: '100%',
            height: '100%',
        },
    }}
    placeholder='./docs/Olivares.Nicolas.Resume.pdf'
    url='./docs/Olivares.Nicolas.Resume.pdf'
  />
    )

}