import React, { Component, Suspense } from 'react';
import { withRouter } from 'react-router-dom';


// Scroll up button
import ScrollUpButton from 'react-scroll-up-button';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// Layout Components
import Topbar from './Topbar';
import NavbarPage from '../../pages/Saas Onepage/NavbarPage';
import Footer from './Footer';
import FooterWithoutMenuLightSocialOnly from './FooterWithoutMenuLightSocialOnly';

const CustomDot = () => {
  return (
    <React.Fragment>
      <FeatherIcon icon="arrow-up" className="icons" />
    </React.Fragment>
  );
};


const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

class Layout extends Component {
  render() {

    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          {this.props.location.pathname === '/index-onepage' ? (
            <NavbarPage />
          ) : (
            <Topbar
              tagline={null}
              hasDarkTopBar={this.props.hasDarkTopBar}
            />
          )}

          {this.props.children}
          {(() => {
            if (
              this.props.location.pathname === '/index-marketing' ||
              this.props.location.pathname === '/index-digital-agency' ||
              this.props.location.pathname === '/index-modern-business' ||
              this.props.location.pathname === '/index-services' ||
              this.props.location.pathname === '/index-job' ||
              this.props.location.pathname === 'index-freelancer'
            ) {
              return <Footer isLight={true} />;
            } else if (this.props.location.pathname === '/index-portfolio') {
              return (
                <FooterWithoutMenuLightSocialOnly className="border-0 bg-light text-dark" />
              );
            } else if (
              this.props.location.pathname === '/index-personal' ||
              this.props.location.pathname === '/helpcenter-overview' ||
              this.props.location.pathname === '/helpcenter-guides' ||
              this.props.location.pathname === '/helpcenter-support-request' ||
              this.props.location.pathname === '/page-invoice'
            ) {
              return <FooterWithoutMenuLightSocialOnly className="" />;
            } else {
              return <Footer />;
            }
          })()}

          {/* <div className="btn btn-icon btn-soft-primary back-to-top"> */}
          {/* scrollup button */}
          <ScrollUpButton
            ContainerClassName="classForContainer"
            style={{ height: 36, width: 36 }}
            TransitionClassName="classForTransition"
          >
            <CustomDot />
          </ScrollUpButton>
          {/* </div> */}
        </Suspense>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
