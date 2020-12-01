import React from 'react';
import PropTypes from 'prop-types';

import { Pagination } from '../Pagination/Pagination';
import { TableLocations } from './TableLocations/TableLocations';

export const Locations = ({ locations, paginate }) => {
  const PAGES = 6;
  return (
    <div className="episodes">
      {
        (locations === undefined)
          ? <div className="episode__error">There is no data here</div>
          : <TableLocations locations={locations} />
      }
      <Pagination pages={PAGES} paginate={paginate} />
    </div>
  );
};

Locations.propTypes = {
  locations: PropTypes.arrayOf().isRequired,
  paginate: PropTypes.func.isRequired,
};
