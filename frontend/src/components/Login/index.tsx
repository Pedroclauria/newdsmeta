import logo from '../../assets/img/header.svg';
import './styles.css';
import Header from '../Header'


function Login() {
  const x = 1;
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light border">
            <a className="navbar-brand" href="/"><span className="blue">C</span><span className="red">$</span><span className="yellow">5</span><span className="green">0</span> <span className="red">Finance</span></a>
            <button aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbar" data-toggle="collapse" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto mt-2">
                        <li className="nav-item"><a className="nav-link" href="/register">Register</a></li>
                        <li className="nav-item"><a className="nav-link" href="/login">Log In</a></li>
                    </ul>
            </div>
        </nav>
      <Header />
      <div className="login-title" >LOGIN</div>
      <main>
        
          <form className="form-group" action="/login" method="post">
            <div>
              <input autoComplete='off' autoFocus name="username" placeholder="Username" type="text" />
            </div>
            <div>
              <input  name="password" placeholder="Password" type="password" />
            </div>
            <button className="btn-btn-primary" type="submit">Log In</button>
          </form>
         
      </main>
    </>
  )


}

export default Login;