import React from 'react';
import {Facebook} from './images/facebook.png';
import {Twitter} from './images/twitter.png';
import {LinkedIn} from './images/LinkedIn.png';
import {Find} from './Find.js'

export class Home extends React.Component {
	render(){
		return (
			<div>
        <nav class="navbar navbar-expand-lg navbar-black bg-black">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#untitled.html">BrewBuddy</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="virtualtaproom.html">Virtual Taproom</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Find Breweries</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contactform.html">Contact</a>
      </li>
    </ul>
 
      <aside>
    <a href="http://facebook.com" target="_blank"><img src={Facebook}></img></a>
  <a href="http://twitter.com" target="_blank"><img src={Twitter}></img></a>
  <a href="http://linkedin.com" target="_blank"><img src={LinkedIn}></img></a>
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


