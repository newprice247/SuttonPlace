// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { addDoc } from "firebase/firestore"; 
import React, { useState, useEffect, Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import PageTitleTestimonials from "../blocks/page-title/PageTitleTestimonials";

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

const TestimonialPage = () => {
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
                <h2>Tell us about your visit</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="testimonial">Testimonial</label>
                    <textarea className="form-control" id="testimonial" rows="3" placeholder="Tell us about your visit"></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={async (e) => {
                      e.preventDefault();
                      let name = document.getElementById('name').value;
                      let testimonial = document.getElementById('testimonial').value;
                      await addDoc(collection(db, "testimonials"), {
                        name: name,
                        testimonial: testimonial
                      });
                      window.location.reload();
                    }}
                  >Submit</button>
                </form>
                <div className="spacer p-top-lg p-bottom-lg">
                  <div className="title">
                    <h2>What people are saying</h2>
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
      </main>
      <Footer />
    </Fragment>
  );
};

export default TestimonialPage;