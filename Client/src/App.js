import './App.css';
import { GetS, Signin, Signup } from './Forms/Form';
import { _App_, _Signin_, _Signup_ } from './index';
import logo from './logo.png';


function App() {
  return (
    <header className="wrapper" id="head1">
      <div>
        <div className="wrapper-top">
          <img id='a1' src= { logo } alt="Proximus" />
          <p id="p2">A member Already?</p>
          <button onClick={ _Signin_ } className="btn btn-rounded">Sign In</button>
        </div>
        <div className="wrapper-content">
          <h1>Stream Movies, TV shows and more.</h1>
          <p>Enter your Email below to get<br />started</p>
          <div>
            <GetS />
          </div>
        </div>
      </div>
    </header>
  );
}

function App_Signin() {
  return (
    <header className="wrapper" id="head1">
      <div>
        <div className="wrapper-top">
          <a href='Signin' onClick={ _App_ } id="a1"><img src= { logo } alt="Proximus" /></a>
          <p id="p1">Not a member?</p>
          <button onClick={ _Signup_ } className="btn btn-rounded">Sign Up</button>
        </div>
        <div>
          <Signin />
        </div>
      </div>
    </header>
  );
}
      


function App_Signup(){
  return (
    <header className="wrapper">
        <div className="wrapper-top">
          <a href="Signup" onClick={ _App_ } id="a1"><img src={ logo } alt="Proximus" /></a>
          <p id="ap">Have an Account Already?</p>
          <button onClick={ _Signin_ } className="btn btn-rounded">Sign In</button>
        </div>
        <hr />
        <div className="login">
          <Signup />
        </div>
      </header>
  );
}


export { App, App_Signin, App_Signup };
