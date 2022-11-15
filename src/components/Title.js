import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2
        className="m-3 p-2
      border border-md border-5 border-light rounded-pill
      text-light d-flex justify-content-center"
      >
        {headline}

      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
