import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PaginationContents from '../../share/pagination/paginationContents';
import WriteComp from '../../share/middlewares/writeComponent';
import PropsalProject from '../../components/proposal/propsalProject';
import { proposal } from '../../api/proposal/proposalProject';

const ProposalListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [project, setProject] = useState([]);

  useEffect(() => {
    proposal.proposalProjectList().then((res) => {
      setProject(res.data);
    });
  }, []);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = project.slice(indexOfFirstPost, indexOfLastPost);

  //

  return (
    <Section>
      <h2>제안</h2>
      <h5>넘치는 아이디어를 </h5>
      <h5>선보입니다</h5>
      <PaginationContents
        project={project}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
      <WriteComp />
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

export default ProposalListPage;
