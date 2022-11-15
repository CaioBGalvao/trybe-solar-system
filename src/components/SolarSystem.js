import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <div className="row">
          {Planets.map((planets) => (<PlanetCard
            key={ planets.name }
            planetImage={ planets.image }
            planetName={ planets.name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
