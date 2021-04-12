import './Header.css';


function Header() {
  return (
    <div className="header-inner">
        <img className="logo" href='%PUBLIC_URL%/media/NODevV4.png' alt='NODEV logo' />
        <div className="header-titles" >
            <p>Nicolas Olivares</p>
            <p>Full Stack Developer</p>
        </div>
    </div>
  );
}

export default Header;
