import React from 'react';
import Footer from '../components/footer';
import Icon from '../components/icons';
import logo from '../images/logo.png';
import './style.css';
export function FooterContainerBlack() {
  return (
    <Footer>
      <Footer.Wrapper>
        {/* <div class="container">
          <div class="footer">
            <img src={logo} alt="Logo"></img>
            <br></br>
            <label for="email">
              Subscribe to keep up with the <br /> latest news
            </label>
            <br></br>
            <br></br>
            <input
              type="email"
              id="email"
              placeholder="enter your email..."
            ></input>
            &nbsp;&nbsp;
            <button type=""></button>
            <p>
              by submitting this form, you acknowledge that you have the <br />{" "}
              terms of our Privacy Statement
            </p>
            <p class="pr1">Copyright @ Foodhub 2022</p>
          </div>
        </div> */}
        <Footer.Row>
          {/* <div class="container">
        <div class="footer">
            <img src="./kaltag.png"> <br>
            <label for="email">Subscribe to keep up with the <br/> latest news</label> <br/><br/>
            <input type="email"  id="email" placeholder="enter your email..."> &nbsp;&nbsp;
            <button>{$`&#8594`}</button>  
            <p>by submitting this form, you acknowledge that you have the <br/> terms of our Privacy Statement</p>  
            <p class="pr1">Copyright @ Foodhub 2022</p>  
        </div>
    </div> */}

          <div className="mt-10">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <h1 className="pt-10 font-bold text-xl   text-white">
                @ Copyright Kalways
              </h1>
            </div>
          </div>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="/Shipfreight">Story</Footer.Link>
            <Footer.Link href="/Shipfreight">Clients</Footer.Link>
            <Footer.Link href="/Shipfreight">Testimonials</Footer.Link>
            <Footer.Link href="/Shipfreight">Story</Footer.Link>
            <Footer.Link href="/Shipfreight">Clients</Footer.Link>
            <Footer.Link href="/Shipfreight">Work at KalWay</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>

            <Footer.Link href="/Shipfreight">Ship Freight</Footer.Link>
            <Footer.Link href="/Shipfreight">Full Truckload</Footer.Link>
            <Footer.Link href="/Shipfreight">Less Than Truckload</Footer.Link>
            <Footer.Link href="/Shipfreight">Intermodal Freight</Footer.Link>
            <Footer.Link href="/Shipfreight">Air & Ocean</Footer.Link>
            <Footer.Link href="/Shipfreight">Cross-Border Freight</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>INDUSTRIES</Footer.Title>
            <Footer.Link href="/Shipfreight">Automotive Logistics</Footer.Link>
            <Footer.Link href="/Shipfreight">CPG Logistics</Footer.Link>
            <Footer.Link href="/Shipfreight">
              Food & Beverage Logistics
            </Footer.Link>
            <Footer.Link href="/Shipfreight">Healthcare Logistics</Footer.Link>
            <Footer.Link href="/Shipfreight">
              Manufacturing Logistics
            </Footer.Link>
            <Footer.Link href="/Shipfreight">Retail Logistics</Footer.Link>
          </Footer.Column>
          {/* <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="/Shipfreight">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="/Shipfreight">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="/Shipfreight">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="/Shipfreight">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column> */}
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
