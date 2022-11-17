import logo from '../../assets/img/header.svg';
import './styles.css';



function Header() {
  return (
    <>
      <header>
        <head>
          <div className="dsmeta-login">
            <nav>
              ...
            </nav>
          </div>
        </head>
        <main>
          <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/pedroclauria.com">@pedroclauria.com</a>
            </p>
          </div>
        </main>
      </header>

    </>
  )


}

export default Header;