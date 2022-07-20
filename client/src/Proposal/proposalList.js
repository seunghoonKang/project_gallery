import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PaginationContents from './paginationContents';
import WriteComp from './writeComponent';
import PropsalProject from './propsalProject';
import data from '../data/data';
import SelectTags from './selectTags';

const ProposalList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [project, setProject] = useState([]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = project.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setProject(data);
  }, []);
  //
  return (
    <Section>
      <h2>제안</h2>
      <h5>다양한 아이디어를 제안합니다. </h5>
      <h5>이런 아이디어는 어떠신가요 ?!</h5>

      <PaginationContents
        project={project}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
      <WriteComp />
      <SelectTags projects={project} />
      <Container>
        <PropsalProject projects={currentPosts} />
      </Container>
    </Section>
  );
};

const Container = styled.div`
  border-top: 1px solid white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  width: 80%;
  margin: 75px auto auto auto;
  padding-top: 20px;
`;

const Section = styled.section`
  background-color: #27262b;
  margin-top: 30px;
  & h2,
  h5 {
    color: white;
    text-align: center;
  }
`;

export default ProposalList;
