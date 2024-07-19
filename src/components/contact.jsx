import React from 'react'
import './all.css';


const contact = () => {
    return (
        <>
            <div className="conc">
                <h2 className='pric'>Contact us</h2>

                <div className="frm">
                <form className='form'>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Phone Number</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                </div>

                <div className="contact">
                    <h3>Contact us at</h3>
                    <p>Email us at: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio.</p>
                    <p>call us at: 99999999999</p>
                </div>
            </div>
        </>
    )
}

export default contact
