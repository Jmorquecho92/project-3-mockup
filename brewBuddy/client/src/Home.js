import React from 'react';
import {Taproom} from './VirtualTaproom.js';
//import {LinkedIn} from './images/LinkedIn.png';
import {Image} from 'react-bootstrap';
import {Thumbnail} from 'react-bootstrap';
import {Find} from './Find.js';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export class Home extends React.Component {
	render(){
		return (
			<div>
        <nav class="navbar navbar-expand-lg navbar-black bg-black">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="">BrewBuddy</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Taproom">Virtual Taproom</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Find">Find Breweries</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Contact</a>
      </li>
    </ul>
 
      <aside>
    <a href="http://facebook.com"><img height={50} width={50} src="images/facebook.png"></img></a>
  <a href="http://twitter.com" target="_blank"><img height={50} width={50} src={require('./twitter.svg')}></img></a>
  <a href="http://linkedin.com" target="_blank"><img height={50} width={50} src="images/linkedin.png"></img></a>
    </aside>
  </div>
</nav>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="http://www.hbd.org/wp-content/uploads/2017/04/Brewery.jpg" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://d19fbfhz0hcvd2.cloudfront.net/UP/wp-content/uploads/2012/01/Beer-Bottle-Labels-00.jpg" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://assets3.thrillist.com/v1/image/1489122/size/tmg-article_default_mobile.jpg" alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      </div>
			);
	}
}
// export class Home extends React.Component {
//   render(){
//     return (
//       <Navbar inverse collapseOnSelect>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <a text-align="left" href="#brand">Brew Buddy</a>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     <Nav>
//       <NavItem eventKey={1} href="#">
//         Home
//       </NavItem>
//       </Nav>
//       <Nav>
//       <NavItem eventKey={2} href="#">
//         Virtual Taproom
//       </NavItem>
//       </Nav>
//       <Nav>
//       <NavItem eventKey={3} href="#">
//         Find Breweries
//       </NavItem>
//       </Nav>
//       <Nav>
//       <NavItem eventKey={4} href="#">
//         Contact
//       </NavItem>
//     </Nav>
//     <Nav pullRight>
//       <NavItem eventKey={1} href="http://facebook.com">
//         Facebook
//       </NavItem>
//       </Nav>
//     <Nav pullRight>
//       <NavItem eventKey={2} href="http://twitter.com">
//        <Thumbnail src={require('./twitter.svg')}>
//        <button></button>
//       </Thumbnail>
//       </NavItem> 
//     </Nav>
//     <Nav pullRight>
//       <NavItem eventKey={3} href="http://linkedin.com">
//         LinkedIn
//       </NavItem> 
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//       );

//   }
// }

