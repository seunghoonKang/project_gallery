import { paginationItemClasses } from '@mui/material';
import React from 'react';

const NewPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                href="#"
                onClick={(e) => paginate(number)}
                className='"page-link'
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NewPagination;
