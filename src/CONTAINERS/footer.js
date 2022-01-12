import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";
import logo from "../images/logo.png";
import "./style.css";
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
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Marketing</Footer.Link>
            <Footer.Link href="#">Consulting</Footer.Link>
            <Footer.Link href="#">Development</Footer.Link>
            <Footer.Link href="#">Design</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">United States</Footer.Link>
            <Footer.Link href="#">United Kingdom</Footer.Link>
            <Footer.Link href="#">Australia</Footer.Link>
            <Footer.Link href="#">Support</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
