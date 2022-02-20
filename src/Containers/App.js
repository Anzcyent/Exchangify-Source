import React, { Component } from 'react';

import { Header } from "../Components/index";
import Main from "./Main";

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    )
  }
}

export default App