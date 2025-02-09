
import React, { useRef } from 'react'
import axios from "axios";


/*function semdMail() {
    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}*/

function semdMail(){alert(6)}


export default function contact() {
    return (

        <div>
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                    </div>
                
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6 text-white">
                                Address : Nutandhih ,Saraidhela ,Dhanbad ,JH -826005
                            </div>
                            <div className="col-md-6 text-white">
                               Mobile : 9031251290
                            </div>
                            <div className="col-md-6 text-white">
                               Email : p1608088@gmail.com
                            </div>
                            <div className="col-md-6 text-white">
                            LinkedIn : <a href="https://www.linkedin.com/in/pankaj-kumar-cool" target='_blank'>Pankaj Kumar Cool</a>
                            </div>
                            <div className="col-md-6 text-white">
                            Stack overflow : <a href="https://stackoverflow.com/users/4335210/pankaj?tab=profile" target='_blank'>Pankaj Kumar</a>
                            </div>
                            <div className="col-md-6 text-white">
                            Medium : <a href="https://ankuprsdpkp.medium.com/" target='_blank'>Pankaj Kumar</a>
                            </div>
                            <div className="col-md-6 text-white">
                            Git-Lab : <a href="https://github.com/pankajToday" target='_blank'>Pankaj Today</a>
                            </div>
                            <div className="col-md-6 text-white">
                             Kirana App (under development): <a href="https://kirana-mobile-app.netlify.app/" target='_blank'>Easy Kirana Book -Mobile App</a>
                            </div>
                        </div>

                       




                    {/* <form id="contactForm" action="https://formsubmit.co/ankuprsdpkp@gmail.com" method="POST" >
                    <input  className="form-control" type="hidden" name="_subject" value="A New Query From My REACT Portfoliy Site" />
                    <input type="hidden" name="_autoresponse" value="Thanks you for your time. We will try to reply you ASP." />


                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" name="name"  id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-group">

                                    <input className="form-control" name="email" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-group mb-md-0">

                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">

                                    <textarea className="form-control" name="message" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                               
                            </div>
                        </div>
                       
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>

                        <div className="text-center"><button onClick='semdMail()' className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                    </form> */}
                </div>
            </section>

        </div>
    )
}
