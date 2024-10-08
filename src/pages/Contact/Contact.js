import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import { Link } from 'react-router-dom'
import emailjs from "emailjs-com";
import { WOW } from "wowjs";
import { BsSendFill } from "react-icons/bs";
import { DotLoader  } from "react-spinners";


export default function Contact() {
const [loading, setLoading] = useState(true);
setTimeout(() => {
  setLoading(false);
}, 2000);
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
    <div className='w-100  container m-auto'>
      {loading && ( 
      <div className="loading-overlay">
        <DotLoader  color={"rgb(255, 0, 0)"} loading={loading} size={250} className="loading-spinner" />
      </div>
    )}
     <div className='d-flex align-items-center gap-2 mt-5 wow animate__animated animate__jello animate__delay-1s 1s	animate__slow	0.5s'>
     <Link className='fs-3 text-white' to="/">Home</Link>
      <span className='fs-3 '>/</span>
      <h3>Contact</h3>
     </div>
     <div className='row w-100'>
    
     <div className='col-12 w-100 m-auto'>
     <form ref={form} onSubmit={sendEmail} className="mt-5  wow animate__animated animate__fadeInRight ">
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
