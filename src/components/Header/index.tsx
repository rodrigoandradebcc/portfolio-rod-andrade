import './styles.scss';

function Header() {
  return (
    <header className="menu">
      <div className="menu-left">
        <a href="" className="link">Home</a>
        <a href="" className="link">About</a>
      </div>
      <div className="menu-logo">
        <h5>Rod .</h5>
        
      </div>
      <div className="menu-right">
        <a href="" className="link">Works</a>
        <a href="" className="link">Get in touch</a>
      </div>
    </header>
  );
}

export default Header;
