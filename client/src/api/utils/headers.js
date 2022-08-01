import React from 'react';

const headers = {
  headers: (headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }),
};

export { headers };
