import React, { Component } from 'react';
import Product from './product';

export default class Products extends Component {
    constructor() {
        super();
            this.state = {
                products: [
                    {
                        image: [require("../../../asset/41kkwI5q8cL.jpg"), require("../../../asset/41kkwI5q8cL.jpg")],
                        name: "WHITE CARAMEL",
                        brand: "Chrono - 45mm",
                        cost: "135,000",
                        realcost : "",
                        index: 0

                    },
                    {
                        image: [require("../../../asset/s-l640.jpg"), require("../../../asset/s-l640.jpg")],
                        name: "BRONZE AGE",
                        brand: "Classic - 45mm",
                        cost: "85.00",
                        realcost : "",
                        index: 1
                    },
                    {
                        image: [require("../../../asset/images.jpg"), require("../../../asset/images.jpg")],
                        name: "BRIMM",
                        brand: "Gunslinger - 40mm",
                        cost: "155.00",
                        realcost : "",
                        index: 2

                    },
                    {
                        image: [require("../../../asset/chrono.jpg"), require("../../../asset/chrono.jpg")],
                        name: "BLACK ROSE",
                        brand: "Chrono - 45mm",
                        cost: "120.00",
                        realcost : "150,00",
                        index: 3

                    }
                ]
            };
    }
  render() {
    return (
        <div className="products">
       { this.state.products.map( (x, i) =>  
        (<Product key={'product'+ i} data={x}/>) 
        )}
            
        </div>
    )
  }
}
