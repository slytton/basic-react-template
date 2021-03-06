import React from 'react';

import Header from './header';
import Footer from './footer';

require('./layout.scss')

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>);
  }
}
