import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

export const List = ({ list, removeItem, handleChange }) => (
  <ul className="watch__list">
    {
      list.map((item) => (
        <li key={item.id} className="watch__item">
          <label htmlFor="checkbox" className="watch__label">
            <Checkbox
              value={item.title}
              checked={item.checked}
              onChange={() => handleChange(item.id)}
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p key={item.title}>
              {item.title}
            </p>
          </label>
          <Button variant="contained" color="secondary" onClick={() => removeItem(item)}>
            Remove
          </Button>
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
