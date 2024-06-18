import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from "emailjs-com";
import { WOW } from "wowjs";

export default function Items() {
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
    <div className='w-100'>
     <div className='d-flex align-items-center gap-2 m-3 wow animate__animated animate__jello animate__delay-1s 1s	animate__slow	0.5s'>
     <Link className='fs-3 text-white' to="/">Home</Link>
      <span className='fs-3 '>/</span>
      <h3>Contact</h3>
     </div>
     <form ref={form} onSubmit={sendEmail} className="formContact zindex wow animate__animated animate__fadeInRight">
          {/* name && email */}
          <div className="name-email">
            <div className="name">
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder="الاسم"
              />
            </div>
            <div className="email">
              <input
                type="email"
                id="email"
                name="to_name"
                required
                placeholder="البريد الالكتروني"
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
              placeholder="الرسالة:"
            />
          </div>
          <button type="submit">إرسال</button>
        </form>
    </div>
  )
}
