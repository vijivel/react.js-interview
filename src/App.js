import logo from './logo.svg';
import './App.css';
import MyButton from './viji1';
import Count from './viji2';
import ConditionalRender from './viji3';
import Form from './viji4';
import WrappedComponent from './viji5'
import Timer from './viji6';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Homepage';
import AboutPage from './Aboutpage';
import ContactPage from './Contactpage';
import ParentComponent from './viji81';
import { StateProvider } from './viji91';
import ExampleComponent from './viji9';
// import ExampleComponent1 from './viji10';
import ErrorBoundary from './viji11';
import MyComponent from './viji11';
import React, { Suspense } from 'react';

const LazyLoadedComponent = React.lazy(() => import('.viji14'));



function App() {
  return (
  <>  
  <MyButton/> 
  <Count/>
  <ConditionalRender/>
  <Form/>
  <WrappedComponent/>
  <Timer/>
  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <hr/>

        <Routes path="/" exact component={<HomePage/>} />
        <Routes path="/about" component={<AboutPage/>} />
        <Routes path="/contact" component={<ContactPage/>} />
      </div>
    </Router>
  
  <ParentComponent/>
  <StateProvider>
    <div>
      <h1>My App</h1>
      <ExampleComponent />
    </div>
  </StateProvider>
  {/* <ExampleComponent1/> */}
  <div>
    <h1>My App</h1>
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  </div>

  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyLoadedComponent />
    </Suspense>
  </div>
  



  </>
  
    
  );
}

export default App;
