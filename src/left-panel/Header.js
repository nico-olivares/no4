import './Header.css';


function Header() {
  return (
    <div className="header-inner">
        <img className="logo" src='./media/NODevV4.png' alt='NODEV logo' />
        <div className="header-titles" >
            <p className="header-name" >Nicolas Olivares</p>
            <p className="header-title" >Full Stack Developer</p>
        </div>
    </div>
  );
}

export default Header;
