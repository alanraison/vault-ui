import React from 'react';

import Header from './header';
import Router from '../core/router';


export function PageComponent() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default PageComponent;
