import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class Types extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="types" />
        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/destructuring">Ensuite, on va faire des boucles...</Link>
        </div>
      </div>
    );
  }
}
