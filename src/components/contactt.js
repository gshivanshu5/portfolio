import Page from "./page";
import { MdEmail } from "react-icons/md";
import { Animate } from "react-simple-animate";
import "./contact.scss";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd';



const Contact = () => {
    const [from_name, setFrom_name]=useState('');
    const [from_email, setFrom_email]=useState('');
    const [messages, setMessages]=useState('');
    const success =()=>{
        message.success("Thank You!! Your message has received successfully.");
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setTimeout(success,2500);
        setFrom_name('');
        setFrom_email('');
        setMessages('');

        emailjs
            .sendForm(
                "service_i2ekk5v",
                "template_ltldude",
                form.current,
                "zFxrp-emoMeL1MoCj"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <Page
                headerText="Contact Me"
                icon={<MdEmail size={40} />}
            />

            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <div className="contact__content__form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="contact__content__form__controlswrapper">
                                <div>
                                    <input
                                        required
                                        name="from_name"
                                        className="inputName"
                                        type={"text"}
                                        value={from_name}
                                        onChange={(e)=>setFrom_name(e.target.value)}
                                    />
                                    <label htmlFor="name" className="nameLabel">
                                        Name
                                    </label>
                                </div>
                                <div>
                                    <input
                                        required
                                        name="from_email"
                                        className="inputEmail"
                                        type={"text"}
                                        value={from_email}
                                        onChange={(e)=>setFrom_email(e.target.value)}
                                    />
                                    <label htmlFor="email" className="emailLabel">
                                        Email
                                    </label>
                                </div>
                                <div>
                                    <textarea
                                        required
                                        name="messages"
                                        className="inputDescription"
                                        type={"text"}
                                        rows="5"
                                        value={messages}
                                        onChange={(e)=>setMessages(e.target.value)}
                                    />
                                    <label htmlFor="description" className="descriptionLabel">
                                        Description
                                    </label>
                                </div>
                            </div>
                            <input type="submit" value="Send" className="submit"/>
                        </form>
                    </div>
                </Animate>
            </div>

        </div>
    );
};

export default Contact;
