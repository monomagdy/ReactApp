import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
   <section>
    <div class="text-center mb-5">
      <img src="/img/welcome.png" class="m-auto width-30-p" alt="welcome" />
      <p class="m-4 color-text font-w-300">Register now and secure your spot on top of your category</p>
      <div class="buttons">
        <button class="bg-red btn pb-2 pl-4 pr-4 pt-2 ml-2 mr-2 font-w-500">Service Provider</button>
        <button class="btn bg-white pb-2 pl-4 pr-4 pt-2 ml-2 mr-2 font-w-500">Client</button>
      </div>
    </div>
  </section>
    );
  }
}
 
export default Welcome