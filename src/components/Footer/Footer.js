import React from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';

const Footer = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_97e6o1k', e.target, 'user_aPUqjbrWYbXRwQnxGCYu1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="footer p-5 text-dark">
            <h1>Contact Info</h1>
            <div className="d-flex justify-content-center mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Email</h3>
                        <p>md.tanber4433@gmail.com</p>
                        <h3>Phone</h3>
                        <p>+905527316001</p>
                        <h3>Current Address</h3>
                        <p>Baris Mahalle, Safranbolu, Karabuk, Turkey</p>
                        <h3>Parmanent Address</h3>
                        <p>Nandail, Mymensingh, Bnagladesh</p>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <form onSubmit={sendEmail}>
                                <div className="row  mx-auto">
                                    <div className="col-8 form-group mx-auto">
                                        <input type="text" className="form-control" placeholder="Name" name="name"
                                            required
                                        />
                                    </div>
                                    <div className="col-8 pt-2 form-group mx-auto">
                                        <input type="email" className="form-control" placeholder="Email Address" name="email"
                                            required />
                                    </div>
                                    <div className="col-8 pt-2 form-group mx-auto">
                                        <input type="text" className="form-control" placeholder="Subject" name="subject"
                                            required
                                        />
                                    </div>
                                    <div className="col-8 pt-2 form-group mx-auto">
                                        <textarea className="form-control"
                                            cols="30"
                                            rows="8"
                                            placeholder="Your Message" name="message"
                                            required
                                        />
                                    </div>
                                    <div className="col-8 pt-3 mx-auto">
                                        <input type="submit" className="btn btn-info" value="send message" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p>©2021. Md Tanber portfolio. All rights reserved.</p>
        </div>
    );
};

export default Footer;