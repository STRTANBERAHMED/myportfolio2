import React from 'react';
import emailjs from 'emailjs-com';

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
        <div className="container py-5">
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <textarea className="form-control"
                            cols="30"
                            rows="8"
                            placeholder="Your Message" name="message" />
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="send message" />
                    </div>
                </div>
            </form>
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