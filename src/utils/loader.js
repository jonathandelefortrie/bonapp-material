import React, { Component } from 'react';

import { Spinner } from '../components';

const Loader = (Wrapped, url) => {
  const script = typeof window !== 'undefined'
    ? document.createElement('script')
    : {};
  script.errored = false;
  script.loaded = false;
  script.async = true;
  script.src = url;

  return class Wrapper extends Component {
    componentDidMount() {
      if (!document.head.contains(script)) {
        script.onload = this.onLoad;
        script.onerror = this.onError;
        document.head.appendChild(script);
      }
    }

    onLoad = e => {
      script.loaded = true;
      this.forceUpdate();
    };

    onError = e => {
      script.errored = true;
      this.forceUpdate();
    };

    render() {
      if (script.loaded) {
        return <Wrapped {...this.props} />;
      } else if (script.errored) {
        return (
          <div className="bp-text-center bp-padding">
            An error happended, please reload the page.
          </div>
        );
      } else {
        return (
          <div className="bp-text-center bp-padding">
            <Spinner />
          </div>
        );
      }
    }
  };
};

export default Loader;
