import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
// import Levels from './components/Levels'
// import Main from './components/Main'
import Quadratic from './components/Quadratic';
import Home from './components/Home';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	navSlide = () => {
	  const burger = document.querySelector('.burger');
	  const nav = document.querySelector('.nav-links');
	  const navLinks = document.querySelectorAll('.nav-links li');
  
	  // burger.addEventListener('click', () => {
		  // Toggle Nav
		  nav.classList.toggle('nav-active');
		//   console.log(111) // WORKS!
  
			  // Animate Links
		  navLinks.forEach((link, index) => {
			  if (link.style.animation) {
				  link.style.animation = ''
			  } else {
				  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
			  }
			  // console.log(index / 5 + 1);
		  })
  
		  // Burger Animation
		  burger.classList.toggle('toggle')
	  // });
	}


  
	render() {
	  // navSlide()
	  return (
  
		<BrowserRouter>
		  <div>
		  
			<nav>
			  <div className="logo">
				Equations solver
			  </div>
			<ul className="nav-links">
			<li>
				<NavLink to='/' activeClassName='active'>
				  Домашня
				  {/* <img id="logo" src={logo}></img> */}
				</NavLink>
			  </li>
			  {/* <li>
				<NavLink to='/about' activeClassName='active'>
				  Про нас
				</NavLink>
			  </li> */}
			  <li>
				<NavLink to='/quadratic' activeClassName='active'>
				  Quadratic
				</NavLink>
			  </li>
			  <li>
				<NavLink to='/quadratic' activeClassName='active'>
				  Контакти
				</NavLink>
			  </li>
			</ul>
			<div className="burger" onClick={this.navSlide}>
			  <div className="line1"></div>
			  <div className="line2"></div>
			  <div className="line3"></div>
		  </div>
  
  
			{/* <Route path='/basic-routing' component={Levels} /> */}
		  
			</nav>
			<Route exact path='/' component={Home} />
			{/* <Route path='/about' component={Main} /> */}
			<Route path='/quadratic' component={Quadratic} />
			{/* <Route path='/contacts' component={Contacts} /> */}
  
  
  
  
			{/* <footer>
			  <p>
				ТОВ "ЛОХ сервіс" &copy; 2020
			  </p>
			</footer> */}
			</div>
		
		</BrowserRouter>
  
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	  );
	}
  }
  
  export default App;


