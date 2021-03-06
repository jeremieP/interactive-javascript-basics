import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class TemplateStrings extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="template-strings" />
        <div className="col-md-12">
        <Link className="btn btn-primary btn-lg btn-block" to= "/finished">Voir la suite...</Link>
        </div>
      </div>
    );
  }
}
