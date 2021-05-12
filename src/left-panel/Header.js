import './Header.css';


//implements the header at the left menu. The header has my logo and name.
export default function Header() {
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


