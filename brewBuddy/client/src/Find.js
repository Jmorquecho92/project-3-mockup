import React from 'react';

export class Find extends React.Component {
	render(){
		return (
			<div>
        <nav class="navbar navbar-expand-lg navbar-black bg-black">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="untitled.html">BrewBuddy</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
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
    <a href="http://facebook.com" target="_blank"><img height={50} width={50} src="images/facebook.png"></img></a>
  <a href="http://twitter.com" target="_blank"><img height={50} width={50} src="images/twitter.png"></img></a>
  <a href="http://linkedin.com" target="_blank"><img height={50} width={50} src="images/linkedin.png"></img></a>
    </aside>
  </div>
</nav>
  
  <div section id="main-content">
    <div class="container-fluid">
      <div class="row">
        <div id="map"></div>
        <div id="brewery-content">
          <div id="find-breweries">
            <h1>Let's find some breweries near you!</h1>
            <form>
                      <div class="form-group">
                      <input class="form-control" id="zipcode-input" type="text" placeholder="Enter Zipcode"></input>
                      </div>
                        <button class="btn" id="find-breweries-btn" type="submit" value="find breweries">Find Breweries</button>
            </form>
          </div>
          
      </div>
    </div>
  </div>
      </div>
      </div>
      
			);
	}
}


