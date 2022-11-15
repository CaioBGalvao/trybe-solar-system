import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <figure
        data-testid="planet-card"
        className="col flex-wrap figure position-relative"
      >
        <img
          className="figure-img img-fluid"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <figcaption
          data-testid="planet-name"
          className="btn btn-primary
          position-absolute top-100 start-50 translate-middle
          figure-caption text-light "
        >
          {planetName}
        </figcaption>
      </figure>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,

};

export default PlanetCard;
