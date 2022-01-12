import react from 'react';

function label01(){
    document.getElementById('l1').style.cssText="top: 15px;font-size: 0.6rem;";
}function label02(){
    document.getElementById('l2').style.cssText="top: 15px;font-size: 0.6rem;";
}function label1(){
	var a=document.getElementById("e").value;
	if(a.length){
    	document.getElementById('l1').style.cssText="top: 15px;font-size: 0.6rem;";
	}
	else{
		document.getElementById('l1').style.cssText="top: 26px;font-size: 1rem;";
	}
}function label2(){
var a=document.getElementById("pass").value;
	if(a.length){
    	document.getElementById('l2').style.cssText="top: 15px;font-size: 0.6rem;";
	}
	else{
		document.getElementById('l2').style.cssText="top: 26px;font-size: 1rem;";
	}
}

const GetS = () => {
    return(
        <form autoComplete='off'>
            <input autoComplete="off" id="e" className="login__group__input_" type="Email" required="true" title="Email Address" />
            <button className="btn btn-xl" type="submit" >Get Started<i className="fas fa-chevron-right btn-icon" /></button>
            <br />
        </form>
    )
};

const Signin = () => {
    return(
        <form autoComplete='off'>
        <div className="login">
          <h1 className="login__title">Sign In</h1>
          <div className="login__group"><input autoComplete="off" id="e" title="Email Address" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" onclick= { label01 } onblur={ label1 } className="login__group__input" type="Email" required="true" /><label id="l1" className="login__group__label">Email address</label></div>
          <div className="login__group"><input autoComplete="off" id="pass" title="Should contain atleast 1 Uppercaseletter, 1 Special Character and a minimum length of 8 characters." pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$" className="login__group__input" onclick= { label02 } onblur={ label2 } type="password" required="true" /><label id="l2" className="login__group__label">Password</label></div><button className="login__sign-in" type="submit" href>Sign In</button>
          <div className="login__secondary-cta"><a className="login__secondary-cta__text" href="#" onmouseout="this.style.textDecoration = 'none'" onmouseover="this.style.textDecoration = 'underline'" style={{color: '#1a9fb0'}}>Forgot Email or password?</a></div>
        </div>
      </form>
    )
};

const Signup = () => {
    return(
        <form autoComplete='off'>
          <h1 className="login__title">Sign Up</h1>
          <span id="errorE" style={{color: '#e50914', paddingBottom: '10px'}} />
          <div className="login__group"><input autoComplete="off" title="Email Address" id="e" onclick="label01()" onblur="label1()" className="login__group__input" type="Email" required="true" /><label id="l1" className="login__group__label">Email address</label>
          </div>
          <div className="login__group"><input title="Should contain atleast 1 Uppercaseletter, 1 Special Character and a minimum length of 8 characters." id="pass" onclick="label02()" onblur="label2()" className="login__group__input" type="password" required="true" /><label id="l2" className="login__group__label">Password</label></div><div className="login__group"><input title="Match the password entered above." id="cpass" onclick="label03()" onblur="label3()" className="login__group__input" type="password" required="true" /><label id="l3" className="login__group__label">Confirm Password</label></div>
          <span id="errorP" style={{color: '#e50914'}} /><br /><span id="error" style={{paddingBottom: '10px'}} /><button className="login__sign-up" onclick="check()" type="submit">Continue</button>
          <div className="login__secondary-cta"><input defaultValue={1} type="checkbox" name="q" /><label htmlFor="q" style={{marginLeft: '5px'}} className="login__secondary-cta__text" href="#"> Remember me</label></div>
        </form>
    )
};

export { GetS, Signin, Signup };