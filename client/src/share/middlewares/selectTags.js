import * as React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

function SelectTags({ projects }) {
  const [state, setState] = useState();

  const handleBtns = (e) => {
    const tag = e.target.value;
    const mapped = projects.map((item) => item.tags);
    const filtered = mapped.filter((a) => a === tag);
    console.log(mapped);
    // if (tag === 'ALL') {
    //   setState();
    // } else if (tag === 'JAVA') {
    //   const filtered = projects.filter((item) => item.t === 'JAVA');
    //   setState(filtered);
    // } else if (tag === 'C++') {
    //   const filtered = info.filter((item) => item.kind === 'C++');
    //   setState(filtered);
    // }
  };

  const tagSet = new Set();

  projects.map((project) => {
    project.tags.map((tag, i) => {
      tagSet.add(tag);
    });
  });

  const tagArr = [...tagSet];

  return tagArr.map((elem) => {
    return (
      <Button onClick={handleBtns} value={elem}>
        {elem}
      </Button>
    );
  });
}

const Button = styled.button`
  border-radius: 5px;
  width: 150px;
  height: 40px;
  color: white;
  background-color: rgb(42, 53, 200);
  border: none;
  margin-right: 10px;
  :hover {
    background-color: rgb(42, 180, 200);
  }
`;
export default SelectTags;
