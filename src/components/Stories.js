import React, { Component } from 'react';

class Stories extends Component {
  render() {
    return (
<section>
<div class="container d-flex flex-column flex-lg-row justify-content-lg-center mb-5 mt-5 rectangular">
<div class="card custom-card m-4">
  <div class="card-body">
      <em class="far fa-star color-main font-24 font-weight-light"></em> <span class="font-w-500 mr-3 ml-3">Free Commission</span>
    </div>
    </div>
    <div class="card custom-card m-4">
  <div class="card-body">
      <em class="fas fa-sync color-main font-24 font-weight-light"></em> <span class=" font-w-500 mr-3 ml-3">Free Contact Exchange</span>
    </div>
    </div>
    <div class="card custom-card m-4">
  <div class="card-body">
      <em class="fas fa-layer-group color-main font-24 font-weight-light"></em> <span class="font-w-500 mr-3 ml-3">30+ Services</span>
    </div>
    </div>
  </div>
  <div class="container text-center mb-5">
    <h6 class="color-main font-w-500 font-14 mb-4">Success stories with 400+ Clients</h6>
    <img class="stories" src="/img/stories.png" alt="clients"/>
  </div>
  </section>
    );
  }
}
 
export default Stories