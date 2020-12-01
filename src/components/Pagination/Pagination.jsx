import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

export const Pagination = ({ paginate, pages }) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {
          pageNumbers.map((page) => (
            <li key={page} className="pagination__item">
              <button
                type="button"
                onClick={() => paginate(page)}
                className="ui positive basic button"
              >
                {page}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  paginate: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
};
