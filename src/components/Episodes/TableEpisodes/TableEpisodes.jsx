import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TableEpisodes.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: '800px',
    border: '2px dashed #ccc',
    margin: '0 auto',
  },
});

export const TableEpisodes = ({ episodes }) => {
  const classes = useStyles();
  const [sortName, setSortName] = useState(false);
  const [sortedArray, setSortedArray] = useState(episodes);

  const sortByName = () => {
    setSortName((state) => !state);
    setSortedArray([...episodes].sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="table__name" onClick={sortByName}>Name</TableCell>
            <TableCell>Episode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            sortName
              ? (
                sortedArray.map((episode) => (
                  <TableRow key={episode.name}>
                    <TableCell component="th" scope="row">
                      {episode.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {episode.episode}
                    </TableCell>
                  </TableRow>
                ))
              )
              : (
                episodes.map((episode) => (
                  <TableRow key={episode.name}>
                    <TableCell component="th" scope="row">
                      {episode.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {episode.episode}
                    </TableCell>
                  </TableRow>
                ))
              )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableEpisodes.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      episode: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
