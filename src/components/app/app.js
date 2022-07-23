import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './app.css';

const App = () => {
  return (
    <div>
        <Header />
        <div className="row">
        <div className="col-md-5">
          <RandomPlanet />
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <ItemList />
        </div>      
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;