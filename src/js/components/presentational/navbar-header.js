import React, { Component } from 'react'

export default class NavBarHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className=" col-xl-2">
         <a className="navbar-brand" href="#"><ion-icon name="menu"></ion-icon>  Menu</a>
         </div>
           <div className="titleweb col-xl-6 text-center"><a href="">DEAL'TJE</a></div>
          <div className="col-xl-4 text-right">
            <a className="menu-ight" href="#">Search&nbsp;<ion-icon name="search"></ion-icon></a>
            <a className="menu-ight" href="#">SIGN IN&nbsp;<ion-icon name="person"></ion-icon></a>
            <a className="menu-ight" href="#">BAG&nbsp;<ion-icon name="basket"></ion-icon></a>
          </div>
      </nav>
    )
  }
}
