import React from 'react';
import {NavLink} from "react-router-dom";

class Signin extends React.Component{

constructor(props){
  super(props);
  this.state={
    signinemail:'',
    signinpass:''
  }
}

onemailchange =(event)=>{
  this.setState({signinemail:event.target.value})
}
onpasschange =(event)=>{
 this.setState({signinpass:event.target.value})
}
onsubmitsignin =(event)=>{
  fetch('http://localhost:3010/signin',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      email:this.state.signinemail,
      password:this.state.signinpass
    })
  })
  .then(response=>response.json())
  .then(data=>{
     if (data==='error'){
      console.log("error");
      event.persist();
    }
  })
 }

render(){
    return (
      <div >
       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center color">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input

                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="abc@example.com"
                  onChange={this.onemailchange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                
                <input
                  className=" pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={this.onpasschange}
                />
              </div>
            </fieldset>
            <div className="center">
             
              <NavLink 
              style={{ textDecoration: 'none' }}
               onClick={this.onsubmitsignin}
               to="/Main"
               activeStyle={{
                    background:'red',
                    color:'white'
                    }}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              > Sign in</NavLink>
            </div>
            <div className="lh-copy mt3 pointer center">
             <NavLink to="/Register"  className="f6 link dim black db"> REGISTER </NavLink>
            
            </div>
          </div>
        </main>
      </article>
      </div>
  );

}

}

export default Signin;