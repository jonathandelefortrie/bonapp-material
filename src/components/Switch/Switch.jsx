import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.scss';

class Switch extends Component {
  Switch = null;

  componentDidMount() {
    global.componentHandler.upgradeElement(this.Switch);
  }

  render() {
    const { id, label, className, ...attrs } = this.props;

    return (
      <label
        styleName="Switch"
        htmlFor={`switch-${id}`}
        ref={elt => { this.Switch = elt; }}
        className={`mdl-switch mdl-js-switch mdl-js-ripple-effect ${className}`}>
        <input
          {...attrs}
          type="checkbox"
          id={`switch-${id}`}
          className="mdl-switch__input"
        />
        <span className="mdl-switch__label">{label}</span>
      </label>
    );
  }
}

Switch.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Switch.defaultProps = {
  className: ''
};

export default Switch;