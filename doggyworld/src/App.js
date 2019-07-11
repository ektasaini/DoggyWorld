import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Main from './Components/Main/Main';
import tachyons from 'tachyons';
import Food from './Components/Food/Food';
import Toys from './Components/Toys/Toys';
import Slideshow from './Components/Slideshow/Slideshow'
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    
    return (
       
       <BrowserRouter>
        <div>
        <Route path="/Main" component={Navbar} />
        <Route path="/Main" component={Main} exact/>
        <Route path="/Main" component={Slideshow} exact />
        <Route path="/Main/Cart"  component={Cart}/>
         <Route path="/Main/Food"  component={Food}/>
          <Route path="/Main/Toys"  component={Toys}/>
        <Route path="" component={Navigation} exact/>
        <Route path="/Signin" component={Signin}  />
        <Route path="/Register" component={Register} />
        

        </div>
       </BrowserRouter>
      );
  }
}

export default App;
