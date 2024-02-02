// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
import { useForm, ValidationError } from '@formspree/react';
import React, { useState, useEffect, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import axios from 'axios';

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

const setSubmittedLocalStorage = () => {
  localStorage.setItem('submitted', 'true');
}

const getSubmittedLocalStorage= () => {
  console.log(`Local Storage Submitted: ${localStorage.getItem('submitted')} `);
  return localStorage.getItem('submitted');
}

export default function TestimonialPage() {
  const [submitted, setSubmitted] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [ip, setIp] = useState('');
  const [userSubmitted, setUserSubmitted] = useState(false);
  const [userEditing, setUserEditing] = useState(false);
  const [myDoc, setMyDoc] = useState({});
  const getIP = async () => {
    const response = await axios.get('https://api64.ipify.org?format=json');
    setIp(response.data.ip)
    console.log(response.data);
  }

  useEffect(() => {
    getSubmittedLocalStorage();
    if (getSubmittedLocalStorage() === 'true') {
      setSubmitted(true);
    }
  }, []);

  useEffect(() => {
    getIP();
  }, []);



  useEffect(() => {
    const getTestimonials = async () => {
      const testimonialCol = collection(db, 'testimonials');
      const testimonialSnapshot = await getDocs(testimonialCol);
      const testimonialList = testimonialSnapshot.docs.map(doc => doc.data());
      for (let i = 0; i < testimonialList.length; i++) {
        if (testimonialList[i].ipAddress === ip) {
          setUserSubmitted(true);
          setMyDoc(doc(db, "testimonials", testimonialSnapshot.docs[i].id));

        }
      }
      setTestimonials(testimonialList);
    }
    getTestimonials();
  }, [ip]);



  const handleFirebaseSubmit = async () => {
    let name = document.getElementById('name').value;
    let testimonial = document.getElementById('message').value;
    let email = document.getElementById('email').value;
    let ipAddress = ip;
    setSubmittedLocalStorage();
    setSubmitted(true);
    await addDoc(collection(db, "testimonials"), {
      name: name,
      testimonial: testimonial,
      email: email,
      ipAddress: ipAddress
    });
    document.getElementById('testimonial-top').scrollIntoView();
    window.location.reload();
  }

  const handleFirebaseUpdate = async () => {
    let name = document.getElementById('name').value;
    let testimonial = document.getElementById('message').value;
    let email = document.getElementById('email').value;
    let ipAddress = ip;
    setSubmittedLocalStorage();
    setSubmitted(true);
    await setDoc(myDoc, {
      name: name,
      testimonial: testimonial,
      email: email,
      ipAddress: ipAddress
    });
    document.getElementById('testimonial-top').scrollIntoView();
    window.location.reload();
  }

  const handleFirebaseDelete = async () => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      await deleteDoc(myDoc);
      document.getElementById('testimonial-top').scrollIntoView();
      window.location.reload();
    } else {
      return;
    }


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
              <div className="clearfix" id="testimonial-top">
                <h3>Tell us about your visit</h3>
                {state.succeeded ? (
                  <div
                    className="alert alert-success"
                    style={{ width: "100%", height: "50%", marginBottom: "20em" }}
                    role="alert"
                    id
                  >
                    Thanks for the feedback!
                  </div>
                ) : (
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
                    {userSubmitted && submitted && !userEditing ? (
                      <button
                        type="submit"
                        className="btn btn-primary mt-3 border rounded"
                        disabled='true'
                      >Submit</button>
                    ) : userSubmitted && submitted && userEditing ? (
                      null
                    ) :
                      (
                        <button
                          type="submit"
                          className="btn btn-primary mt-3 border rounded"
                          disabled={state.submitting}
                          onClick={handleFirebaseSubmit}
                        >Submit</button>
                      )}

                    {userEditing && (
                      <button
                        type="submit"
                        className="btn btn-primary mt-3 border rounded"
                        disabled={state.submitting}
                        onClick={handleFirebaseUpdate}
                      >Update</button>
                    )}
                  </form>
                )}
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
                          {userSubmitted && submitted && !userEditing && testimonial['ipAddress'] === ip ? (
                            <div
                              className="text-center mt-3"
                            >
                              <button
                                className="btn btn-primary btn-sm mt-3 border rounded"
                                onClick={() => {
                                  document.getElementById('name').value = testimonial.name;
                                  document.getElementById('message').value = testimonial.testimonial;
                                  document.getElementById('email').value = testimonial.email;
                                  document.getElementById('testimonial-top').scrollIntoView();
                                  setUserEditing(true);
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-primary btn-sm mt-3 border rounded"
                                onClick={() => {
                                  handleFirebaseDelete();
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          ) : userSubmitted && submitted && userEditing ? (
                            null
                          ) : (
                            null
                          )}
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

