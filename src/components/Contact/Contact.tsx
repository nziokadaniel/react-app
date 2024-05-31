import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3> CONTACT PAGE</h3>
           
         <p> Feel free to reach us through form our contact information below</p>
        <ul>
            <li> 0758248651</li>
            <li> nziokadaniel27@gmail.com</li>
        </ul>
        </div>
    
        <div className='contact-col'>
            <form>
                <label> Your name</label>
                <input type='text'name='name' placeholder='Enter your name'required/>
                <label> Phone number</label>
               
             <input type='text'name='phone' placeholder='Enter your mobile number'required/>
             <label> Write your message her</label>
             <textarea name="message" placeholder='Enter your message'required></textarea>
           <button type='submit'className='btn-dark'> sumit now</button>
            </form>
        </div>
        </div>
  )
}

export default Contact