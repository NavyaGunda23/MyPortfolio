

import { useState } from "react"
import Email from "../assest/email-icon.svg"
import phone from "../assest/phone-icon.svg"

const Contact = () => {
    const [formData, setFormData] = useState({})
    const [ successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const handleSubscribe = (e) => {
       
        console.log("formData",formData)
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(Object.keys(formData).length === 0 ){
            setErrorMessage("Please fill all input fields")
            //   showToastErrorMessageClick("Please provide Valid Email Address")
              return false
        }
       
        if(formData?.fullName?.length <= 0){
            setErrorMessage("Please provide Name")
              return false
        }
        if(!formData?.subject){
            setErrorMessage("Please provide subject")
              return false
        }
        if(!formData?.message ){
            setErrorMessage("Please provide valid message")
              return false
        }
        if(!pattern.test(formData?.email)){
            setErrorMessage("Please provide Valid Email Address")
          return false
        }
        setErrorMessage("")
        const templateID= "template_9908sdf"
        sendFeedback(templateID,{
          message_html:formData?.message,
          from_name:formData?.fullName,
          reply_to:formData?.email,
    
        })
        e.preventDefault()
      }
      const sendFeedback = (templateID,varaible) =>{
        window.emailjs.send('service_lmcbwdq',templateID,varaible).then(res =>{
          console.log("success in sending")
          setSuccessMessage("Email has been sent.")
        }).catch(error => console.log("error",error))
       
    
      }
    return(
        <div className="container-fluid py-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:" 1px #dee2e6"}}>Contact</h1>
                <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
            </div>
            <h5 className="  text-primary mb-3" style={{textAlign:"center"}}>I’m excited to learn about your project.<br /> Ready to get started?</h5>
            <div className="row mb-5" style={{justifyContent: "center",columnGap:"30px"}}>
                <button  className="contact-container" onClick={() => window.location = 'mailto:yourmail@domain.com'}>
                <img src={Email}  className="contact-image" alt="email"/>
                    <span className="text-white">navyagunda.71@gmail.com</span>
                </button>
                <div className="contact-container">
                    <img src={phone}  className="contact-image" alt="phone"/>
                    <span className="text-white">+971 50 540 1750</span>
                </div>
            </div>
            <div>
                {successMessage && <p style={{color:"green",textAlign:"center"}}>{successMessage}</p>}
            </div>
            <h5 className="  text-primary mb-3" style={{textAlign:"center"}}>Get in touch using the form</h5>
           
            <div className="row justify-content-center">
       
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                                        required="required" name="fullName" data-validation-required-message="Please enter your name"
                                        onChange={(e) => setFormData(
                                            {
                                                ...formData,
                                            [e.target.name]:e.target.value
                                        })
                                        }
                                         />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="email" className="form-control p-4" id="email" name="email"
                                     onChange={(e) => setFormData(
                                        {
                                            ...formData,
                                        [e.target.name]:e.target.value
                                    })
                                    }
                                     placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" name="subject"
                                    onChange={(e) => setFormData(
                                        {
                                            ...formData,
                                        [e.target.name]:e.target.value
                                    })
                                    }
                                    
                                    />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message" name="message"
                                    onChange={(e) => setFormData(
                                        {
                                            ...formData,
                                        [e.target.name]:e.target.value
                                    })
                                    }
                                    >

                                    </textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                {errorMessage && <p style={{color:"red",textAlign:"left"}}>{errorMessage}</p>}
                            </div>

                            <div>
                                <button className="btn btn-outline-primary" type="submit" onClick={(e) => handleSubscribe(e)}  id="sendMessageButton">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact