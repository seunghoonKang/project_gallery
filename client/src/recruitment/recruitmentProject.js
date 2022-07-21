import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const RecruitmentProject = ({ projects }) => {
  let navigate = useNavigate();
  //nickName, _id, title, description, createdAt,
  return projects.map((project, i) => {
    return (
      <Div
        onClick={() => {
          navigate(`/recruitmentDetail/${project._id}`);
        }}
      >
        <UList>
          <List>
            닉네임: {project.nickName}
            제목: {project.title}
            <span>
              작성시간: {new Date(project.createdAt).toLocaleString()}
            </span>
          </List>
        </UList>
      </Div>
    );
  });
};

const Div = styled.div`
  background-color: white;
  width: 80vw;
  height: 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1vw;
  position: relative;
  :hover {
    background-color: gray;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const UList = styled.ul`
  margin-top: auto;
  position: absolute;
  top: 29%;
`;

const List = styled.li`
  list-style: none;
`;

export default RecruitmentProject;
