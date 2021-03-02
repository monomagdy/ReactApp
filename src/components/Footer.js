import React, { Component } from 'react';
 
class Footer extends Component {
  render() {
    return (
      <footer class="footer mt-5">
      <div class="container d-block d-lg-flex justify-content-between p-3 pt-5 text-center upper-footer">
      <a class="home-url" href="javascript:void(0)"><img srcSet="/img/header.png" class="width-95 m-2" alt="logo"/></a>
      <ul class="m-0 social-media">
          <li><a href="javascript:void(0)"><em class="fab fa-facebook-f"></em></a></li>
          <li><a href="javascript:void(0)"><em class="fab fa-instagram"></em></a></li>
          <li><a href="javascript:void(0)"><em class="fab fa-linkedin-in"></em></a></li>
         <li><a href="javascript:void(0)"> <em class="fab fa-twitter"></em></a></li>
      </ul>
    </div>
    <div class="clearfix"></div>
    <hr class="hide-sm"/>
  
      <div class="lower-footer p-2 d-block d-lg-flex justify-content-between text-center container">
       <ul class="footer-links p-0">
          <li><a href="javascript:void(0)">SUPPORT</a></li>
          <li><a href="javascript:void(0)">UNDERSTAND</a></li>
          <li><a href="javascript:void(0)">TERMS & REGULATIONS </a></li>
      </ul>
        <div class="margin--10-sm">
          <p class="color-text-light">Inploy 2020. All rights reserved</p>
        </div>
      </div>
    </footer>
    );
  }
}
 
export default Footer