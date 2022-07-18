import { paginationItemClasses } from '@mui/material';
import React from 'react';

const NewPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map((number) => {
        return (
          <div className="pagenation">
            <div key={number}>
              <a
                href="#"
                onClick={(e) => paginate(number)}
                className='"page-link'
                style={{ float: 'center' }}
              >
                {number}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default NewPagination;
