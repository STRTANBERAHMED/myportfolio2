import React from 'react';
import emailjs from 'emailjs-com';
import './FooterNew.css';

const FooterNew = () => {

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
            <div className="footer">
                <div className="footer-info">
                    <h2>MD TANBER</h2>
                    <h3>Current Address</h3>
                    <p>Baris Mahalle, Safranbolu, Karabuk, Turkey</p>
                    <h3>Parmanent Address</h3>
                    <p>Nandail, Mymensingh, Bnagladesh</p>
                    <div className="footer-social">
                        <a href="https://medium.com/@md.tanber4433"><i className="bx bxl-medium-square"></i></a>
                        <a href="https://www.instagram.com/strtanber/"><i className="bx bxl-twitter"></i></a>
                        <a href="https://twitter.com/StrTanber"><i className="bx bxl-instagram"></i></a>
                    </div>
                </div>
                <div className="">

                </div>
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
            {/* <!-- .copyright --> */}
            <div className="copyright">
                <p>&#169; Md Tanber All Right Reserved.</p>
            </div>
        </div>
    );
};

export default FooterNew;