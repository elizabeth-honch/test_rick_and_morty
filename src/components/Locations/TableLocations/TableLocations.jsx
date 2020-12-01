import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TableLocations.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { LocationsFilterByName } from '../LocationsFilterByName/LocationsFilterByName';
import { LocationsFilterByType } from '../LocationsFilterByType/LocationsFilterByType';
import { LocationsFilterByDimension } from '../LocationsFilterByDimension/LocationsFilterByDimension';

const useStyles = makeStyles({
  table: {
    width: '800px',
    border: '2px dashed #ccc',
    margin: '0 auto',
  },
});

export const TableLocations = ({ locations }) => {
  const classes = useStyles();
  const [sortName, setSortName] = useState(false);
  const [sortType, setSortType] = useState(false);
  const [sortDimension, setSortDimension] = useState(false);
  const [sortedByName, setSortedByName] = useState(locations);
  const [sortedByType, setSortedByType] = useState(locations);
  const [sortedByDimension, setSortedByDimension] = useState(locations);

  const sortByName = () => {
    setSortedByType(locations);
    setSortedByDimension(locations);
    setSortName((state) => !state);
    setSortedByName([...locations].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortByType = () => {
    setSortedByDimension(locations);
    setSortedByName(locations);
    setSortType((state) => !state);
    setSortedByType([...locations].sort((a, b) => a.type.localeCompare(b.type)));
  };

  const sortByDimension = () => {
    setSortedByName(locations);
    setSortedByType(locations);
    setSortDimension((state) => !state);
    setSortedByDimension([...locations].sort((a, b) => a.dimension.localeCompare(b.dimension)));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="table__number">№</TableCell>
            <TableCell className="table__name" onClick={sortByName}>Name</TableCell>
            <TableCell className="table__type" onClick={sortByType}>Type</TableCell>
            <TableCell className="table__dimension" onClick={sortByDimension}>Dimension</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            (sortName === false && sortType === false && sortDimension === false) && (
              locations.map((location) => (
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
              )))
          }
          {
            sortName && <LocationsFilterByName sortedArray={sortedByName} />
          }
          {
            sortType && <LocationsFilterByType sortedArray={sortedByType} />
          }
          {
            sortDimension && <LocationsFilterByDimension sortedArray={sortedByDimension} />
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableLocations.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      dimension: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
