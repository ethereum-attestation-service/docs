import React, { Component } from 'react';

// import Component
import Section from './Section';
import Features from './Features';
// import Tools from './Tools';
// import Websites from './Websites';
import FooterSection from './FooterSection';
import { Team } from './Team';
import Topbar from '../../components/Layout/Topbar';
import Footer from '../../components/Layout/Footer';
import Info from "./Info";

export default class index extends Component {
  componentDidMount() {
    document.body.classList = '';
    document.getElementById('top-menu').classList.add('nav-light');
    document.getElementById('buyButton').className = 'btn btn-light';
    window.addEventListener('scroll', this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
      document.getElementById('buyButton').className = 'btn btn-primary';
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
      document.getElementById('buyButton').className = 'btn btn-light';
    }
  };
  render() {
    return (
      <React.Fragment>
        <Topbar/>
        <Section />
        {/*<Partners />*/}
        <section className="section">

          <Features />
          <Info/>

          <Team />
        </section>
        <FooterSection />
        <Footer/>
      </React.Fragment>
    );
  }
}
