import './Footer.css';
import { Icon } from 'semantic-ui-react'


//Implements the three icons at the foot of the left menu. Github, email, and linkedIn
export default function Footer() {
  return (
    <div className="footer-inner">
        <a href='https://github.com/nico-olivares' target='_blank'>
          <Icon name="github" size='big' color='black' />
        </a>
        <a href='mailto:nolivaresr@hotmail.com'>
          <Icon name='envelope' size='big' color='black' />
        </a>
        <a href='https://www.linkedin.com/in/nicolas-olivares-developer/' target="_blank">
          <Icon name='linkedin' size='big' color='blue' />
        </a>
    </div>
  );
}


