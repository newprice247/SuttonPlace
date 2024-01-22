import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import News from './pages/News';
import NewsSinglePost from './pages/NewsSinglePost';
import Gallery from './pages/Gallery';
import SearchResults from './pages/SearchResults';
import Services from './pages/Services';
import ServicesInside from './pages/ServicesInside';
import Page404 from './pages/404';
import UserInterface from './pages/UserInterface';

import './assets/sass/style.scss';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Page404 />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-us',
                element: <About />
            },
            {
                path: '/contacts',
                element: <Contacts />
            },
            {
                path: '/news',
                element: <News />
            },
            {
                path: '/gallery',
                element: <Gallery />
            },
            {
                path: '/news-single-post',
                element: <NewsSinglePost />
            },
            {
                path: '/search-results',
                element: <SearchResults />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/services-inside',
                element: <ServicesInside />
            },
            {
                path: '/user-interface',
                element: <UserInterface />
            }
        ]
    }
])


// ReactDOM.render( <App />, document.getElementById( 'root' ) );
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
