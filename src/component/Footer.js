import React from "react"
import logo1 from "./pic/f_logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' style={{width:"6rem"}} />
          </div>
          <p>Feel free to get in touch </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
