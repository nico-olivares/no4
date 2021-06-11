import './Header.css';


//implements the header at the left menu. The header has my logo and name.
export default function Header({setCenterPanelName, setRightPanelName, centerPanelName, rightPanelName, setPanelIsVisible, setActiveIndex}) {

  const handleClick = (event) => {
				
		setActiveIndex('1');
		if (!(centerPanelName.title === 'splash' && rightPanelName.title === 'Welcome')) {
			setPanelIsVisible(false);
			setTimeout(setPanels, 0);
		}
	};

	const setPanels = () => {
			setCenterPanelName({title: 'splash', subtitle: ''});
			setRightPanelName({title: 'Welcome', subtitle: ''});
			setPanelIsVisible(true);
	}

  return (
    <button className="header-inner" onClick={handleClick} >
        <img className="logo" src='./media/NODevV4.png' alt='NODEV logo' />
        <div className="header-titles" >
            <p className="header-name" >Nicolas Olivares</p>
            <p className="header-title" >Full Stack Developer</p>
        </div>
    </button>
  );
}


