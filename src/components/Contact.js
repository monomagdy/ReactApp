import React, { Component } from 'react';
 
class Contact extends Component {
  render() {
    return (
      <section class="container d-flex flex-column flex-lg-row justify-content-lg-between mt-5 contact-section">
    <div class="col-12 col-lg-4 mt-5">
         <h5 class="mt-5 font-w-900 font-24">Contact</h5>
         <h5  class="border-after font-w-700 font-24">info@inploy.me</h5>
         <p class="font-14 mt-4">For further assistance with projects or pre registration </p>
         <form>
           <label class="font-w-500 mb-2">How would like us to contact you?</label>
           <div class="from-group">
           <div class="form-check mt-1 mb-2">
            <input class="form-check-input cursor-pointer" type="radio" name="flexRadioDefault" id="callRadio"/>
            <label class="form-check-label font-14" for="callRadio"> Call </label>
           </div>
           <div class="form-check  mb-2">
           <input class="form-check-input cursor-pointer" type="radio" name="flexRadioDefault" id="emailRadio"/>
            <label class="form-check-label font-14" for="emailRadio">Email </label>
             </div>
             <input type="email" class="form-control mb-2" id="emailMe" placeholder="Email"/>
             <button class="bg-red btn pb-2 pl-4 pr-4 pt-2 mt-2 mb-2 font-w-700 font-14 min-w-130">Send</button>

           </div>
         </form>
       </div>   
        <div class="col-12 col-lg-8 mt-5">  
        <img class="contact-img" src="/img/contactBG.png" alt="contact-img" />
        <img class="contact-img-sm" src="/img/contactSM.png" alt="contact-img"/>

        <div class="contact-data">
          <div class="contact-info m-4 font-w-300">
        <span>012-123-12345</span> <span class="hide-sm m-1">|</span> <span>sohaila.kandil@hotmail.com</span> <span class="hide-sm m-1"><em class="fa fa-chevron-left font-14 font-w-100"></em></span>
          </div> 
          <div class="contact-social m-auto">  
         <ul class="m-0 p-0 social-media">
         <li><a  href="javascript:void(0)"><em class="fas fa-globe"></em></a></li>
          <li><a href="javascript:void(0)"><em class="fab fa-facebook-f"></em></a></li>
          <li><a href="javascript:void(0)"> <em class="fab fa-twitter"></em></a></li>
          <li><a href="javascript:void(0)"><em class="fab fa-instagram"></em></a></li>
          <li><a href="javascript:void(0)"><em class="fab fa-linkedin-in"></em></a></li>
          <li><a href="javascript:void(0)"><em class="fab fa-behance"></em></a></li>
          <li><a href="javascript:void(0)"><em class="fab fa-youtube"></em></a></li>
          <li><a href="javascript:void(0)"><em class="fab fa-vimeo-v"></em></a></li>
      </ul>
      </div>  
       </div>
       </div>
    </section>
    );
  }
}
 
export default Contact