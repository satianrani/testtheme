import React, { Component } from "react";
import error from '../../../asset/500error.jpg';
import NavBarHeader from "./navbar-header";
class CarouselHeader extends Component {
  
  constructor() {
    super();
    this.state = {
      data: [error, error, error]
    }
  }
 
  render() {
   
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <NavBarHeader/>
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
        {this.state.data.map((x, i) => 
            <div key={"cu"+i} className={i===0?'carousel-item active':'carousel-item'}>
            <img src={x} className="d-block w-100" alt="..."/>
            <div className="carousel-detail">
              <div className="f0">MEN&#39;S WATCHES</div>
              <div className="f1">MVNT P.1579</div>
              <div className="f2">REFINED</div>
              <div className="f3">359</div>
              <div className="f4"><button type="button" className="btn btn-danger">View details</button></div>
            </div>
          </div>
          )}
       
     
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"><ion-icon name="arrow-round-back"></ion-icon></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"><ion-icon name="arrow-round-forward"></ion-icon></span>
          <span className="sr-only">Next</span>
        </a>
      </div>);
  }
}
export default CarouselHeader;