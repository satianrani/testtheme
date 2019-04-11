import React, { Component } from 'react'

export default class Sitemap extends Component {
  render() {
    return (
        <div className="sitemap">
        <div className="row">
          <div className="col-md-4">
                <div className="site0head sitehead">DEAL'TJE</div>
                <p className="site0detail">Founded in Eindhoven in 2018, Deal'tje was created as an answer 
                to the luxury trend if over-abundant brandant branding and excessive priceing.
                Our designs do not confine ti fashion - we simply aspire ti provide
                high quality, well-designed essentials for the right price. We work
                with a minimalistic philosophy, as we believe sustainabilty and 
                durability are better for us and our world.
                </p>
            </div>
            <div className="col-md-2">
                <div className="site1head sitehead">Men</div>
                <ul className="sitemapmenu">
                    <li><a href="#">Basics</a></li>
                    <li><a href="#">Accessories</a>
                        <ul>
                            <li><a href="#">- Watches</a></li>
                            <li><a href="#">- Sunglasses</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Swimwear</a></li>
                    <li><a href="#">Shorts</a></li>
                    <li><a href="#">Shirts</a></li>
                </ul>
            </div>
            <div className="col-md-2">
            <div className="site1head sitehead">Women</div>
                <ul className="sitemapmenu">
                        <li><a href="#">Basics</a></li>
                        <li><a href="#">Accessories</a>
                            <ul>
                                <li><a href="#">- Watches</a></li>
                                <li><a href="#">- Sunglasses</a></li>
                                <li><a href="#">- Jewelry</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Swimwear</a></li>
                        <li><a href="#">Shorts</a></li>
                        <li><a href="#">Shirts</a></li>
                    </ul>
            </div>
            <div className="col-md-2">
            <div className="site1head sitehead">Deal'tje</div>
            <ul className="sitemapmenu">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Privacy policy</a>
                        </li>
                        <li><a href="#">Team &#38; conditions</a></li>
                        <li><a href="#">Shorts</a></li>
                        <li><a href="#">Shirts</a></li>
                    </ul>
            </div>
            <div className="col-md-2">
                <div className="site1head sitehead">Follow us</div>
                <ul className="sitemapmenu">
                    <li><a href="#"><ion-icon name="logo-instagram"></ion-icon>&nbsp;Instagram</a></li>
                    <li><a href="#"><ion-icon name="logo-facebook"></ion-icon>&nbsp;Facebook</a>
                    </li>
                    <li><a href="#"><ion-icon name="logo-youtube"></ion-icon>&nbsp;Youtube</a></li>
                    <li><a href="#"><ion-icon name="logo-twitter"></ion-icon>&nbsp;Twitter</a></li>
                    <li><a href="#"><ion-icon name="logo-pinterest"></ion-icon>&nbsp;Pinterest</a></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
