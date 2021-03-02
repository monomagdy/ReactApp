import React, { Component } from 'react';
import { Button,Dropdown,ButtonGroup } from 'react-bootstrap';

class Register extends Component {
  render() {
    return (
  <section class="container d-flex flex-column flex-lg-row justify-content-lg-between register-section">
<div class="col-lg-6 col-12">
<h4 class="color-main font-w-700 font-15 mb-3 ml-2">2000+ Service Providers on board</h4>
<img class="cards" src="/img/cards.png" alt="cards"/>
</div>
  
  <div class="col-lg-6 col-12 mt-5">
  <h2 class="font-w-900 register">Register Now</h2>
  <form>
        <div class="form-group d-flex justify-content-between">
          <input type="text" class="form-control mr-3" id="fullName" placeholder="Full Name"/>
          <input type="text" class="form-control mr-3" id="jobTitle" placeholder="Job Title"/>
        </div>
        <div class="form-group d-flex justify-content-between">
          <input type="email" class="form-control mr-3" id="email" placeholder="Email"/>
          <input type="text" class="form-control mr-3" id="number" placeholder="Number"/>
        </div>
        <div class="form-group d-flex justify-content-between">
            <Dropdown as={ButtonGroup}>
          <Button className="custom-btn">Category</Button>
        
       <div class="trigger-wrap"> 
       <Dropdown.Toggle split className="trigger-btn" id="dropdown-split-basic" />
       </div>  
        
          <Dropdown.Menu>
            <Dropdown.Item href="javascript:void(0)">Action</Dropdown.Item>
            <Dropdown.Item href="javascript:void(0)">Another action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <div class="form-group d-flex justify-content-between">
        <button class="bg-red btn pb-2 pl-4 pr-4 pt-2 mb-2 font-w-700 font-14 min-w-130">Register Now</button>
        </div>
      </form>
  </div>
  </section>
    );
  }
}
 
export default Register