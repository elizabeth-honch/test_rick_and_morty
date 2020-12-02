import React from 'react';
import PropTypes from 'prop-types';
import './Episode.css';

import { Pagination } from '../Pagination/Pagination';
import { TableEpisodes } from './TableEpisodes/TableEpisodes';

export const Episodes = ({ episodes, paginate }) => {
  const LENGTH_OF_EPISODES = 3;

  return (
    <div className="episodes">
      {
        (episodes === undefined)
          ? <div className="episode__error">There is no data here</div>
          : <TableEpisodes episodes={episodes} />
      }
      <Pagination pages={LENGTH_OF_EPISODES} paginate={paginate} />
    </div>
  );
};

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(Episodes),
  paginate: PropTypes.func,
};

Episodes.defaultProps = {
  episodes: undefined,
  paginate: undefined,
};
