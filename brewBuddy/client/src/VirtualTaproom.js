import React from 'react';

export class Taproom extends React.Component {
	render(){
		return (
			<div>
        <nav className="navbar navbar-expand-lg navbar-black bg-black">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="untitled.html">BrewBuddy</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="untitled.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="virtualtaproom.html">Virtual Taproom</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Find Breweries</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contactform.html">Contact</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            --&gt;
            {/* <aside>
               <a href="http://facebook.com" target="_blank"><img src="images/facebook.png"></a>
               <a href="http://twitter.com" target="_blank"><img src="images/twitter.png"></a>
               <a href="http://linkedin.com" target="_blank"><img src="images/linkedin.png"></a>
               </aside> */}
          </div>
        </nav>
        <div id="brewButtons1">
          <img src="taproom.png" id="taproomPhoto" />
        </div>
        <nav className="navbar navbar-expand-lg navbar-black bg-black">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
        <div id="brewButtons1">
          <img src="taproom.png" id="taproomPhoto" />
        </div>
        <div id="brewButtons1">
          <img src="taproom.png" id="taproomPhoto" />
        </div>
        <div className="col-lg-3">
        </div>
        <div className="col-lg-3">
          <form id="brew-form">
            <label htmlFor="newBrewInput">Add your FAVORITE Type of Brew</label>
            <input type="text" id="newBrewInput" />
            <br />
            <input id="addBrew" type="submit" defaultValue="Submit" />
          </form>
          <div id="brewButtons2" />
        </div>
        <div className="display" />
        {/*jQuery */}
        <div className="display" />
      </div>
			);
	}
}
