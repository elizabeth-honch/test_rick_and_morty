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

export const FilteredByGender = ({ selectedGender, selectGender }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <h3 className="species__title">Select filter by gender:</h3>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedGender}
        onChange={selectGender}
      >
        <MenuItem value="ALL">All</MenuItem>
        <MenuItem value="MALE">Male</MenuItem>
        <MenuItem value="FEMALE">Female</MenuItem>
        <MenuItem value="UNKNOWN_GENDER">Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};

FilteredByGender.propTypes = {
  selectedGender: PropTypes.string.isRequired,
  selectGender: PropTypes.func.isRequired,
};
