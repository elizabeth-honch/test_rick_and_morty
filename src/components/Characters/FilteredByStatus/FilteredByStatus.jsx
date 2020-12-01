import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const FilteredByStatus = ({ selectedStatus, selectStatus }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <h3 className="species__title">Select filter by status:</h3>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedStatus}
        onChange={selectStatus}
      >
        <MenuItem value="ALL">All</MenuItem>
        <MenuItem value="ALIVE">Alive</MenuItem>
        <MenuItem value="DEAD">Dead</MenuItem>
        <MenuItem value="UNKNOWN_STATUS">Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};

FilteredByStatus.propTypes = {
  selectedStatus: PropTypes.string.isRequired,
  selectStatus: PropTypes.func.isRequired,
};
