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
  const [list, setList] = useLocalStorage('data', []);
  const [nameEpisode, setNameEpisode] = useState('');

  const createList = ({ target }) => {
    if (target.value !== '') {
      setNameEpisode(target.value);
    }
  };

  const addItem = () => {
    if (nameEpisode !== '') {
      setList([
        ...list,
        {
          id: uuidv4(),
          title: nameEpisode,
          checked: false,
        }]);
      setNameEpisode('');
    }
  };

  const removeItem = (item) => {
    setList(list.filter((movie) => movie !== item));
  };

  const handleChange = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setList(newList);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="New Episode" value={nameEpisode} onChange={createList} />
      <Button variant="outlined" onClick={addItem}>Add</Button>
      <List list={list} removeItem={removeItem} handleChange={handleChange} />
    </form>
  );
};
