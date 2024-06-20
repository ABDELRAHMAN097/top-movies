import React, { useEffect, useRef } from 'react'
import './Contact.scss'
import { Link } from 'react-router-dom'
import emailjs from "emailjs-com";
import { WOW } from "wowjs";
import { BsSendFill } from "react-icons/bs";
import photomove from '../../assets/photoMov.jpg'

export default function Contact() {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_23iigtc",
        "template_4yegygj",
        form.current,
        "UROKVOaB76jqo3Am-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className='w-100 container'>
     <div className='d-flex align-items-center gap-2 my-3 wow animate__animated animate__jello animate__delay-1s 1s	animate__slow	0.5s'>
     <Link className='fs-3 text-white' to="/">Home</Link>
      <span className='fs-3 '>/</span>
      <h3>Contact</h3>
     </div>
     <div className='row w-100'>
     <div className='col-lg-6 col-md-12 boder-top-white wow animate__animated animate__fadeInLeft'>
        <div className='contact-photo w-100 '>
        <div className='over d-flex align-items-end'>
          <h3 className='p-3'>We’re excited to hear from you! Whether you have a question, need support, or just want to share your thoughts, we’re here to help.</h3>
        </div>
        </div>
     </div>
     <div className='col-lg-6 col-md-12'>
     <form ref={form} onSubmit={sendEmail} className="wow animate__animated animate__fadeInRight ">
          {/* name && email */}
          <div className="name-email">
            <div className="name">
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder="Name"
                className='input'
              />
            </div>
            <div className="email">
              <input
                type="email"
                id="email"
                name="to_name"
                required
                placeholder="Gmail"
                className='input'
              />
            </div>
          </div>
          <div></div>
          <div>
            <textarea
              id="message"
              name="message"
              // value={formData.message}
              // onChange={handleChange}
              required
              placeholder="Message:"
            />
          </div>
          <button className='btn btn-info' type="submit">Send <BsSendFill /></button>
      </form>
     </div>
    </div>
    </div>
  )
}
