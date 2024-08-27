import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';
import { Form, Formik } from 'formik';
import { Alert } from "../lib/alert";

export async function getStaticProps(){
    const res = await fetch("http://127.0.0.1:8000/contact/")
    const contact = await res.json()
    return{
        props : {
            contact
        },
        revalidate : 10,
    }
}

const Contact = ({contact}) => {

  return (
    <Layouts>
        <PageBanner pageTitle={"تماس با ما"} pageDesc={contact.PageDesc.subtitle} />

        {/* Contact Info */}
        <section className="onovo-section gap-top-140">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

                        {/* Heading */}
                        <div className="onovo-text gap-bottom-40">
                            <h4 className="mt-3">ارسال پیام :</h4>
                            جهت برقراری ارتباط با ما پیام دهید...
                        </div>

                        {/* Form */}
                        <div className="onovo-form">
                        <Formik
                            initialValues = {{ email: '', name: '', tel: '', message: '' }}
                            validate = { values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'ضروری';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'ایمیل وارد شده معتبر نیست';
                                }
                                return errors;
                            }}
                            onSubmit = {( values, { setSubmitting } ) => {
                                const form = document.getElementById("contactForm");
                                const data = new FormData();

                                data.append('name', values.name);
                                data.append('tel', values.tel);
                                data.append('email', values.email);
                                data.append('message', values.message);

                                fetch("http://127.0.0.1:8000/contact/", {
                                    method: 'POST',
                                    body: data,
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                }).then(response => {
                                    if (response.status) {
                                        Alert('با تشکر' ,'درخواست شما دریافت شد', 'success');
                                        form.reset()
                                    } else {
                                        response.json().then(data => {
                                            Alert('متاسفانه' ,'متاسفانه مشکلی رخ داده است', 'error');
                                        })
                                    }
                                }).catch(error => {
                                    Alert('متاسفانه' ,'متاسفانه مشکلی رخ داده است', 'error');
                                });

                                setSubmitting(false);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                            <Form id="contactForm" className="cform">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="نام" 
                                              type="text" 
                                              name="name" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.name}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="ایمیل" 
                                              type="email" 
                                              name="email" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.email}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <input 
                                              placeholder="شماره تماس" 
                                              type="tel" 
                                              name="tel" 
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.tel}
                                              dir="rtl"
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <textarea 
                                              placeholder="پیام ..." 
                                              name="message"
                                              required="required"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.message}
                                            />
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <p>
                                            <button type="submit" className="onovo-btn onovo-hover-btn">
                                                <span>ارسال پیام</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>

                            </Form>
                            )}
                        </Formik>
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">

                        {/* Contact Info */}
                        <div className="onovo-contact-info onovo-text-white">
                            <ul>
                                <li>
                                    <h5>اطلاعات تماس :</h5>
                                    <a className="onovo-lnk lnk--white" target="_blank">{contact.info.phone}</a><br/>
                                    
                                    <div className="onovo-social-1 onovo-social-active" style={{"marginTop": "10px"}}>
                                        <ul>
                                            {contact.info.social.map((item, key) => (
                                            <li key={`contact-social-item-${key}`}>
                                                <a href={item.link} target="_blank" className="onovo-social-link" title={item.title}>
                                                    <img src={item.image}/>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <h5> آدرس :</h5>
                                    <div>{contact.info.Address}</div>
                                </li>
                                <li>
                                    <h6>آدرس ایمیل :</h6>
                                    <a href="mailto:username@domain.com" className="onovo-lnk lnk--white" target="_blank">{contact.info.email}</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Faq */}
        <section className="onovo-section gap-top-140">
            <div className="container">

                {/* Heading */}
                <div className="onovo-heading align-center gap-bottom-40">
                    <div className="onovo-subtitle-1">
                        <span>سوالات متداول</span>
                    </div>
                    <h2 className="onovo-title-2">
                        <span dangerouslySetInnerHTML={{ __html: contact.faq.subtitle }} />
                    </h2>
                </div>

                {/* Faq items */}
                <div className="onovo-faq-items">
                <Accordion defaultActiveKey="faq-acc-0">
                    {contact.faq.item.map((item, key) => (
                    <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
                    <div key={`faq-item-${key}`} className="onovo-faq-item onovo-collapse-item">
                        <Accordion.Header>
                        <h5 className="title onovo-collapse-btn">
                            <i className="arrow" />
                            <span>{item.title}</span>
                        </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div className="onovo-text">
                            <div dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                        </Accordion.Body>
                    </div>
                    </Accordion.Item>
                    ))}
                </Accordion>
                </div>
                
            </div>
        </section>
      
    </Layouts>
  );
};
export default Contact;
