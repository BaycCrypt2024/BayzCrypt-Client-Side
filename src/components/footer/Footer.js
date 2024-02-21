import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <>
        <hr className='--color-dark'/>
        <div className='--flex-center --py2 --bg-grey footer'>
        {/* <h1>From zero to crypto in minutes</h1> */}
            <p>All right reserved &copy; 2024</p>
        </div>
    </>
  )
}

export default Footer