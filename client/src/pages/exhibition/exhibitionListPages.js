import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ExhibitionProject from '../../components/exhibition/exhibitionProject';
import PaginationContents from '../../proposal/paginationContents';
import WriteComp from '../../proposal/writeComponent';
import { exhibition } from '../../api/exhibition/exhibitionProject';

const ExhibitionListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [project, setProject] = useState([]);
  useEffect(() => {
    exhibition.exhibitionProjects().then((res) => {
      setProject(res.data);
    });
  }, []);

  const totalPosts = project.length;
  console.log(totalPosts);

  const inexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = inexOfLastPost - postsPerPage;
  const currentPosts = project.slice(indexOfFirstPost, inexOfLastPost);
  //
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 공통으로 사용할 거면 밑에 섹션은 각자 적는걸로 하고 밑에 있는 건 그대로 가지고 가서
  //컴포넌트로 쓰기
  return (
    <Section>
      <h2>프로젝트 전시 </h2>
      <h5>다양한 프로젝트를 </h5>
      <h5>탐색해보세요</h5>

      <PaginationContents
        project={project}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
      <WriteComp />
      <Container>
        <ExhibitionProject projects={currentPosts}></ExhibitionProject>
      </Container>
    </Section>
  );
};

const Container = styled.div`
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

export default ExhibitionListPage;
