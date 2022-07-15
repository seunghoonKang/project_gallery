import styled from 'styled-components';
import React from 'react';
import CardContent from './cardContents';
import PaginationContents from './paginationContents';
import NewPagination from './newPagination';
import Pagination from 'react-js-pagination';
import { useState, useEffect } from 'react';
import Project from './posts';
import data from './data';
const Proposal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [project, setProject] = useState([]);
  useEffect(() => {
    setProject(data);
  }, []);
  console.log(project);
  const totalPosts = project.length;
  console.log(totalPosts);

  const inexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = inexOfLastPost - postsPerPage;
  const currentPosts = project.slice(indexOfFirstPost, inexOfLastPost);
  //
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Section>
      <h2>제안</h2>
      <h5>다양한 아이디어를 제안합니다. </h5>
      <h5>이런 아이디어는 어떠신가요 ?!</h5>

      <NewPagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
      <Container>
        <Project project={currentPosts}></Project>
      </Container>
    </Section>
  );
};

const Container = styled.div`
  border: 1px solid white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  width: 80%;
  margin: 100px auto auto auto;
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

export default Proposal;
