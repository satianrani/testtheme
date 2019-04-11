import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import CarouselHeader from '../presentational/carousel-header';
import Products from '../presentational/products';
import Sitemap from "../presentational/sitemap";
class App extends Component {
  constructor() {
    super();
  }
 
  render() {
   
    return (
      <>
      <CarouselHeader/>
      <div className="wording">
        <div className="description-title">BEST SELLERS</div>
        <div className="description-detail">
          <p>Our products are guaranteed of the best quality and our costomers</p>
          <p>agree, see what other customers love the most in our hop!</p>
        </div>
      </div>
      <div className="topsell">
        <div className="topsell-left"><span className="text-bold">24 products</span> <span className="text-light">in top sellers</span></div>
        <div className="topsell-right"><span className="text-bold">Sort by </span><span className="text-light">newest first</span></div>
      </div>
      <Products/>
      <Sitemap/>
      <footer className="bg-black-footer">
      <div className="ft0">
      <div className="btn-group">
        <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
        EUR</span>
          <div className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button">Action</button>
          <button className="dropdown-item" type="button">Another action</button>
          <button className="dropdown-item" type="button">Something else here</button>
        </div>
      </div>
      
      </div>
      <div className="ft0">
      <div className="btn-group">
        <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img className="flag" src={require('../../../asset/nur.jpg')}></img>&nbsp;
          NL</span>
          <div className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button">Action</button>
          <button className="dropdown-item" type="button">Another action</button>
          <button className="dropdown-item" type="button">Something else here</button>
        </div>
      </div>
      </div>
      <div className="ft0">
        <span>Copyright @2018 Colengo B.B. -IT Platform builders</span>
      </div>

      </footer>
      </>
       );
  }
}
export default hot(module) (App);