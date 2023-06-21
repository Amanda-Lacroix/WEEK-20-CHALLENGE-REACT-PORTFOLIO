import React from 'react';


const Contact = () => {
  return (
    <form id="contact">
    <div class="form-group"className="box-style" >
      <h2>CONTACT FORM</h2>
      <label for="exampleFormControlInput1">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="you@me.com"></input>
      <label for="exampleFormControlTextarea1">Send me a Message</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </form>
  );
};

export default Contact;
