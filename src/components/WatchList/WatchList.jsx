/* eslint global-require: "error" */
/* eslint no-shadow: "error" */
/* eslint no-param-reassign: "error" */
import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useLocalStorage from '../../localStorage';

import { List } from './List/List';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const WatchList = () => {
  const classes = useStyles();
  const id = uuidv4();

  const [addMovie, setAddMovie] = useState(false);
  const [list, setList] = useLocalStorage('data', []);
  const [nameEpisode, setNameEpisode] = useState('');

  const createList = ({ target }) => {
    if (target.value !== '') {
      setNameEpisode(target.value);
    }
  };

  const addItem = () => {
    setAddMovie(true);
    if (nameEpisode !== '') {
      setList([
        ...list,
        {
          id,
          title: nameEpisode,
          checked: false,
        }]);
      setNameEpisode('');
    }
  };

  const removeItem = (item) => {
    setList(list.filter((movie) => movie !== item));
  };

  // eslint-disable-next-line no-shadow
  const handleChange = (id) => {
    setAddMovie(true);
    // eslint-disable-next-line array-callback-return
    list.map((item) => {
      if (item.id === id) {
        item.checked = true;
      }
    });
    setList(list);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="New Episode" value={nameEpisode} onChange={createList} />
      <Button variant="outlined" onClick={addItem}>Add</Button>
      {
        addMovie && (<List list={list} removeItem={removeItem} handleChange={handleChange} />)
      }
    </form>
  );
};
