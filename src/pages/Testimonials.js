// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { addDoc } from "firebase/firestore"; 
import { useForm, ValidationError } from '@formspree/react';
import React, { useState, useEffect, Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import PageTitleTestimonials from "../blocks/page-title/PageTitleTestimonials";
import GalleryHome from "../blocks/gallery/GalleryHome";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export default function TestimonialPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      const testimonialCol = collection(db, 'testimonials');
      const testimonialSnapshot = await getDocs(testimonialCol);
      const testimonialList = testimonialSnapshot.docs.map(doc => doc.data());
      setTestimonials(testimonialList);
    }
    getTestimonials();
  }, []);

  const handleFirebaseSubmit = async () => {
    let name = document.getElementById('name').value;
    let testimonial = document.getElementById('message').value;
    let email = document.getElementById('email').value;
    await addDoc(collection(db, "testimonials"), {
      name: name,
      testimonial: testimonial,
      email: email
    });
  }

  const [state, handleSubmit] = useForm(`${process.env.REACT_APP_FORMSPREE}`);
  document.body.classList.add('page');

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Testimonials | Sutton Place Hair Salon</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>
      <Loading />
      <Header logoColor="dark" />
      <main id="main" className="site-main">
        <PageTitleTestimonials />
        <div id="page-content" className="spacer p-top-lg">
          <div className="wrapper">
            <div className="content">
              <div className="clearfix">
                <h3>Tell us about your visit</h3>
                {state.succeeded && <p>Thank you for your feedback!</p>}
                <form
                  onSubmit={handleSubmit}
                  className="mt-3"
                >
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    className="form-control mb-3" 
                    id="name"
                    name="name"
                    placeholder="Your name" />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                    <label htmlFor="testimonial">Testimonial</label>
                    <textarea 
                    className="form-control mb-3" 
                    id="message" 
                    rows="3" 
                    placeholder="Tell us about your visit"
                    name="message"
                    />
                    <ValidationError
                      prefix="Testimonial"
                      field="testimonial"
                      errors={state.errors}
                    />
                    <label htmlFor="email">Email (Only used for verification purposes, you will never recieve unsolicited emails)</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className='form-control'
                      placeholder="Your email address"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  
                  <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    disabled={state.submitting}
                    onClick={handleFirebaseSubmit}
                  >Submit</button>
                </form>
                <div className="spacer p-top-lg p-bottom-lg">
                  <div className="title">
                    <h3>What people are saying</h3>
                  </div>
                  <div className="row gutter-width-sm with-pb-xl spacer p-top-lg">
                    {testimonials.map((testimonial, index) => (
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-5" key={index}>
                        <div className="testimonial">
                          <div className="testimonial-content">
                            <p>" {testimonial.testimonial} "</p>
                          </div>
                          <div className="spacer testimonial-meta text-center p-top-sm">
                            <h4>- {testimonial.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GalleryHome />
      </main>
      <Footer />
    </Fragment>
  );
};

