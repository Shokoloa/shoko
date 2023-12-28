import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export const Contact = () => {
    document.getElementById('canvas').style.display = 'none';

    // Use the useState hook to manage local state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: '',
        captcha: '',
    });

    const [emailValid, setEmailValid] = useState(true);
    const [contentLength, setContentLength] = useState(0);
    const [isContentValid, setIsContentValid] = useState(true);
    const [captchaError, setCaptchaError] = useState(false);

    // Function to update form data
    const handleInputChange = (e) => {
        const { id, value } = e.target;

        // Checking the email for each modification
        if (id === 'email') {
            setEmailValid(validateEmail(value));
        }

        // Update the number of characters for the "content" field
        if (id === 'content') {
            const isValid = value.length >= 10;
            setIsContentValid(isValid);
            setContentLength(value.length);
        }

        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const validateEmail = (email) => {
        // Using a regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = () => {
        if (!emailValid) {
            //console.log('Email is not valid');
            return;
        } else if (formData.content.length < 10) {
            //console.log('Content must be at least 10 characters');
            return;
        } else if (formData.captcha.trim() !== '15') {
            //console.log('Captcha is not valid');
            setCaptchaError(true); // Enable captcha error
            return;
        } else {
            // Reset captcha error state if captcha is valid
            setCaptchaError(false);

            //console.log('Form Data:', formData);

            let username;

            if (formData.name) {
                username = formData.name + `(Shokoloa)`;
            } else {
                username = `unknown` + `(Shokoloa)`;
            }

            const message = {
                content: `Email: ${formData.email}\nContent:\n${formData.content}`,
                username: username,
            };

            fetch('https://discord.com/api/webhooks/1189507715182108723/SgUOFK0VHs__sPe3OH-aLI1NEE1Xiu1aZ7eoUDzpR8MqnUn7Nt6rrBhInDab2HW-HZ6x', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })
                .then(response => {
                    //console.log('Webhook sent');
                });
        }
    };

    return (
        <section>
            <Helmet>
                <title>Shoko | Contact</title>
                <meta name="og:site_name" content="Contact" />
            </Helmet>
            <main className="contact-form">
                <section className="contact-form-right">
                    <h1>Contact</h1>
                    <section className="form">
                        <article className="input">
                            <label>Name<em className="opt">(Optional)</em></label>
                            <input
                                type="text"
                                id="name"
                                maxLength={25}
                                placeholder="Enter your name here"
                                autoComplete="off"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </article>
                        <article className="input">
                            <label>Email<span>*</span></label>
                            <input
                                type="email"
                                id="email"
                                maxLength={30}
                                placeholder="Enter your email address here"
                                autoComplete="off"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className={!emailValid ? 'invalid' : ''}
                            />
                            {!emailValid && <p className="error-message">Enter a valid email address</p>}
                        </article>
                        <article className="input">
                            <label>Content<span>*</span><p className="character-count">{contentLength}/500 characters</p></label>
                            <textarea
                                id="content"
                                maxLength={500}
                                autoComplete="off"
                                placeholder="Why you want to contact us? Please describe your reason."
                                required
                                value={formData.content}
                                onChange={handleInputChange}
                                className={!isContentValid ? 'invalid' : ''}
                            />
                            {(!isContentValid && (
                                <p className="error-message">Content must be at least 10 characters</p>
                            ))}
                        </article>
                        <article className="input">
                            <label>Captcha<span>*</span><em className="captcha">What day comes after July 14</em></label>
                            <input
                                type="text"
                                id="captcha"
                                maxLength={15}
                                autoComplete="off"
                                required
                                value={formData.captcha}
                                onChange={handleInputChange}
                                className={!captchaError ? '' : 'invalid'}
                            />
                            {captchaError && <p className="error-message">Captcha is not valid</p>}
                        </article>
                        <article className="return">
                            <div className="links">
                                <a onClick={() => window.location.href = '/'}><i className="fa-solid fa-house"></i></a>
                                <a onClick={() => window.open('https://discord.gg/zADqwgP8zG')}><i className="fa-brands fa-discord"></i></a>
                            </div>
                            <button className="submit-button" id="submit" onClick={handleSubmit}><span>Submit</span></button>
                        </article>
                    </section>
                </section>
            </main>
        </section>
    );
};
