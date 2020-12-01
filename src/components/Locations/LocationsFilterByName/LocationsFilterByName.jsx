import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const LocationsFilterByName = ({ sortedArray }) => (
  sortedArray.map((location) => (
    <TableRow key={location.name}>
      <TableCell component="th" scope="row">
        {location.id}
      </TableCell>
      <TableCell component="th" scope="row">
        {location.name}
      </TableCell>
      <TableCell component="th" scope="row">
        {location.type}
      </TableCell>
      <TableCell component="th" scope="row">
        {location.dimension}
      </TableCell>
    </TableRow>
  ))
);

LocationsFilterByName.propTypes = {
  sortedArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      dimension: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
