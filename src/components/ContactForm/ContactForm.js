import React from 'react';
import emailjs from 'emailjs-com';
import Appbar from '../Appbar/Appbar';
import Footer from '../Footer/Footer';
import FooterNew from '../../Pages/FooterNew/FooterNew';
import Header from '../../Pages/Header/Header';

const ContactForm = () => {

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
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="contact" id="contact">
                    <div className="heading">
                        <h2>Contact</h2>
                        <span>Contact With Me</span>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={sendEmail} className="contact-formu" action="">
                            <input type="text" placeholder="Your Name" id="fullName" name="name" />
                            <input type="email" name="email" id="email_id" placeholder="Your Email" />
                            <input type="text" name="subject" className="subject" placeholder="subject" />
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write Message Here..."></textarea>
                            <input type="submit" className="btn contact-btn" value="send message" />
                            {/* <!-- <button onclick="sendMail()">send</button> --> */}
                        </form>
                    </div>
                </div>
            </div>
            <FooterNew></FooterNew>
        </div>
        // <form onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input type="text" placeholder="Name" name="name" />
        //     <label>Email</label>
        //     <input type="email" placeholder="Email" name="email" />
        //     <label>Subject</label>
        //     <input type="text" placeholder="Subject" name="email" />
        //     <label>Message</label>
        //     <textarea placeholder="Message" name="message" />
        //     <input type="submit" value="Send" />
        // </form>
    );
};

export default ContactForm;