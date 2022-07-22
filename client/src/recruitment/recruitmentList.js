import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import RecruitmentProject from './recruitmentProject';
import { recruitment } from '../api/recruitment/recruitmentProject';
import PaginationContents from '../proposal/paginationContents';
import WriteComp from '../proposal/writeComponent';
import styled from 'styled-components';
import { css } from '@emotion/react';
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Paper,
} from '@mui/material';

const RecruitmentList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [project, setProject] = useState([]);

  useEffect(() => {
    recruitment.recruitmentProjectList().then((res) => {
      setProject(res.data);
    });
  }, []);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = project.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Section>
      <h2>팀원모집</h2>
      <h5>새로운 프로젝트에 </h5>
      <h5>참여하세요</h5>
      <PaginationContents
        project={project}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
      <WriteComp />
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              css={css`
                background-color: #6c757d;
              `}
            >
              <TableRow>
                <TableCell align="center">번호</TableCell>
                <TableCell align="center">작성자</TableCell>
                <TableCell align="center">제목</TableCell>
                <TableCell align="center">작성일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RecruitmentProject projects={currentPosts} />
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Section>
  );
};

const Container = styled.div`
  border-top: 1px solid white;
  width: 80%;
  margin: 75px auto auto auto;
  padding-top: 20px;
`;

const Section = styled.section`
  background-color: #27262b;
  height: 100vw;
  margin-top: 30px;
  & h2,
  h5 {
    color: white;
    text-align: center;
  }
`;

export default RecruitmentList;
