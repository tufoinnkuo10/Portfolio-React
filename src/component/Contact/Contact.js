import React, { useState } from "react"
import contact1 from "./contact1.jpg"
import {FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `you entered name as ${data.fullname}. 
	phone number ${data.phone}. 
	email address ${data.email}. 
	Subject matter  ${data.subject}. 
	message : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h2>CONTACT</h2>
            {/* <h1></h1> */}
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' style={{width:'30rem'}} />
                </div>
                <div className='details'>
                  <h1>Tufoin Nkuo</h1>
                  <h2>Full-Stack developer</h2>
                  <p>I'am always interested in hearing about new projects, so if you'd like to please get in touch</p> <br />
                  <p>Phone: +237 670854636</p>
                  <p>Email: tufoinnkuo10@gmail.com</p> <br />
                  <span>Reach me Through</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'>
                      <FaGithub />
                      </i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'>
                      <FaLinkedin />
                      </i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'>
                      <FaTwitter />
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
