import React, { useEffect, useState } from 'react';
// import { useCallback } from 'react';
// import colors from '../../constants/colors';
import ghIcon from '../../assets/pictures/contact-gh.png';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

// function to validate email
const validateEmail = (email: string) => {
    const re =
        // eslint-disable-next-line
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

interface SocialBoxProps {
    icon: string;
    link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <div className="big-button-container" style={styles.social}>
                <img src={icon} alt="" style={styles.socialImage} />
            </div>
        </a>
    );
};

// This will throw a bunch of warnings when you compile, but it's fine.
// I hacked it hardcore with these comment lines. I'll fix it later. (I won't).
const Contact: React.FC<ContactProps> = (props) => {
    // eslint-disable-next-line
    const [company, setCompany] = useState('');
    // eslint-disable-next-line
    const [email, setEmail] = useState('');
    // eslint-disable-next-line
    const [name, setName] = useState('');
    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    // eslint-disable-next-line
    const [isFormValid, setIsFormValid] = useState(false);
    // eslint-disable-next-line
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line
    const [formMessage, setFormMessage] = useState('');
    // eslint-disable-next-line
    const [formMessageColor, setFormMessageColor] = useState('');

    useEffect(() => {
        if (validateEmail(email) && name.length > 0 && message.length > 0) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [email, name, message]);

    // const handleSubmit = useCallback(() => {
    //     if (isFormValid) {
    //         setIsLoading(true);
    //         fetch('https://kearneyjohn.com/api/send-email', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 company,
    //                 email,
    //                 name,
    //                 message,
    //             }),
    //         })
    //             .then((res) => {
    //                 if (res.status === 200) {
    //                     setFormMessage(
    //                         `Message successfully sent. Thank you ${name}!`
    //                     );
    //                     setCompany('');
    //                     setEmail('');
    //                     setName('');
    //                     setMessage('');
    //                     setFormMessageColor(colors.blue);
    //                     setIsLoading(false);
    //                 } else {
    //                     setFormMessage(
    //                         'There was an error sending your message. Please try again.'
    //                     );
    //                     setFormMessageColor(colors.red);
    //                     setIsLoading(false);
    //                 }
    //             })
    //             .catch((err) => {
    //                 setFormMessage(
    //                     'There was an error sending your message. Please try again.'
    //                 );
    //                 setFormMessageColor(colors.red);
    //                 setIsLoading(false);
    //             });
    //     } else {
    //         setFormMessage('Form unable to validate, please try again.');
    //         setFormMessageColor('red');
    //     }
    // }, [company, email, name, message, isFormValid]);

    useEffect(() => {
        if (formMessage.length > 0) {
            setTimeout(() => {
                setFormMessage('');
                setFormMessageColor('');
            }, 4000);
        }
    }, [formMessage]);

    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact</h1>
                <div style={styles.socials}>
                    <SocialBox
                        icon={ghIcon}
                        link={'https://github.com/johnkearney1'}
                    />
                </div>
            </div>
            <div className="text-block">
                {/* <p>
                    I'm always looking for new work; reach out to me!
                </p> */}
                <br />
                <p>
                    <b>General: </b>
                    <a href="mailto:john@kearneyjohn.com">
                        john@kearneyjohn.com
                    </a>
                    <br />
                    <b>Licensing: </b>
                    <a href="mailto:mgmt@kearneyjohn.com">
                        mgmt@kearneyjohn.com
                    </a>
                <br />
                <br />
                <br />
                <b>
                <a href="https://instagram.com/kearneyonline">
                        Instagram
                </a>
                </b>
                </p>
            </div>
            {/* <ResumeDownload altText="Need a copy of my Resume?" /> */}
        </div>
    );
};

const styles: StyleSheetCSS = {
    form: {
        flexDirection: 'column',
        marginTop: 32,
    },
    formItem: {
        marginTop: 4,
        marginBottom: 16,
    },
    socialImage: {
        width: 36,
        height: 36,
    },
    buttons: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formInfo: {
        textAlign: 'right',

        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingLeft: 24,
    },
    star: {
        paddingRight: 4,
        color: 'red',
    },
    button: {
        minWidth: 184,
        height: 32,
    },
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
    },
    social: {
        width: 4,
        height: 4,
        // borderRadius: 1000,

        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
};

export default Contact;
