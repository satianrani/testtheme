import React, { Component } from 'react'

export default class Product extends Component {
  render() {
      const { image, index, name, cost, realcost, brand } = this.props.data;
    return (
        <div className="product">
        <div id={'carouselproduct'+  index}  className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            {
                image.map((x, i) =><li key={"li"+i} data-target={'#carouselproduct'+  index}  data-slide-to={i} className={i === 0? 'active': ''}></li>)
            }
            
           
            </ol>
            <div className="carousel-inner">
            {
                image.map((x, i) =>
                <div key={"image"+i} className={i === 0? 'carousel-item active': 'carousel-item'}>
                <img src={x} className="d-block w-100" alt="..."/>
                </div>)
                 
            }
                 
            </div>
        </div>
        <div className="product-details">
            <div className="product-brand">{brand}</div>
            <div className="product-name">{name}</div>
            <div className="product-cost"><span className="cost">{cost}</span> &nbsp; 
            {realcost===''?null:<span className="realcost">{realcost}</span>}
           
            </div>
        </div>
      </div>
    )
  }
}
